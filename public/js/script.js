$(function(){
	
	var intro__duration;
	var quiz__duration;
	var timer__sound;
	var response__ok__anim;
	var response__ok__sound;
	var response__false__anim;
	var response__false__sound;
	var score_text;
	var score_text_en;
	var slickOp;
	var data_refresh_timer;

	var filters = [];
	var slides_menu = [];
	var homeSlider_slides = [];
	var questions = [];



	var menu;
	var homeSlider;
	var btn__menu;
	var btn__langs;


	var pll_d;
	var pll_date;
	var pll_couleur;
	var pll_qualificatif;
	var pll_valeur;
	
	var lang ="fr";
	var homeSlider_data_0;
	var data_refresh_time;

	var quiz_result_duration;
	var quiz_resultAnim__duration;

	var rte_key = "";
	var atmo_key = "";

//OBJECTS _____________



function init(callback){

	$.getJSON("/data/data.json", function(data,index) {
		
			intro__duration = data.settings.durations.duration_titles;
			quiz__duration = data.settings.durations.duration_quiz;
			quiz_result_duration = data.settings.durations.question_resultMessage_duration;
			quiz_resultAnim__duration=data.settings.durations.question__resultAnim__duration;
			timer__sound = data.settings.questions.timer__sound;
			response__ok__sound = data.settings.questions.response__ok__sound;
			response__false__sound = data.settings.questions.response__false__sound;
			response__ok__anim = data.settings.questions.response__ok__anim;
			response__false__anim = data.settings.questions.response__false__anim;
			score_text = data.settings.questions.score_text;
			score_text_en = data.settings.questions.score_text_en;
			data_refresh_time = data.settings.durations.data_refresh_time;

			menu = new Menu();
			homeSlider = new HomeSlider();
			btn__menu = new Menu_button();
			btn__menu.display();
			btn__langs = new Menu_lang_buttons();
			btn__langs.display();

			
			$(".blocker2").addClass("off");
			

			get_filters = function(){
				
				
				let i = 0;
				$.each( data.settings.filters , function(key, value ) {
					
					let filter_name = value[0],
						filter_name_en = value[1];
		    			filter_key = value[2];
					
					filters[i]=new Menu_filters(key,filter_key,filter_name,filter_name_en,i);
					filters[i].display();

		    		i++;
				
				});
			}

			get_slides = function(){
				let i=0;


				$.each( data.slides , function(key, value) {
					var filter_key = value.filter_key,
						intro_anim = value.intro_anim,
						intro_audio = value.intro_audio,
						color = value.color,
						intro_img = value.intro_img,
						
						type = value.type,
						title = value.title,
						type_en = value.type_en,
						title_en = value.title_en,

						shad = value.shad;
						
						
						

					slides_menu[i] = new Menu_slides(filter_key,color,intro_img,type,title,type_en,title_en,i);
					slides_menu[i].display();

					if(filter_key == "video"){
						var video = value.video;
						var video_en = value.video_en;
						homeSlider_slides[i] = new HomeSlider_slide_vid(key,color,intro_anim,intro_audio,video,type,title,type_en,title_en,video_en,shad,i);
					
					}else if (filter_key == "question"){
						let questions_selection = [];
						var o=0;
						$.each( value.questions , function(key, value) {
							questions_selection[o] = value;
							o++;
						})


						homeSlider_slides[i] = new HomeSlider_slide_quiz(key,color,intro_anim,intro_audio,questions_selection,intro_img,type,title,type_en,title_en,shad,i);
					
					}else if (filter_key == "data"){

						var data_num = value.data_num;
						var color_states = value.color_states;
						var duration = value.duration;

						if (data_num == 0){
							var videos =value.animations;
							var sounds =value.sounds;


							homeSlider_slides[i] = new HomeSlider_slide_data_0(key,color,type,title,type_en,title_en,data_num,color_states,videos,sounds,duration,i);
							homeSlider_data_0 = homeSlider_slides[i];
						}else if(data_num == 1){
							homeSlider_slides[i] = new HomeSlider_slide_data_1(key,color,type,title,type_en,title_en,data_num,duration,i);
							homeSlider_data_1 = homeSlider_slides[i];

						}else if(data_num == 2){
							var video = value.video;
							var video_en = value.video_en;
							homeSlider_slides[i] = new HomeSlider_slide_data_2(key,color,type,title,type_en,title_en,data_num,video,video_en,duration,i);

						}else if(data_num == 3){
							homeSlider_slides[i] = new HomeSlider_slide_data_3(key,color,type,title,type_en,title_en,data_num,duration,i);
						}

					}

					//homeSlider_slides[i] = new HomeSlider_slide_vid(key,color,intro_anim,intro_audio,type,title,video,i);



					i++;
				});
			}
			


			get_questions = function(){
				

				let i=0;
				$.each( data.questions , function(key, value) {

					//FR 
					let num = key;
					var color_back = value.color_back;
					let response_ok = value.response_ok;
					let response_ok_content;
					let response_ok_content_en;

					let question = value.question;
					let reponses = [];
					let o = 0;
					
					$.each( value.responses , function(key, value) {
						reponses[o] = value;
						o++;
						if(response_ok == key){
							response_ok_content = value;

						}
					})
					let message = value.message;

					// EN 
					let question_en = value.question_en;
					let reponses_en = [];
					let oo = 0;
					$.each( value.responses_en , function(key, value) {
						reponses_en[oo] = value;
						oo++;

						if(response_ok == key){
							response_ok_content_en = value;

						}
					})
					let message_en = value.message_en;
					

					questions[i] = new Question(num,response_ok,color_back,question,reponses,message, question_en,reponses_en, message_en,response_ok_content,response_ok_content_en, i);

					i++;
					
				})
			}

			slick_activation = function(){
				slickOp = $('.homeSlide').slick({
					lazyLoad:"progressive",
					arrows: false,
					speed:600,
					cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
					dots:true
				});
				//$('.homeSlide').slick('slickFilter', ".video");
				$(".container").addClass("slicked");
			}

			/*----------------------------------------------------------------
				Socket de récupération des données des diverses productions 
				électriques
			----------------------------------------------------------------*/
			get_rte_api = function(){

				socket.emit('ask_for_rte_data', function(data){
					console.log(data);
					let all_en = data.actual_generations_per_production_type;
		
					ene_1 = all_en[7].values[all_en[7].values.length-1].value;
					ene_2 = all_en[1].values[all_en[1].values.length-1].value;
					ene_3 = all_en[2].values[all_en[2].values.length-1].value;
					ene_4 = all_en[3].values[all_en[3].values.length-1].value;
					ene_5 = all_en[10].values[all_en[10].values.length-1].value;
					ene_6 = all_en[8].values[all_en[8].values.length-1].value;
					ene_7 = all_en[4].values[all_en[4].values.length-1].value+all_en[5].values[all_en[5].values.length-1].value+all_en[6].values[all_en[6].values.length-1].value;
					ene_8 = all_en[0].values[all_en[0].values.length-1].value;
					ene_total = ene_1+ene_2+ene_3+ene_4+ene_5+ene_6+ene_7+ene_8;
					ene_total = Math.round(ene_total*100)/100;


					en_1 = (ene_1*100)/ene_total;
					en_2 = (ene_2*100)/ene_total; 
					en_3 = (ene_3*100)/ene_total;
					en_4 = (ene_4*100)/ene_total;
					en_5 = (ene_5*100)/ene_total;
					en_6 = (ene_6*100)/ene_total;
					en_7 = (ene_7*100)/ene_total;
					en_8 = (ene_8*100)/ene_total;

					en_1 = Math.round(en_1*100)/100;
					en_2 = Math.round(en_2*100)/100;
					en_3 = Math.round(en_3*100)/100;
					en_4 = Math.round(en_4*100)/100;
					en_5 = Math.round(en_5*100)/100;
					en_6 = Math.round(en_6*100)/100;
					en_7 = Math.round(en_7*100)/100;
					en_8 = Math.round(en_8*100)/100;

					en_total = en_1+en_2+en_3+en_4+en_5+en_6+en_7+en_8;

					homeSlider_data_1.data_apply();
				});

			}

			/*----------------------------------------------------------------
				Socket de récupération des données de qualité de l'air
				chez ATMO
			----------------------------------------------------------------*/
			get_atmo_api = function(){
				socket.emit('ask_for_atmo_data', function(data){
					console.log(data);
					pll_d = data.indices.data[1];
					pll_date = pll_d.date;
					pll_couleur = pll_d.couleur_html;
					pll_qualificatif = pll_d.qualificatif;
					pll_valeur = pll_d.valeur;
					homeSlider_data_0.data_apply(pll_valeur,pll_date);// attribuer data to slide 
				});
			}

			callback();

	})
}


/*----------------------------------------------------------------
	Initalisation de l'application
----------------------------------------------------------------*/
init(function(){
	get_questions();
	get_slides();
	menu.spacers();
	slick_activation();
	get_filters();
	homeSlider.display();
	get_rte_api();
	get_atmo_api();

	dataRefresh();
});



/*----------------------------------------------------------------
	Listener sur l'élément 'blocker'
----------------------------------------------------------------*/
$(".blocker").click(function(){
	if ($(".container").hasClass("off")) {
				screen__on();
				$(".blocker").addClass("off");

				$(".container").removeClass("off");
			}else {
				screen__off();
				$(".blocker").removeClass("off");
				$(".container").addClass("off");
			}
});

/*----------------------------------------------------------------
	Raffraichir les données de qualité de l'air 
	à intervalles réguliers
----------------------------------------------------------------*/
function dataRefresh(){
	data_refresh_timer = setInterval(function(){

		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();

		if(hour == data_refresh_time[0] && minutes == data_refresh_time[1]){ // Check the time
			get_atmo_api();
			get_rte_api();
		}
		
	}, 10000)
}

/*----------------------------------------------------------------

----------------------------------------------------------------*/
function screen__on(){

	let current = $(".slick-current").attr("data-slick-index");
	goToSlide(0);

	$(".menu_slide_0").addClass("anim");

	menu.move(".menu_slide_"+current,"","",function(){
		homeSlider.open();
	});
	
	if(current == "0") {
		homeSlider_slides[0].intro__play(function(){
			
			homeSlider_slides[0].content__play();
		});
	}
	
	$(".container").addClass("active");
	
}

/*----------------------------------------------------------------
	Eteindre l'écran
----------------------------------------------------------------*/
function screen__off(){
	$(".container").removeClass("active");
	btn__menu.clickAction();
	changeCurrent(0);

}

/*----------------------------------------------------------------
	Changer le slide courant
----------------------------------------------------------------*/
function changeCurrent(num){
	let slide = slides_menu[num].menuSlide.el;
	
	$(".menuNav").find(".current").removeClass("current");
	$(slide).addClass("current");
	menu.move(slide,"zoom","noAnim");
}

var filtered = [];
var blockLast = false;
var filterActive = false;


function HomeSlider(){

	this.display = function(){
		$(".homeSlide").on("beforeChange",function(event,slick, currentSlide){
			toCompare=currentSlide
			if (currentSlide == filtered.length-1) {
				blockLast = false;
			}


		});
		$(".homeSlide").on("afterChange", function(event,slick, currentSlide){

			if(toCompare != currentSlide && blockLast == false){


				if (currentSlide == filtered.length-1) {
					blockLast = true;

				}

				for(i=0;i<filtered.length;i++){
					homeSlider_slides[filtered[i]].intro__reset();
					homeSlider_slides[filtered[i]].content__reset();
				}


				homeSlider_slides[filtered[currentSlide]].intro__play(function(){

					
					homeSlider_slides[filtered[currentSlide]].content__play();
				});

			}
		});

		
		$(".quizz_timerSound").attr("src",timer__sound);
		$(".quizz_goodSound").attr("src",response__ok__sound);
		$(".quizz_badSound").attr("src",response__false__sound);
	}

	this.close = function(){

		let num = $(".slick-current").attr("data-slick-index");
		
		menu.move(".menu_slide_"+num,"zoom","noAnim");

		$(".menuNav__wrap").addClass("active");
		$(".homeSlide").removeClass("active");
		$(".btn__menu").addClass('active');
		$(".btn__lang__wrap").addClass('active');
		$(".filters__wrap").addClass('active');
	}

	this.open = function(delay){

		let num = $(".slick-current").attr("data-slick-index");
				$(".menuNav__wrap").removeClass("active");
				$(".btn__menu").removeClass('active');
				$(".btn__lang__wrap").removeClass('active');
				$(".filters__wrap").removeClass('active');

				if(delay){
					setTimeout(function(){
						$(".homeSlide").addClass("active");
					},delay)
				}else{
					$(".homeSlide").addClass("active");
				}
				
				
		}
}

function HomeSlider_slide_vid(key,color,intro_anim,intro_audio,video,type,title,type_en,title_en,video_en,shad,i){

	this.key = key;
	this.color = color;
	this.intro_anim = intro_anim;
	this.intro_audio = intro_audio;
	this.type = type;
	this.title = title;
	this.video = video;
	this.i = i;
	this.shad = shad;


	let homeSlide = new Box("div","homeSlide__slide video "+key,".homeSlide");
		
		let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src",intro_anim);

			let sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src",intro_audio);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)

		
		let content = new Box("div","homeSlide__slide__video__wrap homeSlide__content",homeSlide.el);

			if(this.shad == "on"){
				let slide_shad = new Box("div","homeSlide_slide_shad",content.el);
			}

			

			let videoo = new Box("video","homeSlide__slide__video",content.el);
			$(videoo.el).attr("src",video);

			let timeBar = new Box("div","time-bar",content.el);
			let titleInfo = new Box("div","homeSlide__slide__titleInfo",content.el);
			$(titleInfo.el).css("background",color);
				let titleInfo_tex = new Box("span","homeSlide__slide__titleInfo__text",titleInfo.el);
				$(titleInfo_tex.el).text(title);
				let titleInfo_duration = new Box("span","homeSlide__slide__titleInfo__duration",titleInfo.el);


	let timer_intro;
	let timer_content;
	let vid_timer = 0;
	let vid_current;
	let pause = false;
	this.playing=false;

	this.french_mode = function(){
		$(title_type.el).text(type_en);
		$(title_name.el).text(title_en);
		$(videoo.el).attr("src",video);
		$(titleInfo_tex.el).text(title);
	}

	this.english_mode = function(){
		$(title_type.el).text(type_en);
		$(title_name.el).text(title_en);
		$(videoo.el).attr("src",video_en);
		$(titleInfo_tex.el).text(title_en);
	}

	this.intro__play = function(callback){
		$(titleText.el).addClass("active");
					$(titleAnim.el).addClass("active");

					// reset apng
					let anim_src = $(titleAnim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(titleAnim_img.el).attr("src","");
					$(titleAnim_img.el).attr("src",anim_src);


					// intro sound play
					let animSound = $(sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}

					//Animation after timer_intro 
					timer_intro = setTimeout(function(){
						
						durationInfo();
						$(titleBlock.el).addClass("off");
						
						if(callback){
							callback();
						}
						
					},intro__duration*1000);


		function durationInfo(){
				let vid = $(videoo.el).get(0);
						let current_duration = vid.duration;
						current_duration= Math.trunc(current_duration);

						if(current_duration>60){
							var duration_decimal = current_duration/60;
							var duration_minutes = Math.trunc(duration_decimal);
							var duration_secondes = current_duration-(60*duration_minutes);
							var duration_final = duration_minutes+"'"+duration_secondes;
						}else {

							var duration_final = "0'"+current_duration;
						}

						$(titleInfo_duration.el).empty();
						$(titleInfo_duration.el).append(duration_final);

						$(titleInfo.el).addClass("active");
						setTimeout(function(){
							$(titleInfo.el).removeClass("active");
						},2000);
			}
	}

	this.intro__reset = function(){
		let animSound = $(sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.pause();
						
					}

				$(titleText.el).removeClass("active");
				$(titleAnim.el).removeClass("active");
				$(titleBlock.el).removeClass("off").removeClass("none");
				clearTimeout(timer_intro);
	}

	this.content__play = function(){
		console.log("play");
		let vid = $(videoo.el).get(0),
		vid_duration = vid.duration;
				

				$(content.el).addClass("active");
				
				
				
				vid.play();
				this.playing = true;


				timer_content = setInterval(function(){

					if(vid_timer < vid_duration){
						vid_timer += 0.022;
					}


					let percent = (100*vid_timer)/vid_duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();

							/*$(".slick-track .slick-current").removeClass("slick-current");
							$(".homeSlide__slide[data-slick-index=0]").addClass("slick-current");*/
							//goToSlide(-1);

							filterActive = false;



						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

				},22);


	}

	this.content__reset = function(){
		let vid = $(videoo.el).get(0);
		$(timeBar.el).css("width","0");
		vid_timer = 0;
		clearInterval(timer_content);
		$(content.el).removeClass("active");
		vid.pause();
		vid.currentTime = 0;
	}

	this.content__pause = function(){

		clearTimeout(timer_intro);
		clearInterval(timer_content);
		let vid = $(videoo.el).get(0);
		vid.pause();
	}
}


function HomeSlider_slide_quiz(key,color,intro_anim,intro_audio,questions_selection,scoreImg,type,title,type_en,title_en,shad,i){
	this.key = key;
	this.color = color;
	this.intro_anim = intro_anim;
	this.intro_audio = intro_audio;
	this.questions_selection = questions_selection;
	this.scoreImg = scoreImg;
	this.type = type;
	this.title = title;
	this.type_en = type_en;
	this.title_en = title_en;
	this.i = i;
	this.shad = shad;

	


	let homeSlide = new Box("div","homeSlide__slide question "+key,".homeSlide");
		
		let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

		let timeBar = new Box("div","time-bar",homeSlide.el);

			let titleImg = new Box("img","homeSlide__slide__titleBlock__img",titleBlock.el);
				$(titleImg.el).attr("src",this.scoreImg);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)


				for (i=0;i<questions_selection.length;i++){
					let o = i+1;
					questions[questions_selection[i]].add(homeSlide.el);
					$(questions[questions_selection[i]].numberQuestion.el).text(o+" / "+questions_selection.length);
				}

				
				let quizScore = new Box("div","question_score",homeSlide.el);
				$(quizScore.el).css("background",questions[questions_selection[0]].color_back);
					let quizScore_img = new Box("img","question_score_img",quizScore.el);
					$(quizScore_img.el).attr("src",scoreImg);
					let quizScore_text_wrap = new Box("div","question_score_text_wrap",quizScore.el);
						let quizScore_supText = new Box("div","question_score_supText", quizScore_text_wrap.el);
						let quizScore_text = new Box("div","question_score_text",quizScore_text_wrap.el);
						$(quizScore_supText.el).text(score_text);
	

	

	let timer_intro;


	this.french_mode = function(){
		$(title_type.el).text(type)
		$(title_name.el).text(title);
		
		for (i=0;i<questions_selection.length;i++){
			questions[questions_selection[i]].french_mode();
		}
	}

	this.english_mode = function(){

		$(title_type.el).text(type_en)
		$(title_name.el).text(title_en);
		
		for (i=0;i<questions_selection.length;i++){
			questions[questions_selection[i]].english_mode();
		}
	}


	this.intro__play = function(callback){
		//$(questions[questions_selection[0]].content.el).addClass("active");

		$(titleText.el).addClass("active");
					


					//Animation after timer_intro 
					timer_intro = setTimeout(function(){
						
						//$(titleBlock.el).addClass("off");
						
						if(callback){
							callback();
						}
						
					},intro__duration*1000);
	}

	this.intro__reset = function(){


				$(titleText.el).removeClass("active");
				$(titleBlock.el).removeClass("off").removeClass("none");
				clearTimeout(timer_intro);
		
	}


	let timer_content;
	let timer_questionMess;
	let timer_questionShow;
	let timer_nextSlick;
	let quiz_timer = 0;
	let pause = false;
	this.playing=false;
	let quiz_timer_sound = $(".quizz_timerSound").get(0);
	let quiz_good_sound = $(".quizz_goodSound").get(0);
	let quiz_bad_sound = $(".quizz_badSound").get(0);
	let questionEnded = false;

	let scoreOn = false;
	let score=0;

	

	this.content__play = function(){
		console.log("play");
		$(questions[questions_selection[0]].content.el).addClass("active");

		let that = this;
		this.playing = true;
		let counter_max = questions_selection.length;
		let counter =0;
		let percent;


		quiz_timer_sound.play();
		questionRestart();
		//timer_content = setInterval(questionRunning,22);

		// Definir comment activer le quiz : pause pendant quiz, pause pendant score,ou normal ; 
		/*if (questionEnded){
			questionEnd("pause",function(){
					questionRestart()
				});
		}else if(scoreOn){

			timer_nextSlick = setTimeout(function(){

				$('.homeSlide').slick('slickNext');

			},3000);

		}else{
			quiz_timer_sound.play();
			timer_content = setInterval(questionRunning,22);
		}*/

		// Click sur une réponse 
		$(document).unbind("click").on("click",".questionnaire__reponses__li",function(){

			if(questionEnded == false){
				if (counter < counter_max){
					questionEnd(this,function(){
						questionRestart();
					});
				}else{
					questionEnd(this,function(){
						questionScore();
					});
				}
			}
			
				
		});


		// Questions réactions 
		function questionRunning(){

			console.log("question Running")

			questionEnded = false;
			
			if(quiz_timer < quiz__duration){
				quiz_timer += 0.022;
			}
					
					percent = (100*quiz_timer)/quiz__duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

							if (counter < counter_max){
									questionEnd("",function(){
									questionRestart();
									
								});
								
							}else{
								questionEnd("",function(){
								questionScore();

								});
							}

							

					}
		}

		function questionEnd(that,callback){
			questionEnded = true;

					let o = counter-1;
					//let o = counter;
					let reponse_ok = questions[questions_selection[o]].response_ok;
					

				if(that=="pause"){
					
					

				}else{

					
					if($(that).hasClass(reponse_ok)){

						$(that).addClass("click_anim").addClass("goodgood");
						$(questions[questions_selection[o]].content.el).addClass("good");
						$(questions[questions_selection[o]].quizAnim_img.el).attr("src",response__ok__anim);
						quiz_good_sound.play();

						$(questions[questions_selection[o]].quizResponseMessage.el).css("background","#59A535");
						score++;

					}else {

						$(that).addClass("click_anim").addClass("bad");
						//$(questions[questions_selection[o]].quizResponses_wrap.el).find("."+reponse_ok).addClass("good");

						$(questions[questions_selection[o]].content.el).addClass("bad");
						$(questions[questions_selection[o]].quizAnim_img.el).attr("src",response__false__anim);
						 quiz_bad_sound.play();

						$(questions[questions_selection[o]].quizResponseMessage.el).css("background","#CD0000");
						
						 
					}

				}

				
	

					// Response message apparition
					timer_questionMess = setTimeout(function(){

						$(questions[questions_selection[o]].quizResponseMessage.el).addClass("active");

					},quiz_resultAnim__duration*1000);


					if(callback){

						timer_questionShow = setTimeout(function(){

							callback();

						},quiz_resultAnim__duration*1000+quiz_result_duration*1000);
					}
					



					clearInterval(timer_content);
					percent=100.00;
					$(timeBar.el).css("width","100%");
					quiz_timer_sound.pause();
		}

		function questionRestart(){


			$(questions[questions_selection[counter]].content.el).addClass("active");

			console.log(counter);

			questions[questions_selection[counter]].anim_play();

			$(timeBar.el).css("width","0");
			quiz_timer = 0;
			quiz_timer_sound.pause();
			quiz_timer_sound.currentTime = 0;
			percent = 0;

			timer_content = setInterval(questionRunning,22);
			quiz_timer_sound.play();
			counter++;
		}

		function questionScore(){

			scoreOn = true;
			$(timeBar.el).css("width","0");
			quiz_timer = 0;
			quiz_timer_sound.pause();
			quiz_timer_sound.currentTime = 0;
			percent = 0;
			
			$(quizScore_text.el).text(score+" sur "+questions_selection.length);
			$(quizScore.el).addClass("active");


			timer_nextSlick = setTimeout(function(){
				scoreOn = false;
				$('.homeSlide').slick('slickNext');

			},3000);


		}

		


	}

	this.content__reset = function(element){
		//questions[questions_selection[counter]].anim_reset();
		questionEnded = false;
		score = 0;
		clearTimeout(timer_questionMess);
		clearTimeout(timer_questionShow);
		clearTimeout(timer_nextSlick);
		$(timeBar.el).css("width","0");
		quiz_timer = 0;
		clearInterval(timer_content);
		quiz_timer_sound.pause();
		quiz_good_sound.pause();
		quiz_bad_sound.pause();
		quiz_timer_sound.currentTime = 0;
		quiz_good_sound.currentTime = 0;
		quiz_bad_sound.currentTime = 0;
		$(".response__message").removeClass("active");
		$(".questionnaire__reponses__li").removeClass("bad").removeClass("good").removeClass("goodgood").removeClass("click_anim");
		$(".homeSlide__slide__questionnaire__wrap").removeClass("good").removeClass("bad");
		$(".question_score").removeClass("active");



		for (i=1; i<questions_selection.length;i++){
			$(questions[questions_selection[i]].content.el).removeClass("active");
		}
		


	}

	this.content__pause = function(){
		this.content__reset();
	}
}

function Question(num,response_ok,color_back,question,responses,message,question_en,reponses_en, message_en,response_ok_content,response_ok_content_en,i){
	this.i = i;
	this.num = num;
	this.question = question;
	this.responses = responses;
	this.response_ok = response_ok;
	this.message = message;
	this.color_back = color_back;
	this.content;
	this.quizQuestions_wrap,
	this.quizQuestion,
	this.quizResponses_wrap,
	this.quizResponseMessage;
	this.quizAnim;
	this.quizAnim_img;
	this.quizResponses;

	this.question_en = question_en;
	this.reponses_en = reponses_en;
	this.message_en = message_en;

	let titleAnim;
	let titleAnim_img;
	let sound;


	
	this.french_mode = function(){
		$(this.quizQuestion.el).text(question);
		for (i=0;i<3;i++){
			$(this.quizResponses[i].el).text(this.responses[i]);
		}
		$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content+"</span><span class='response_tex'>"+this.message+"</span>");
	}

	this.english_mode = function(){
		$(this.quizQuestion.el).text(question_en);
		for (i=0;i<3;i++){
			$(this.quizResponses[i].el).text(this.reponses_en[i]);
		}
		$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content_en+"</span><span class='response_tex'>"+this.message_en+"</span>");


	}



	this.add = function(wrap,que){
		 this.content = new Box("div","homeSlide__slide__questionnaire__wrap homeSlide__content",wrap);
		 $(this.content.el).css("background",this.color_back);

		 	 titleAnim = new Box("div","homeSlide__slide__titleBlock__anim_q",this.content.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src","medias/animations/anooki-jump.png");

			sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src","medias/animations/anooki-jump.wav");

			
			this.quizAnim = new Box("div","questionnaire__anim",this.content.el);
			this.quizAnim_img = new Box("img","",this.quizAnim.el);
			this.quizQuestions_wrap = new Box("div","questionnaire",this.content.el);
			this.numberQuestion = new Box("div","num__question",this.quizQuestions_wrap.el);
			this.quizQuestion = new Box("div","questionnaire__question ",this.quizQuestions_wrap.el);
			this.quizResponses_wrap = new Box("ul","questionnaire__reponses ",this.quizQuestions_wrap.el);

			$(this.quizQuestion.el).text(question);

				this.quizResponses =[];
				for (i=0;i<3;i++){
					let o = i+1;
					this.quizResponses[i] = new Box("li","questionnaire__reponses__li reponse_"+o,this.quizResponses_wrap.el);
					$(this.quizResponses[i].el).text(this.responses[i]);
				}
			

			this.quizResponseMessage = new Box("div","response__message",this.content.el);
			$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content+"</span><span class='response_tex'>"+this.message+"</span>");
	}

	this.anim_play = function(){
		$(titleAnim.el).addClass("active");

					// reset apng
					let anim_src = $(titleAnim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(titleAnim_img.el).attr("src","");
					$(titleAnim_img.el).attr("src",anim_src);


					// intro sound play
					let animSound = $(sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}

	}

	this.anim_reset =function(){
		$(titleAnim.el).removeClass("active");
		let animSound = $(sound.el)[0];
			if (animSound== undefined){
		}else {
			animSound.pause();
						
		}
		
	}
}


