/*------------------------------------------------------------------------
	Projet : Quai des Energies - CNR
	Démon qui interroge le Phiget et envoie un post au serveur nodeJS
	Compilation : 
	- cd qde/presence/src
	"gcc presence.c -o ../bin/qde_presenced -lphidget22"

    To run:		./presenced
    To test daemon:	ps -ef|grep qde_presenced (or ps -aux on BSD systems)
    To test log:	tail -f /tmp/qde_presenced.log
    To test signal:	kill -HUP `cat /tmp/qde_presenced.lock`
    To terminate:	kill `cat /tmp/qde_presenced.lock`
------------------------------------------------------------------------*/
#include <phidget22.h>
#include <stdio.h>
#include <fcntl.h>
#include <signal.h>
#include <stdlib.h> /* exit */
#include <unistd.h> /* read, write, close */
#include <string.h> /* memcpy, memset */
#include <sys/socket.h> /* socket, connect */
#include <netinet/in.h> /* struct sockaddr_in, struct sockaddr */
#include <netdb.h> /* struct hostent, gethostbyname */
#include <sys/syslog.h> /* system log */
/*------------------------------------------------------------------------
	Constantes et symboles
------------------------------------------------------------------------*/
#define PORT 8000
#define HOST "localhost"
#define RUNNING_DIR	"/tmp"
#define LOCK_FILE	"qde_presenced.lock"
#define LOG_FILE	"qde_presenced.log"

void log_message(filename,message)
char *filename;
char *message;
{
FILE *logfile;
	logfile=fopen(filename,"a");
	if(!logfile) return;
	fprintf(logfile,"%s\n",message);
	fclose(logfile);
}

void signal_handler(sig)
int sig;
{
	switch(sig) {
	case SIGHUP:
		log_message(LOG_FILE,"hangup signal catched");
		break;
	case SIGTERM:
		log_message(LOG_FILE,"terminate signal catched");
		exit(0);
		break;
	}
}

void daemonize()
{
int i,lfp;
char str[10];
	if(getppid()==1) return; /* already a daemon */
	i=fork();
	if (i<0) exit(EXIT_FAILURE); /* fork error */
	if (i>0) exit(EXIT_SUCCESS); /* parent exits */
	/* child (daemon) continues */
	setsid(); /* obtain a new process group */
	for (i=getdtablesize();i>=0;--i) close(i); /* close all descriptors */
	i=open("/dev/null",O_RDWR); dup(i); dup(i); /* handle standart I/O */
	umask(027); /* set newly created file permissions */
	chdir(RUNNING_DIR); /* change running directory */
	lfp=open(LOCK_FILE,O_RDWR|O_CREAT,0640);
	if (lfp<0) exit(EXIT_FAILURE); /* can not open */
	if (lockf(lfp,F_TLOCK,0)<0) exit(EXIT_SUCCESS); /* can not lock */
	/* first instance continues */
	sprintf(str,"%d\n",getpid());
	write(lfp,str,strlen(str)); /* record pid to lockfile */
	signal(SIGCHLD,SIG_IGN); /* ignore child */
	signal(SIGTSTP,SIG_IGN); /* ignore tty signals */
	signal(SIGTTOU,SIG_IGN);
	signal(SIGTTIN,SIG_IGN);
	signal(SIGHUP,signal_handler); /* catch hangup signal */
	signal(SIGTERM,signal_handler); /* catch kill signal */
	/* Open the log file */
	openlog ("qde_presenced", LOG_PID, LOG_DAEMON);
	syslog (LOG_NOTICE, "Qde_presenced daemon started.");
}

