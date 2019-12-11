/*------------------------------------------------------------------------
	Projet : Quai des Energies - CNR
	Démon qui interroge le Phiget et envoie un post au serveur nodeJS
	Compilation : 
	- cd qde/presence/src
	"gcc presence.c -o ../bin/presence -lphidget22"
------------------------------------------------------------------------*/
#include <phidget22.h>
#include <stdio.h>
#include <stdlib.h> /* exit */
#include <unistd.h> /* read, write, close */
#include <string.h> /* memcpy, memset */
#include <sys/socket.h> /* socket, connect */
#include <netinet/in.h> /* struct sockaddr_in, struct sockaddr */
#include <netdb.h> /* struct hostent, gethostbyname */
/*------------------------------------------------------------------------
	Constantes et symboles
------------------------------------------------------------------------*/
#define PORT 8000
#define HOST "localhost"

/*------------------------------------------------------------------------
	tracer les erreur
------------------------------------------------------------------------*/
void error(const char *msg) { perror(msg); /*exit(0);*/ }

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
    sprintf(data_presence,"{\"detector\":%d,\"state\":%d}", detector, state);

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
    printf("Request:\n%s\n",message);

    /* create the socket */
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) error("ERROR opening socket");

    /* lookup the ip address */
    server = gethostbyname(host);
    if (server == NULL) error("ERROR, no such host");

    /* fill in the structure */
    memset(&serv_addr,0,sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(portno);
    memcpy(&serv_addr.sin_addr.s_addr,server->h_addr,server->h_length);

    /* connect the socket */
    if (connect(sockfd,(struct sockaddr *)&serv_addr,sizeof(serv_addr)) < 0)
        error("ERROR connecting");

    /* send the request */
    total = strlen(message);
    sent = 0;
    do {
        bytes = write(sockfd,message+sent,total-sent);
        if (bytes < 0)
            error("ERROR writing message to socket");
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
            error("ERROR reading response from socket");
        if (bytes == 0)
            break;
        received+=bytes;
    } while (received < total);

    if (received == total)
        error("ERROR storing complete response from socket");

    /* close the socket */
    close(sockfd);

    /* process response */
    printf("Response:\n%s\n",response);

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
	printf("Description [0]: %s\n", description);
}

static void CCONV onDigitalInput1_StateChange(PhidgetDigitalInputHandle ch, void * ctx, int state) {
	postData(1, state);
}

static void CCONV onDigitalInput1_Error(PhidgetHandle ch, void * ctx, Phidget_ErrorEventCode code, const char * description) {
	printf("Description [1]: %s\n", description);
}

/*------------------------------------------------------------------------
	Main Program
------------------------------------------------------------------------*/
int main() {
	//Declare your Phidget channels and other variables
	PhidgetDigitalInputHandle digitalInput0;
	PhidgetDigitalInputHandle digitalInput1;
	PhidgetReturnCode ret;
	PhidgetReturnCode errorCode;
	const char * errorString;
	char errorDetail[100];
	size_t errorDetailLen = 100;

	PhidgetLog_enable(PHIDGET_LOG_INFO, "phidgetlog.log");

	//Create your Phidget channels
	PhidgetDigitalInput_create(&digitalInput0);
	PhidgetDigitalInput_create(&digitalInput1);

	//Set addressing parameters to specify which channel to open (if any)
	ret = Phidget_setChannel((PhidgetHandle)digitalInput0, 0);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		printf("Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_setChannel((PhidgetHandle)digitalInput1, 1);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		printf("Error (%d): %s", errorCode, errorString);
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
		printf("Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_openWaitForAttachment((PhidgetHandle)digitalInput1, 5000);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		printf("Error (%d): %s", errorCode, errorString);
		exit(1);
	}

	//Do stuff with your Phidgets here or in your event handlers.

	//Wait until Enter has been pressed before exiting
	getchar();

	//Close your Phidgets once the program is done.
	ret = Phidget_close((PhidgetHandle)digitalInput0);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		printf("Error (%d): %s", errorCode, errorString);
		exit(1);
	}
	ret = Phidget_close((PhidgetHandle)digitalInput1);
	if (ret != EPHIDGET_OK) {
		Phidget_getLastError(&errorCode, &errorString, errorDetail, &errorDetailLen);
		printf("Error (%d): %s", errorCode, errorString);
		exit(1);
	}

	PhidgetDigitalInput_delete(&digitalInput0);
	PhidgetDigitalInput_delete(&digitalInput1);
}