function HomeSlider_slide_data_0(key,color,type,title,type_en,title_en,data_num,color_states,videos,sounds,duration,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;
	this.color_states= color_states;
	

	let val = 0;
	let data_timer = 0;
	let timer_content;

	let pll_quali_fr = ["Très bon","Bon","moyen","Médiocre","Mauvais","Très mauvais"];
	let pll_quali_en = ["Very good","Good","middle","Poor","Bad","Very bad"];
	let pll_quali_in;
	


	let pll_val_max;

	

	


	let homeSlide = new Box("div","homeSlide__slide data data_"+data_num+" "+key,".homeSlide");


		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

		

			let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				good_anim_img = new Box ("img","",titleAnim.el);

			let good_sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			

			
			let backcol_6 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_5= new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_4 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_3 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_2 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_1 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);

			$(backcol_1.el).css("background",this.color_states[0]);
			$(backcol_2.el).css("background",this.color_states[1]);
			$(backcol_3.el).css("background",this.color_states[2]);
			$(backcol_4.el).css("background",this.color_states[3]);
			$(backcol_5.el).css("background",this.color_states[4]);
			$(backcol_6.el).css("background",this.color_states[5]);
			

			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text("info "+pll_date);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)

				let title_valeur = new Box("h2","homeSlide__slide__titleBlock__title__valeur",titleText.el);
					let title_valeur_n = new Box("span","homeSlide__slide__titleBlock__title__valeur__n", title_valeur.el);
					let title_valeur_hundred = new Box("span","homeSlide__slide__titleBlock__title__valeur__hundred", title_valeur.el);
				
				$(title_valeur_n.el).text(val);
				$(title_valeur_hundred.el).text("/100");

				let title_qualificatif = new Box("h2","homeSlide__slide__titleBlock__title__qual",titleText.el);
				


			let timeBar = new Box("div","time-bar",titleBlock.el);



		/*let qualificatif = new Box("div","pll_qualificatif",content.el);
		$(qualificatif.el).text(pll_qualificatif);*/


	let val_int;
	let show_quali;




	this.data_apply = function(pll_valeur,pll_date){

		pll_val_max = Math.round(pll_valeur);
		//pll_val_max = 27;

		$(title_type.el).text("info "+pll_date);

		if (pll_val_max >0 && pll_val_max <= 16){

			pll_quali_in = 0;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[0]);
			$(good_sound.el).attr("src",sounds[0]);

		}else if (pll_val_max >16 && pll_val_max <= 33){

			pll_quali_in = 1;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[1]);
			$(good_sound.el).attr("src",sounds[1]);

		}else if (pll_val_max >33 && pll_val_max <= 50){
			pll_quali_in = 2;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[2]);
			$(good_sound.el).attr("src",sounds[2]);
		
		}else if (pll_val_max >50 && pll_val_max <= 67){
			pll_quali_in = 3;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[3]);
			$(good_sound.el).attr("src",sounds[3]);
		
		}else if (pll_val_max >67 && pll_val_max <= 85){
			pll_quali_in = 4;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[4]);
			$(good_sound.el).attr("src",sounds[4]);
		
		}else if (pll_val_max >85) {
			pll_quali_in = 5;
			if(lang="fr"){
				$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
								
			}else if (lang="en"){
				$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
			}

			$(good_anim_img.el).attr("src",videos[5]);
			$(good_sound.el).attr("src",sounds[5]);
		
		}
	}
	this.data_apply();

	this.french_mode = function(){
		$(title_qualificatif.el).text(pll_quali_fr[pll_quali_in]);
		$(title_name.el).text(title);
	}

	this.english_mode = function(){
		$(title_qualificatif.el).text(pll_quali_en[pll_quali_in]);
		$(title_name.el).text(title_en);
	}
	
	
	let op=[1,1,1,1,1,1];


	this.intro__play = function(){

		$(titleText.el).addClass("active");
		


		val_int = setInterval(function(){ 
			if(val <pll_val_max){
				val = val +1;
				
				$(title_valeur_n.el).text(val);

				if(val>0 && val<=16){

					let di = 1/(16-0);
					if(op[0]>0){
						op[0]=op[0]-di;
					}
						
					$(backcol_1.el).css("opacity",op[0]);

				}if(val>17 && val<=33){
					
					let di = 1/(33-17);
					if(op[1]>0){
						op[1]=op[1]-di;
					}
					$(backcol_2.el).css("opacity",op[1]);
					
				}if(val>34 && val<=50){
					let di = 1/(50-34);
					if(op[2]>0){
							op[2]=op[2]-di;
						}
					$(backcol_3.el).css("opacity",op[2]);
					
				}if(val>51 && val<=67){
					let di = 1/(67-51);
					if(op[3]>0){
							op[3]=op[3]-di;
						}
					$(backcol_4.el).css("opacity",op[3]);
					
				}if(val>68 && val<=84){
					let di = 1/(84-68);
					if(op[4]>0){
							op[4]=op[4]-di;
						}
					$(backcol_5.el).css("opacity",op[4]);
					
				}if(val>85){
					

					/*let di = 1/(100-85);
					if(op[5]>0){
							op[5]=op[5]-di;
						}
					$(backcol_6.el).css("opacity",op[5]);*/
				}

				
					/*if(val>0 && val<=11){


						if(op[0]>0){
							op[0]=op[0]-0.1;
						}
						
						$(backcol_1.el).css("opacity",op[0]);
					

					}if(val>11 && val<=21){

						if(op[1]>0){
							op[1]=op[1]-0.1;
						}
						$(backcol_2.el).css("opacity",op[1]);

					}if(val>21 && val<=31){

						if(op[2]>0){
							op[2]=op[2]-0.1;
						}
						$(backcol_3.el).css("opacity",op[2]);

					}if(val>31 && val<=41){

						if(op[3]>0){
							op[3]=op[3]-0.1;
						}
						$(backcol_4.el).css("opacity",op[3]);

					}if(val>41 && val<=51){

						if(op[4]>0){
							op[4]=op[4]-0.1;
						}
						$(backcol_5.el).css("opacity",op[4]);

					}if(val>51 && val<=61){

						if(op[5]>0){
							op[5]=op[5]-0.1;
						}
						$(backcol_6.el).css("opacity",op[5]);

					}if(val>61 && val<=71){

						if(op[6]>0){
							op[6]=op[6]-0.1;
						}
						$(backcol_7.el).css("opacity",op[6]);

					}if(val>71 && val<=81){

						if(op[7]>0){
							op[7]=op[7]-0.1;
						}
						$(backcol_8.el).css("opacity",op[7]);

					}if(val>81 && val<=91){

						if(op[8]>0){
							op[8]=op[8]-0.1;
						}
						$(backcol_9.el).css("opacity",op[8]);

					}*/





			}else{
				clearInterval(val_int);
				$(title_valeur_hundred.el).addClass("active");


				show_quali = setTimeout(function(){
					$(titleText.el).addClass("top");
					$(title_qualificatif.el).addClass("active");
					animeStart();

				},1000)
				

				

				function animeStart(){
					let anim_src = $(good_anim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(good_anim_img.el).attr("src","");
					$(good_anim_img.el).attr("src",anim_src);

					$(titleAnim.el).addClass("active");

					// intro sound play
					let animSound = $(good_sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}
				}
				
			}
		}, 70);


		timer_content = setInterval(function(){


					if(data_timer < duration){

						data_timer += 0.022;
					}


					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();

							/*$(".slick-track .slick-current").removeClass("slick-current");
							$(".homeSlide__slide[data-slick-index=0]").addClass("slick-current");*/
							//goToSlide(-1);

							filterActive = false;



						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

			},22);
	}

	

	this.intro__reset = function(){

		$(titleAnim.el).removeClass("active");
		let animSound = $(good_sound.el)[0];
		animSound.pause();
		animSound.currentTime = 0;

		op=[1,1,1,1,1,1,1,1,1];
		clearInterval(val_int);
		clearTimeout(show_quali);
		$(titleText.el).removeClass("top");
		$(title_qualificatif.el).removeClass("active");
		$(title_valeur_hundred.el).removeClass("active");
		val = 0;

		$(backcol_1.el).css("opacity","1");
				$(backcol_2.el).css("opacity","1");
				$(backcol_3.el).css("opacity","1");
				$(backcol_4.el).css("opacity","1");
				$(backcol_5.el).css("opacity","1");
				$(backcol_6.el).css("opacity","1");
				




	
	}

	


	

	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function HomeSlider_slide_data_1(key,color,type,title,type_en,title_en,data_num,duration,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;
	

	let data_timer = 0;
	let timer_content;

	let enText_1 = "NUCLÉAIRE";
	let enText_2 = "GAZ";
	let enText_3 = "CHARBON";
	let enText_4 = "FIOUL";
	let enText_5 = "HYDRAULIQUE";
	let enText_6 = "SOLAIRE";
	let enText_7 = "EOLIEN";
	let enText_8 = "BIOENERGIE";
	let enText_final = "énergies<br>renouvelables";

	let enText_1_en = "nuclear";
	let enText_2_en = "GAS";
	let enText_3_en = "COAL";
	let enText_4_en = "OIL";
	let enText_5_en = "wind onshore";
	let enText_6_en = "SOLAR";
	let enText_7_en = "hydraulic";
	let enText_8_en = "bioenergy";
	let enText_final_en = "renewable<br>energies";

	

	let homeSlide= new Box("div","homeSlide__slide data data_"+data_num+" "+key,".homeSlide");
		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title homeSlide__slide__titleBlock__title__pie",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type ",titleText.el);
				$(title_type.el).text("info date");

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
								

			let pie_box = new Box("div","homeSlide__slide__pie__box",titleBlock.el);

					let pie_text_result_wrap = new Box("div","homeSlide__slide__pie__text_result",pie_box.el);
						let pie_text_result_1 = new Box("div","homeSlide__slide__pie__text_result_1",pie_text_result_wrap.el);
						let pie_text_result_2 = new Box("div","homeSlide__slide__pie__text_result_2",pie_text_result_wrap.el);

					let pie_text_wrap_2 = new Box("div","homeSlide__slide__pie__text_wrap nopll",pie_box.el);
						let pie_text_8 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_7 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_6 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_5 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						
					let pie_wrap = new Box("div","homeSlide__slide__pie__wrap",pie_box.el);
						let pie_8 = new Box("div","homeSlide__slide__pie pie_8",pie_wrap.el);
						let pie_7 = new Box("div","homeSlide__slide__pie pie_7",pie_wrap.el);
						let pie_6 = new Box("div","homeSlide__slide__pie pie_6",pie_wrap.el);
						let pie_5 = new Box("div","homeSlide__slide__pie pie_5",pie_wrap.el);
						let pie_4 = new Box("div","homeSlide__slide__pie pie_4",pie_wrap.el);
						let pie_3 = new Box("div","homeSlide__slide__pie pie_3",pie_wrap.el);
						let pie_2 = new Box("div","homeSlide__slide__pie pie_2",pie_wrap.el);
						let pie_1 = new Box("div","homeSlide__slide__pie pie_1",pie_wrap.el);
						let pie_0 = new Box("div","homeSlide__slide__pie pie_0",pie_wrap.el);
						
				
					let pie_text_wrap_1 = new Box("div","homeSlide__slide__pie__text_wrap pll",pie_box.el);
						let pie_text_1 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_2 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_3 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_4 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						
					

				



			let timeBar = new Box("div","time-bar",titleBlock.el);



		/*let qualificatif = new Box("div","pll_qualificatif",content.el);
		$(qualificatif.el).text(pll_qualificatif);*/

		let resultAnim;
		let en_clean;
	this.data_apply =function(){

		en_clean = en_5+en_6+en_7+en_8;
		en_clean = Math.round(en_clean * 100) / 100;

		let deg_1 = en_1*3.6;
		let deg_2 = deg_1+en_2*3.6;
		let deg_3 = deg_2+en_3*3.6;
		let deg_4 = deg_3+en_4*3.6;
		let deg_5 = deg_4+en_5*3.6;
		let deg_6 = deg_5+en_6*3.6;
		let deg_7 = deg_6+en_7*3.6;
		let deg_8 = deg_7+en_8*3.6;


		$(pie_1.el).css("background","conic-gradient(#000000 "+en_1+"%, transparent "+en_1+"%)");
		$(pie_2.el).css("background","conic-gradient(#000000 "+en_2+"%, transparent "+en_2+"%)");
		$(pie_3.el).css("background","conic-gradient(#000000 "+en_3+"%, transparent "+en_3+"%)");
		$(pie_4.el).css("background","conic-gradient(#000000 "+en_4+"%, transparent "+en_4+"%)");
		$(pie_5.el).css("background","conic-gradient(#FFFFFF "+en_5+"%, transparent "+en_5+"%)");
		$(pie_6.el).css("background","conic-gradient(#FFFFFF "+en_6+"%, transparent "+en_6+"%)");
		$(pie_7.el).css("background","conic-gradient(#FFFFFF "+en_7+"%, transparent "+en_7+"%)");
		$(pie_8.el).css("background","conic-gradient(#FFFFFF "+en_8+"%, transparent "+en_8+"%)");

		$(title_name.el).text(title+" est de "+ene_total+" MW");
		$(pie_text_result_1.el).html(enText_final);


		
		$(pie_text_5.el).text(enText_5+" "+en_5+"%");
		$(pie_text_6.el).text(enText_6+" "+en_6+"%");
		$(pie_text_7.el).text(enText_7+" "+en_7+"%");
		$(pie_text_8.el).text(enText_8+" "+en_8+"%");
		$(pie_text_1.el).text(en_1+"% "+enText_1);
		$(pie_text_2.el).text(en_2+"% "+enText_2);
		$(pie_text_3.el).text(en_3+"% "+enText_3);
		$(pie_text_4.el).text(en_4+"% "+enText_4);

		$(pie_2.el).css({"transform":"rotate("+deg_1+"deg)"});
		$(pie_3.el).css({"transform":"rotate("+deg_2+"deg)"});
		$(pie_4.el).css({"transform":"rotate("+deg_3+"deg)"});
		$(pie_5.el).css({"transform":"rotate("+deg_4+"deg)"});
		$(pie_6.el).css({"transform":"rotate("+deg_5+"deg)"});
		$(pie_7.el).css({"transform":"rotate("+deg_6+"deg)"});
		$(pie_8.el).css({"transform":"rotate("+deg_7+"deg)"});
	}



	this.french_mode = function(){
		$(title_name.el).text(title+" est de "+en_total+" MW");
		$(pie_text_5.el).text(enText_5+" "+en_5+"%");
		$(pie_text_6.el).text(enText_6+" "+en_6+"%");
		$(pie_text_7.el).text(enText_7+" "+en_7+"%");
		$(pie_text_8.el).text(enText_8+" "+en_8+"%");
		$(pie_text_1.el).text(en_1+"% "+enText_1);
		$(pie_text_2.el).text(en_2+"% "+enText_2);
		$(pie_text_3.el).text(en_3+"% "+enText_3);
		$(pie_text_4.el).text(en_4+"% "+enText_4);
		$(pie_text_result_1.el).html(enText_final);
		
	}

	this.english_mode = function(){
		$(title_name.el).text(title_en+" is "+en_total+" MW");
		$(pie_text_5.el).text(enText_5_en+" "+en_5+"%");
		$(pie_text_6.el).text(enText_6_en+" "+en_6+"%");
		$(pie_text_7.el).text(enText_7_en+" "+en_7+"%");
		$(pie_text_8.el).text(enText_8_en+" "+en_8+"%");
		$(pie_text_1.el).text(en_1+"% "+enText_1_en);
		$(pie_text_2.el).text(en_2+"% "+enText_2_en);
		$(pie_text_3.el).text(en_3+"% "+enText_3_en);
		$(pie_text_4.el).text(en_4+"% "+enText_4_en);
		$(pie_text_result_1.el).html(enText_final_en);
	}
	
	
	let op=[1,1,1,1,1,1,1,1,1];
	let pie_timer_1;
	let pie_timer_2;
	let pie_timer_3;
	let pie_timer_4;
	let pie_timer_5;
	let pie_timer_6;
	let pie_timer_7;
	let pie_timer_8;
	let pie_timer_9;
	let pie_timer_10;

	this.intro__play = function(){
		$(titleText.el).addClass("active").addClass("anime");
		$(pie_wrap.el).addClass("anime");

		/*$(pie_1.el).css({"opacity":".5"});
		$(pie_2.el).css({"opacity":".3","transform":"rotate("+deg_1+"deg)","transition":"all .3s .5s ease-in"});
		$(pie_3.el).css({"opacity":".25","transform":"rotate("+deg_2+"deg)","transition":"all .3s 1s ease-in"});
					$(pie_4.el).css({"opacity":".2","transform":"rotate("+deg_3+"deg)","transition":"all .3s 1.5s ease-in"});
					$(pie_5.el).css({"opacity":".8","transform":"rotate("+deg_4+"deg)","transition":"all .3s 2.0s ease-in"});
					$(pie_6.el).css({"opacity":".6","transform":"rotate("+deg_5+"deg)","transition":"all .3s 2.5s ease-in"});
					$(pie_7.el).css({"opacity":".4","transform":"rotate("+deg_6+"deg)","transition":"all .3s 3s ease-in"});
					$(pie_8.el).css({"opacity":".2","transform":"rotate("+deg_7+"deg)","transition":"all .3s 3.5s ease-in"});*/

		
		let timee=600;
		
		
		pie_timer_1 = setTimeout(function(){
			$(pie_1.el).css({"opacity":".5"});
			$(pie_text_1.el).addClass("active");
		},timee);
		
		pie_timer_2 = setTimeout(function(){
			$(pie_2.el).css({"opacity":".4"});
			$(pie_text_2.el).addClass("active");
		},timee*2);
		
		pie_timer_3 = setTimeout(function(){
			$(pie_3.el).css({"opacity":".3"});
			$(pie_text_3.el).addClass("active");
		},timee*3);

		pie_timer_4 = setTimeout(function(){
			$(pie_4.el).css({"opacity":".3"});
			$(pie_text_4.el).addClass("active");
		},timee*4);
		
		pie_timer_5 = setTimeout(function(){
			$(pie_5.el).css({"opacity":".9"});
			$(pie_text_5.el).addClass("active");

		},timee*5);

		pie_timer_6 = setTimeout(function(){
			$(pie_6.el).css({"opacity":".7"});
			$(pie_text_6.el).addClass("active");
		},timee*6);

		pie_timer_7 = setTimeout(function(){
			$(pie_7.el).css({"opacity":".5"});
			$(pie_text_7.el).addClass("active");
		},timee*7);

		pie_timer_8 = setTimeout(function(){
			$(pie_8.el).css({"opacity":".3"});
			$(pie_text_8.el).addClass("active");
		},timee*8);

		pie_timer_9= setTimeout(function(){
			$(pie_text_wrap_2.el).addClass("off");
		},timee*10);
		
		pie_timer_10= setTimeout(function(){
			$(pie_text_result_wrap.el).addClass("active");
			$(pie_5.el).css({"opacity":"1"});
			$(pie_6.el).css({"opacity":"1"});
			$(pie_7.el).css({"opacity":"1"});
			$(pie_8.el).css({"opacity":"1"});

			let ii=0;
			resultAnim = setInterval(function(){
				if (ii < en_clean) {
					ii = ii+.13;

					$(pie_text_result_2.el).text(Math.round(ii * 100) / 100 +" %");
				
				}else{
					$(pie_text_result_2.el).text(en_clean+" %");
					clearInterval(resultAnim);
				}
			
			},10);
		},timee*10.4);


		timer_content = setInterval(function(){


					if(data_timer < duration){

						data_timer += 0.022;
					}


					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();
							filterActive = false;



						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}
		},22);


	}

	

	this.intro__reset = function(){
		clearTimeout(pie_timer_1);
		clearTimeout(pie_timer_2);
		clearTimeout(pie_timer_3);
		clearTimeout(pie_timer_4);
		clearTimeout(pie_timer_5);
		clearTimeout(pie_timer_6);
		clearTimeout(pie_timer_7);
		clearTimeout(pie_timer_8);
		clearTimeout(pie_timer_9);
		clearTimeout(pie_timer_10);

		$(titleText.el).removeClass("anime");
		$(pie_wrap.el).removeClass("anime");
		$(".homeSlide__slide__pie").css("opacity","0");
		$(".pie_0").css("opacity",".2");
		$(".homeSlide__slide__pie__text_1").removeClass("active");
		$(".homeSlide__slide__pie__text_2").removeClass("active");
		$(pie_text_wrap_2.el).removeClass("off");
		$(pie_text_result_wrap.el).removeClass("active");


	}

	


	

	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function HomeSlider_slide_data_2(key,color,type,title,type_en,title_en,data_num,video,video_en,duration,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.video = video;
	this.i = i;
	
	let data_timer = 0;
	let timer_content;

	let homeSlide= new Box("div","homeSlide__slide data data_"+data_num+" "+key,".homeSlide");
	
	


	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			/*let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src",intro_anim);

			let sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src",intro_audio);*/

			let videoo= new Box("video","homeSlide__slide__data_video",titleBlock.el);
			$(videoo.el).attr("src",video);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title homeSlide__slide__titleBlock__title__data2",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type ",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title);

	let timeBar = new Box("div","time-bar",titleBlock.el);


	let vid_timer = 0;
	let vid = $(videoo.el).get(0);

	this.french_mode = function(){
		$(title_name.el).text(title);
		$(title_type.el).text(type);
		$(videoo.el).attr("src",video);
	}

	this.english_mode = function(){
		$(title_name.el).text(title_en);
		$(title_type.el).text(type_en);
		$(videoo.el).attr("src",video_en);
	}

	this.intro__play = function(){

		$(titleText.el).addClass("active").addClass("anime");;

		
		vid.play();

				timer_content = setInterval(function(){

					if(vid_timer < duration){
						vid_timer += 0.022;
					}


					let percent = (100*vid_timer)/duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();
							filterActive = false;



						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

				},22);

			
	}

	this.intro__reset = function(){
		vid.pause();
		vid.currentTime = 0;
		vid_timer = 0;
		$(titleText.el).removeClass("anime");

	}	


	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}


