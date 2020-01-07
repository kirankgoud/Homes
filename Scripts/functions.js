// JavaScript Document

$(document).ready(function(){

	"use strict";
	
	var objArry1=['.logo', //0
				 '.bright', //1
				 '.mainnav span.indicator', //2
				 '.mainnav ul.desk li',//3
				 '.mainnav .mobilenav .box',//4
				 '.mainnav',//5
				 '.mainnav .mobilenav',//6
				 '.mainnav .mobilenav ul.mob',//7
				 '.footer .col_form form .tickbox .tickie',//8
				 '.mainnav ul.desk li.m2',//9
				 '.backtotop',//10
				 '.mainnav ul.desk li.m1',//11
				 '.footer .col_sitemap li',//12
				 '.mainnav span.indicator2',//13
				 '.note_scroll .box img',//14
				 '.mc_lightbox',//15
				 '.mc_lightbox .box',//16
				 '.mc_lightbox .box .closex .closebox',//17
				 '.col_sitemap ul'];//18

	
	/* Variable Declarations */
	var activenav=3,
		activenav2=0,
		ctr1=0,
		delay1=0;
	
	// mark active page/menu
	if($('body').hasClass('page_location')){
	   activenav2=0;
	}else if($('body').hasClass('page_facilities')){
	   activenav2=1;
	}else if($('body').hasClass('page_residences')){
	   activenav2=2;
	}else if($('body').hasClass('page_smarthomes')){
	   activenav2=3;
	}else if($('body').hasClass('page_gallery')){
	   activenav2=5;
	}else if($('body').hasClass('page_news')){
	   activenav2=6;
	}else if($('body').hasClass('page_developer')){
	   activenav2=7;
	}else if($('body').hasClass('page_contact')){
	   activenav2=8;
	}else{
		$(objArry1[13]).addClass('hidemarker');
	}
	
	/* Function Initialize */
	
	updateNavPointer();
	updateNavPointer2(activenav2);
	fn_lightbox_update();
	videoLightboxUpdate();
	
	setTimeout(function(){
		$('.bright2').fadeOut(800);
	},800);
	
	
	/* global_interval */
	
	var global_interval=setInterval(global_function,100);
	function global_function(){
		updateMobNavStatus();
		updateNavPointer2(activenav2);
		fn_lightbox_update();
		videoLightboxUpdate();
	}
	
	/* window resize event */
	
	$(window).resize(function(){
		updateNavPointer();
		updateNavPointer2(activenav2);
		fn_lightbox_update();
		videoLightboxUpdate();
	});
	
	/* window scrollevent */
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(objArry1[9]).addClass('small');
		}else{
			$(objArry1[9]).removeClass('small');
		}
		if($(this).scrollTop()>200){
			$(objArry1[10]).fadeIn(200);
		}else{
			$(objArry1[10]).fadeOut(200);
		}

	});
	
	
	/* main navigation */

	// populate mobile menu
	$(objArry1[6]).append('<ul class="mob"></ul>');
	for(ctr1=0; ctr1<$(objArry1[3]+'.m1').length; ctr1++){
		$(objArry1[6]+' ul.mob').append('<li style="transition-delay: '+((0.1*ctr1)+0.3)+'s;">'+$(objArry1[3]+'.m1:eq('+ctr1+')').html()+'</li>');
	}
	
	$(objArry1[3]).mouseenter(function(){
		if($(this).hasClass('m1')){
			$(objArry1[2]).css({'opacity':1});
			activenav=$(this).index();
			updateNavPointer();
		}
	}).mouseleave(function(){
		$(objArry1[2]).css({'opacity':0});
		activenav=3;
		updateNavPointer();
	});
	
	function updateNavPointer(){
		$(objArry1[2]).css({'-ms-transform':'translateX('+$(objArry1[3]+':eq('+activenav+') a span').offset().left+'px)',
							'-webkit-transform':'translateX('+$(objArry1[3]+':eq('+activenav+') a span').offset().left+'px)',
							'transform':'translateX('+$(objArry1[3]+':eq('+activenav+') a span').offset().left+'px)',
							'width':$(objArry1[3]+':eq('+activenav+') a').width()+'px'});
	}
	
	function updateNavPointer2(a){
		$(objArry1[13]).css({'-ms-transform':'translateX('+$(objArry1[3]+':eq('+a+') a span').offset().left+'px)',
							'-webkit-transform':'translateX('+$(objArry1[3]+':eq('+a+') a span').offset().left+'px)',
							'transform':'translateX('+$(objArry1[3]+':eq('+a+') a span').offset().left+'px)',
							'width':$(objArry1[3]+':eq('+a+') a').width()+'px',
							'opacity':1});
	}

	
	$(objArry1[4]).click(function(){
		if(delay1===0){
			delay1=1;
			$(this).toggleClass('active'); $(objArry1[5]).toggleClass('active');$(objArry1[7]).toggleClass('active');
			setTimeout(function(){delay1=0;},1000);
		}
	});
	
	// mobile will close when resize to desktop
	function updateMobNavStatus(){
		if($(window).width()>1024){
			if($(objArry1[4]).hasClass('active')){
				$(objArry1[4]).removeClass('active'); $(objArry1[5]).removeClass('active'); $(objArry1[7]).removeClass('active');
			}
		}
	}
	
	/* footer */
	
	/* footer form */
	$(objArry1[8]).click(function(){
		$(this).toggleClass('checked');
		if($(this).hasClass('checked')){
			$('#tncagree').prop('checked', true);
		}else{
			$('#tncagree').prop('checked', false);
		}
			
	});
	
	/* Populate footer sitemap links */
	var fdepth='';
	
	if($('body').hasClass('page_newspost')){
		fdepth='../';
	}
	
	$(objArry1[18]).append('<li><a href="'+fdepth+'index.html">HOME</a></li>');
	
	for(var zz=0; zz<$(objArry1[11]).length; zz++){
		$(objArry1[18]).append('<li><a href="'+$(objArry1[11]+':eq('+zz+') a').attr('href')+'">'+$(objArry1[11]+':eq('+zz+') span').text()+'</a></li>');
	}
	
	$(objArry1[18]).append('<li class="sitebrochure"><a href="'+fdepth+'downloads/ebrochure.pdf">eBROCHURE</a></li><div class="clear"></div>');
							
	/* Common Functions xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
	
	function alignCenter(a,b){
		$(a).css({
			'top':parseInt($(b).height()/2)-parseInt($(a).height()/2)+'px',
			'left':parseInt($(b).width()/2)-parseInt($(a).width()/2)+'px'
		});
	}
	
	
	
	// BACK TO TOP
	$(objArry1[10]).click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
	
	// SCROLLDOWN
	$(objArry1[14]).click(function(){
		$('html, body').animate({
			scrollTop: $(window).height()-$('.mainnav').height()
		}, 500);
	});
	
	
	function fn_lightbox_update(){
		
		if($('.mc_lightbox').length>0){
			alignCenter($(objArry1[16]),$(objArry1[15]));
		}
		
	}
	
	$(objArry1[15]).click(function(){
		
		$(objArry1[16]).fadeOut(300,function(){
			$(objArry1[15]).fadeOut(300);
		});
		
	});
	
	
	function videoLightboxUpdate(){
		$('.lightboxcontainer .box .previewbox iframe').css({
			'width':$('.lightboxcontainer .frameguide img').width()+'px',
			'height':$('.lightboxcontainer .frameguide img').height()+'px'
		});
	}
	
	// footer TOC
	$( "#toc2" ).click(function() {
		$('#toc').modal('show');
		document.getElementById("defaultOpen").click();
	});

	$(".ebrochure").css({'cursor': 'pointer'});
	$(".ebrochure a:first").attr("href", "./downloads/ebrochure.pdf").attr('target','_blank');
	
});