/*------------------------------------------------------------------------
	Fonction qui envoie un post http au serveur NodeJS
------------------------------------------------------------------------*/
int postData(int detector, int state)
{
    int i;	
    int portno = PORT;
    char *host = HOST;

    struct hostent *server;
    struct sockaddr_in serv_addr;
    int sockfd, bytes, sent, received, total, message_size;
    char *message, response[4096];

    // puts("Parameters: <host> <port> <method> <path> [<data> [<headers>]]");

    char *data_presence;
    data_presence=malloc(50);
    sprintf(data_presence,"{\"detector%d\":\"%d\"}\r\n", detector, state);

    /* How big is the message? */
    message_size=2000;

    /* allocate space for the message */
    message=malloc(message_size);

    /* fill in the parameters */
        sprintf(message,"%s %s HTTP/1.0\r\n",
            "POST",                  			  /* method         */
            "/");                    			  /* path           */
        strcat(message,"Content-Type: application/json"); /* headers */
	strcat(message,"\r\n");
	sprintf(message+strlen(message),"Content-Length: %d\r\n",(int)strlen(data_presence));
        strcat(message,"\r\n");                                /* blank line     */
        strcat(message,data_presence);                         /* body           */

    /* What are we going to send? */
	syslog (LOG_INFO, "Request:\n%s\n", message);

    /* create the socket */
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) syslog (LOG_ERR, "ERROR opening socket");

    /* lookup the ip address */
    server = gethostbyname(host);
    if (server == NULL) syslog (LOG_ERR, "ERROR, no such host");

    /* fill in the structure */
    memset(&serv_addr,0,sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(portno);
    memcpy(&serv_addr.sin_addr.s_addr,server->h_addr,server->h_length);

    /* connect the socket */
    if (connect(sockfd,(struct sockaddr *)&serv_addr,sizeof(serv_addr)) < 0)
		syslog (LOG_ERR, "ERROR connecting");

    /* send the request */
    total = strlen(message);
    sent = 0;
    do {
        bytes = write(sockfd,message+sent,total-sent);
        if (bytes < 0)
			syslog (LOG_ERR, "ERROR writing message to socket");
        if (bytes == 0)
            break;
        sent+=bytes;
    } while (sent < total);

    /* receive the response */
    memset(response,0,sizeof(response));
    total = sizeof(response)-1;
    received = 0;
    do {
        bytes = read(sockfd,response+received,total-received);
        if (bytes < 0)
            syslog (LOG_ERR, "ERROR reading response from socket");
        if (bytes == 0)
            break;
        received+=bytes;
    } while (received < total);

    if (received == total)
        syslog (LOG_ERR, "ERROR storing complete response from socket");

    /* close the socket */
    close(sockfd);

    /* process response */
	syslog (LOG_INFO, "Response:\n%s\n",response);

    free(data_presence);    
    free(message);
    return 0;
}

/*------------------------------------------------------------------------
	Declare any event handlers here. These will be called 
	every time the associated event occurs.
------------------------------------------------------------------------*/
static void CCONV onDigitalInput0_StateChange(PhidgetDigitalInputHandle ch, void * ctx, int state) {
	postData(0, state);
}

static void CCONV onDigitalInput0_Error(PhidgetHandle ch, void * ctx, Phidget_ErrorEventCode code, const char * description) {
	syslog (LOG_INFO, "Description [0]: %s\n", description);
}

static void CCONV onDigitalInput1_StateChange(PhidgetDigitalInputHandle ch, void * ctx, int state) {
	postData(1, state);
}

static void CCONV onDigitalInput1_Error(PhidgetHandle ch, void * ctx, Phidget_ErrorEventCode code, const char * description) {
	syslog (LOG_INFO, "Description [1]: %s\n", description);
}

/*------------------------------------------------------------------------
	Init phidget I/O.
------------------------------------------------------------------------*/
void init_phidget() {
	//Declare your Phidget channels and other variables
	PhidgetDigitalInputHandle digitalInput0;
	PhidgetDigitalInputHandle digitalInput1;
	PhidgetReturnCode ret;
	PhidgetReturnCode errorCode;
	const char * errorString;
	char errorDetail[100];
	size_t errorDetailLen = 100;

	PhidgetLog_enable(PHIDGET_LOG_INFO, LOGFILENAME);

	//Create your Phidget channels
	PhidgetDigitalInput_create(&digitalInput0);
	PhidgetDigitalInput_create(&digitalInput1);

	//Set addressing parameters to specify which channel to open (if any)
	ret = Phidget_setChannel((PhidgetHandle)digitalInput0, 0);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_setChannel((PhidgetHandle)digitalInput1, 1);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}

	//Assign any event handlers you need before calling open so that no events are missed.
	PhidgetDigitalInput_setOnStateChangeHandler(digitalInput0, onDigitalInput0_StateChange, NULL);
	Phidget_setOnErrorHandler((PhidgetHandle)digitalInput0, onDigitalInput0_Error, NULL);
	PhidgetDigitalInput_setOnStateChangeHandler(digitalInput1, onDigitalInput1_StateChange, NULL);
	Phidget_setOnErrorHandler((PhidgetHandle)digitalInput1, onDigitalInput1_Error, NULL);

	//Open your Phidgets and wait for attachment
	ret = Phidget_openWaitForAttachment((PhidgetHandle)digitalInput0, 5000);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_openWaitForAttachment((PhidgetHandle)digitalInput1, 5000);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}	
}

/*------------------------------------------------------------------------
	Close phidget, desalloc, etc...
------------------------------------------------------------------------*/
void close_phidget() {
	//Close your Phidgets once the program is done.
	ret = Phidget_close((PhidgetHandle)digitalInput0);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_close((PhidgetHandle)digitalInput1);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		syslog (LOG_ERR, "Error (%d): %s", errorCode, errorString);
		exit(1);
	}

	PhidgetDigitalInput_delete(&digitalInput0);
	PhidgetDigitalInput_delete(&digitalInput1);
}

int main()
{
	daemonize();
	init_phidget();
	while(1) {
		// Daemon code goes here.
		// Phidget Handlers are doing the stuff
		sleep(1); /* run */
	}

    syslog (LOG_NOTICE, "Qde_presenced daemon terminated.");
    closelog();

    return EXIT_SUCCESS;
}

/* EOF */