function Incr_anim(num,element,pre,un){

		let ii=0;
		let int;

		this.start = function(){
			

			int = setInterval(function(){
				if (ii < num){
					ii= ii+Math.round(num/50);

					if(pre=="prev"){
						$(element).text(un+ii);
					}else if(pre=="after"){
						$(element).text(ii+un);
					}
					
				
				}else{

					if(pre=="prev"){
						$(element).text(un+num);
					}else if(pre=="after"){
						$(element).text(num+un);
					}
					clearInterval(int);
				}

			},20);
		}

		this.reset = function(){
			console.log("reseeeeet");
			clearInterval(int);
			ii=0;
			
		}
}

function HomeSlider_slide_data_3(key,color,type,title,type_en,title_en,data_num,duration,i){
	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;


	let dt_text1 = "hydraulique";
	let dt_text2 = "éolien";
	let dt_text3 = "solaire";
	let dt_textFinal= "personnes alimentées";

	let dt_text1_en = "hydraulic";
	let dt_text2_en = "eolian";
	let dt_text3_en = "solar";
	let dt_textFinal_en = "people powered";

	let dt_1 = 3052;
	let dt_2 = 1343;
	let dt_3 = 479;
	let dt_final = 6405;

	let bar_w1 = 600;
	let bar_w2 = (bar_w1*dt_2)/dt_1;
	let bar_w3 = (bar_w1*dt_3)/dt_1;

	let data_timer = 0;
	let timer_content;

	let homeSlide = new Box("div","homeSlide__slide data data_"+data_num+" "+key,".homeSlide");
		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

	let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text("info "+pll_date);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title);

	let data_wrap = new Box("div","homeSlide__slide__titleBlock__data__wrap",titleBlock.el);
		$(data_wrap.el).css("opacity","0");

		let data_text_wrap = new Box("div","homeSlide__slide__titleBlock__dataText__wrap data_1",data_wrap.el);
			let data_text_1 = new Box("div","homeSlide__slide__titleBlock__dataText1 dataText",data_text_wrap.el);
			$(data_text_1.el).text(dt_text1);

			let data_text_2 = new Box("div","homeSlide__slide__titleBlock__dataText2 dataText",data_text_wrap.el);
			$(data_text_2.el).text(dt_text2);

			let data_text_3 = new Box("div","homeSlide__slide__titleBlock__dataText3 dataText",data_text_wrap.el);
			$(data_text_3.el).text(dt_text3);

		let dataBar_wrap = new Box("div","homeSlide__slide__titleBlock__dataBar_wrap",data_wrap.el);

			let data_1 = new Box("div","homeSlide__slide__titleBlock__data data_1",dataBar_wrap.el);
				let data_bar_1 = new Box("div","homeSlide__slide__titleBlock__dataBar1 dataBar",data_1.el);
				let data_num_1 = new Box("div","homeSlide__slide__titleBlock__dataNum1",data_1.el);
				$(data_num_1.el).text(dt_1+" MW");
				$(data_bar_1.el).css("width","0px");



			let data_2 = new Box("div","homeSlide__slide__titleBlock__data data_2",dataBar_wrap.el);
				let data_bar_2 = new Box("div","homeSlide__slide__titleBlock__dataBar2 dataBar",data_2.el);
				let data_num_2 = new Box("div","homeSlide__slide__titleBlock__dataNum2 ",data_2.el);
				$(data_num_2.el).text(dt_2+" MW");
				$(data_bar_2.el).css("width","0px");

			let data_3 = new Box("div","homeSlide__slide__titleBlock__data data_3",dataBar_wrap.el);
				let data_bar_3 = new Box("div","homeSlide__slide__titleBlock__dataBar3 dataBar",data_3.el);
				let data_num_3 = new Box("div","homeSlide__slide__titleBlock__dataNum3",data_3.el);
				$(data_num_3.el).text(dt_3+" MW");
				$(data_bar_3.el).css("width","0px");

	let dataFinal_wrap = new Box("div","homeSlide__slide__titleBlock__dataFinal_wrap",titleBlock.el);
		$(dataFinal_wrap.el).css("opacity","0");
			let dataFinal = new Box("div","homeSlide__slide__titleBlock__dataFinal",dataFinal_wrap.el);
			let dataFinalText = new Box("div","homeSlide__slide__titleBlock__dataFinalText",dataFinal_wrap.el);
			$(dataFinal.el).text("= "+dt_final);
			$(dataFinalText.el).text(dt_textFinal);


	let timeBar = new Box("div","time-bar",titleBlock.el);

	this.french_mode = function(){
		$(title_name.el).text(title);
		$(data_text_1.el).text(dt_text1);
		$(data_text_2.el).text(dt_text2);
		$(data_text_3.el).text(dt_text3);
		$(dataFinalText.el).text(dt_textFinal);

	}

	this.english_mode = function(){
		$(title_name.el).text(title_en);
		$(data_text_1.el).text(dt_text1_en);
		$(data_text_2.el).text(dt_text2_en);
		$(data_text_3.el).text(dt_text3_en);
		$(dataFinalText.el).text(dt_textFinal_en);
		
	}

	let titleAnim, titleAnim2,titleAnim3,titleAnim4,titleAnim5;
	let nn1 = new Incr_anim(dt_1,".homeSlide__slide__titleBlock__dataNum1","after"," MW");
	let nn2 = new Incr_anim(dt_2,".homeSlide__slide__titleBlock__dataNum2","after"," MW");
	let nn3 = new Incr_anim(dt_3,".homeSlide__slide__titleBlock__dataNum3","after"," MW");
	let nn4 = new Incr_anim(dt_final,".homeSlide__slide__titleBlock__dataFinal","prev","= ");
	
	


	this.intro__play = function(){
		$(titleText.el).addClass("active");

		let nu = 1000;
		
		titleAnim = setTimeout(function(){
			$(titleText.el).addClass("top");
			$(data_wrap.el).css("opacity","1");

		},600);


		titleAnim2 = setTimeout(function(){

			
			$(data_text_1.el).addClass("active");
			$(data_bar_1.el).css({"width": bar_w1+"px","opacity":"1"});
			$(data_num_1.el).css("opacity","1");
			nn1.start();

		},nu);

		titleAnim3 = setTimeout(function(){
				$(data_text_2.el).addClass("active");
				$(data_bar_2.el).css({"width": bar_w2+"px","opacity":"1"});
				$(data_num_2.el).css("opacity","1");


				nn2.start();

		},nu*2);

		
		titleAnim4 = setTimeout(function(){
				$(data_text_3.el).addClass("active");
				$(data_bar_3.el).css({"width": bar_w3+"px","opacity":"1"});
				$(data_num_3.el).css("opacity","1");
				nn3.start();
		},nu*3);

		
		titleAnim5 = setTimeout(function(){
			$(dataFinal_wrap.el).css("opacity","1");
			nn4.start();
		
		},nu*4);
		
		
		timer_content = setInterval(function(){



					if(data_timer < duration){

						data_timer += 0.022;
					}



					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();

							/*$(".slick-track .slick-current").removeClass("slick-current");
							$(".homeSlide__slide[data-slick-index=0]").addClass("slick-current");*/
							//goToSlide(-1);

							filterActive = false;



						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

			},22);
			
		

	}

	this.intro__reset = function(){

		clearTimeout(titleAnim);
		clearTimeout(titleAnim2);
		clearTimeout(titleAnim3);
		clearTimeout(titleAnim4);
		clearTimeout(titleAnim5);
	
		nn1.reset();
		nn2.reset();
		nn3.reset();
		nn4.reset();
		$(titleText.el).removeClass("top");
		$(data_wrap.el).css("opacity","0");

		$(data_text_1.el).removeClass("active");
		$(data_text_2.el).removeClass("active");
		$(data_text_3.el).removeClass("active");

		$(data_bar_1.el).css({"width": "0px"});
		$(data_bar_2.el).css({"width": "0px"});
		$(data_bar_3.el).css({"width": "0px"});

		$(data_num_1.el).css("opacity","0");
		$(data_num_2.el).css("opacity","0");
		$(data_num_3.el).css("opacity","0");

		$(dataFinal_wrap.el).css("opacity","0");


	}

	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}




//MENU _____________

function Menu(){

	/*this.menuNav__wrap = new Box("div","menuNav__wrap obj__xscroll",".container"),
	this.menuNav = new Box("div","menuNav",this.menuNav__wrap.el),
	this.spacer_start = new Box("div","spacer spacer_start",this.menuNav.el),
	this.spacer_end = new Box("div","spacer spacer_end",this.menuNav.el);*/
	let filter_wrap = new Box("ul","filters__wrap active",".container");
	this.halfSlide;
	this.spacerWidth;
	this.move__duration = .1;
	
	this.spacers = function(){
		this.halfSlide = $(".menuNav__slide").outerWidth()/2;
		this.spacerWidth = $(".spacer").width();
		$(".spacer_end").insertAfter(".menuNav__slide:last-child");
		$(".spacer").width(this.spacerWidth-this.halfSlide);

	}

	this.move = function(menuNavCurrent,zoom,animation,callback){


			let elPosition = $(menuNavCurrent).position().left;

			let currentPosition = $('.menuNav').scrollLeft();
			if( zoom && zoom=="zoom"){
				elPosition = elPosition/2.7;
			}


			elPosition = (elPosition+currentPosition+this.halfSlide)-this.spacerWidth;

			if(animation && animation=="noAnim"){
				$('.menuNav__wrap').animate({scrollLeft: elPosition}, 0);
			}else{
				$('.menuNav__wrap').animate({scrollLeft: elPosition},this.move__duration*1000);
			}

			
			if(callback){
				setTimeout(function(){
					callback();
				},menu.move__duration*1000);
			}

		
		}
}

function Menu_button(){
	
	
	this.btn_wrapper = new Box("div","btn__wrapper",".container"),
		this.btn_menu = new Box("div","btn__menu obj__btn-round",this.btn_wrapper.el),
			this.btn_cross = new Box("span","btn__menu__cross",this.btn_menu.el),
			this.btn_text = new Box("span","btn__menu__text",this.btn_menu.el);
			$(this.btn_text.el).text("MENU");

	this.display = function(){
		$(this.btn_menu.el).on("click",this.clickAction);
	}

	this.clickAction = function(){

		if ($(".homeSlide").hasClass("active")){
			
			$(".menuNav__slide").removeClass("anim");
			homeSlider.close();


			let slick_index = $(".slick-current").attr("data-slick-index");
			let menuSlide_current = slides_menu[slick_index].menuSlide.el;



			$(".menuNav__slide.current").removeClass("current");
			$(menuSlide_current).addClass("current");
			
			if(homeSlider_slides[slick_index].playing == true){
				homeSlider_slides[slick_index].content__pause();
			}else{
				homeSlider_slides[slick_index].intro__reset();
				homeSlider_slides[slick_index].content__reset();
			}

		}else {

			
			let slick_index = $(".slick-current").attr("data-slick-index");
			menu.move(".menu_slide_"+slick_index,"","",function(){
				homeSlider.open();
			});


			if(homeSlider_slides[slick_index].playing == true){
				homeSlider_slides[slick_index].content__play();
			}else{
				homeSlider_slides[slick_index].intro__play(function(){
					
					homeSlider_slides[slick_index].content__play();
				});
				
			}

		}
	}
}

function Menu_lang_buttons(){
	this.btn__lang__wrap = new Box("div","btn__lang__wrap",".container");
	this.btn__lang_fr = new Box("div","btn__lang btn__lang__fr active",this.btn__lang__wrap.el);
	this.btn__lang_en = new Box("div","btn__lang btn__lang__en",this.btn__lang__wrap.el);
	$(this.btn__lang_fr.el).text("FR");
	$(this.btn__lang_en.el).text("EN");
	let btn_fr = $(this.btn__lang_fr.el );
	let btn_en = $(this.btn__lang_en.el );

	this.display = function(){
		btn_fr.on("click",this.french_mode);
		btn_en.on("click",this.english_mode);

	}

	this.french_mode = function(){
		lang = "fr";

		if(!btn_fr.hasClass("active")){
			filtersChanges();
			slidesChanges();
		}
		btn_interacts();

		

		////////////////////////////////
		function btn_interacts(){
			btn_fr.removeClass("click_anim");
			btn_fr.addClass("click_anim");
			btn_en.removeClass("active");
			btn_fr.addClass("active");
		}

		function filtersChanges(){
			for (i=0;i<filters.length;i++){
				filters[i].french_mode();
			}
		}

		function slidesChanges(){
			for(i=0; i< homeSlider_slides.length;i++){
				//let type = homeSlider_slides[i].type;
				slides_menu[i].french_mode();
				homeSlider_slides[i].french_mode();

			}
		}

		
		
	}

	this.english_mode = function(){
		lang = "en";
		
		if(!btn_en.hasClass("active")){

			filtersChanges();
			slidesChanges();
			
		}

		btn_interacts();


		
		////////////////////////////////
		function btn_interacts(){
			btn_en.removeClass("click_anim");
			btn_en.addClass("click_anim");
			btn_fr.removeClass("active");
			btn_en.addClass("active");
		}

		function filtersChanges(){
			for (i=0;i<filters.length;i++){
				filters[i].english_mode();
			}
		}

		function slidesChanges(){
			for(i=0; i< homeSlider_slides.length;i++){
				//let type = homeSlider_slides[i].type;
				slides_menu[i].english_mode();
				homeSlider_slides[i].english_mode();

			}
		}
		
	}	
}






function Menu_filters(key,filter_key,filter_name,filter_name_en,i){

	this.key = key;
	this.filter_key = filter_key;
	this.filter_name = filter_name;
	this.filter_name_en = filter_name_en;
	this.i=i;

	if(i==0){
		var active = "active"
	}else{
		var active = "";
	}

	var filter_wrap_li = new Box("li","filters__wrap__li "+key+" "+active,".filters__wrap");
		$(filter_wrap_li.el).attr("data-filter",filter_key);
			let round = new Box("div","filters__wrap__li__round",filter_wrap_li.el),
			round_child = new Box("div","", round.el);
			let text = new Box("div","filters__wrap__li__text",filter_wrap_li.el );
			$(text.el).text(filter_name);
	


	this.french_mode =function(){
		$(text.el).text(filter_name);
	}	

	this.english_mode = function(){
		$(text.el).text(filter_name_en);
	}

	this.display = function(){
		$(filter_wrap_li.el).on("click",this.clickAction);
	}

	

	function filterHomeslider(that,reset){
			
			if(that){
				let toFilter = $(that).attr("data-filter");
				slickOp.slick('slickUnfilter');
				slickOp.slick('slickFilter', toFilter);
			}

			if (reset && reset == "reset"){
				slickOp.slick('slickUnfilter');
				slickOp.slick('slickFilter',".homeSlide__slide" );
			}
			
			filtered =[];

			$(".homeSlide__slide").each(function(index){
				filtered[index] = $(this).attr("data-slick-index");
			});

			
			
	}

	let toFilter;

		function addActive(that){
			$(".filters__wrap .active").removeClass("active");
			

			if(that){
				
				$(that).addClass("active");
			}else {
				$(".filter_1").addClass("active");
			}
			
		}
		function filterMenu(that){
			

			if(that){
				toFilter = $(that).attr("data-filter");
				$(".menuNav .active").removeClass("active");
				$(".menuNav "+toFilter).addClass("active");
			}else {
				$(".menuNav").addClass("active");
			}

		}
		function animationMenu(){
			$('.menuNav__wrap').animate({scrollLeft: 0}, 200);
			$('.menuNav').removeClass('anime');
			setTimeout(function(){
						$('.menuNav').addClass('anime');
			},1);
		}


	filterHomeslider();
	filtered.splice(0, 1);
	filtered.splice(filtered.length-1, 1);
	

	
	this.clickAction = function(){

		addActive(this);
		filterMenu(this);
		animationMenu();


		
		if ($(this).attr("data-filter") == "*") {

			slickOp.slick( 'slickSetOption', {
		    	infinite: true

				}, true );
			filterHomeslider(this);
			filtered.splice(0, 1);
			filtered.splice(filtered.length-1, 1);
			filterActive = false;

			$(".menuNav__slide").each(function(index){
				$(this).attr("data-num",index);

			});
					
		}else{

			slickOp.slick( 'slickSetOption', {
		    	infinite: false

			}, true );
			filterHomeslider(this);
			

			filterActive = true;

			// menuNavSlide change data-num after filtering
			$(".menuNav "+toFilter).each(function(index){
				$(this).attr("data-num",index);

			});
		}
	}

	this.reset = function(){

		addActive();
		filterMenu();
		animationMenu();
		slickOp.slick( 'slickSetOption', {
			infinite: true
		}, true );

		filterHomeslider("","reset");
		filtered.splice(0, 1);
		filtered.splice(filtered.length-1, 1);
		filterActive = false;

		$(".menuNav__slide").each(function(index){
			$(this).attr("data-num",index);

		});


	}
}

function Menu_slides(filter_key,color,intro_img,type,title,type_en,title_en,i){

	this.i = i;
	this.filter_key = filter_key;
	this.color= color;
	this.intro_img = intro_img;
	this.type = type;
	this.title = title;
	this.type_en = type_en;
	this.title_en = title_en;

	this.menuSlide;



	this.menuSlide = new Box("div","menuNav__slide active menu_slide_"+i+" "+filter_key,".menuNav");
			$(this.menuSlide.el).css("background",color).attr("data-num",i);


		
		let titleBlock = new Box("div","menuNav__slide__title",this.menuSlide.el),
			title_type = new Box("div","menuNav__slide__title__type",titleBlock.el),
			title_name = new Box("div","menuNav__slide__title__name",titleBlock.el);
			$(titleBlock.el).css("background",color);
			$(title_type.el).text(type);
			$(title_name.el).text(title);

		let image = new Box("img","menuNav__slide__image",this.menuSlide.el);
			$(image.el).attr("src",intro_img);

		let current = new Box("div","menuNav__slide__current",this.menuSlide.el),
			current_picto_wrap = new Box("div","menuNav__slide__picto__current__wrap",current.el),
				current_picto = new Box("div","menuNav__slide__picto__current",current_picto_wrap.el),
					current_picto_ellip = new Box("div","lds-ellipsis",current_picto.el);

					let ellip = [];
					for(i=0;i<4;i++){
						ellip[i] = new Box("div","ellip",current_picto_ellip.el);
						$(ellip[i].el).css("background",color);
					}

			let current_text = new Box("div","menuNav__slide__current__text",current.el);
			$(current_text.el).text("en cours...").css("background",color);


	this.french_mode =function(){
		$(title_type.el).text(type);
		$(title_name.el).text(title);
		$(current_text.el).text("en cours...");
	}

	this.english_mode = function(){
		$(title_type.el).text(type_en);
		$(title_name.el).text(title_en);
		$(current_text.el).text("playing...");
	}

	this.display = function(){

		//$(this.menuSlide.el).on("click",this.e_click);

		$(this.menuSlide.el).on("click",this.e_click);

		/*$(this.menuSlide.el).on("touchstart",this.e_touchstart);
		$(this.menuSlide.el).on("touchend",this.e_touchend);*/
	}


	this.e_click = function(){
		//$(this).addClass("off");

		// animation
		//$(this).removeClass("off");
		$(".menuNav__slide").removeClass("anim");
		$(this).addClass("anim");
		
		// go to good slide in homeSlider
		goToSlide(this);

		// add class current to this 
		let itsCurrent;
		if ($(this).hasClass("current")) {
			itsCurrent = true;
		}else{
			$(".menuNav__slide").removeClass("current");
			$(this).addClass("current");
			itsCurrent = false;

		}

			let slick_index = $(this).attr("data-num");
		


		// move the menu and open the slide
		menu.move(".menuNav__slide.current","","",function(){

			homeSlider.open();
			
			
				let homeSlideLength = $(".homeSlide__slide").length;

				if(itsCurrent || homeSlideLength==1 ){
					if(homeSlider_slides[slick_index].playing == true){
					homeSlider_slides[slick_index].content__play();
					}else{
						homeSlider_slides[slick_index].intro__play(function(){
							homeSlider_slides[slick_index].content__play();
						});
						
					}
				}

			

			
		});





	}


	this.e_touchstart = function(){
		$(this).addClass("off");
	}

	this.e_touchend = function(){


	}
}


	

function goToSlide(that){

		if (isNaN(that)){
	  			slideToGo = $(that).attr("data-num");
	  			
	  		}else {
				slideToGo = that;
	  		}
	  		
			$('.homeSlide').slick('slickGoTo', parseInt(slideToGo),true);
}


//FUNCTIONS _____________

function Box(type,name,wrap){

	this.el = document.createElement(type);
	$(this.el).addClass(name);

	if(wrap){
		$(wrap).append(this.el);
	}
	

}



});



