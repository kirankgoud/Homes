// JavaScript Document

$(document).ready(function(){

	"use strict";
	
	var home_array1=['.page_homepage .mc_keyvisual',//0
					'.page_homepage .mc_keyvisual .caption',//1
					'.page_homepage .mc_keyvisual .note_scroll',//2
					'.page_homepage .quotebox',//3
					'.logo',//4
					'.bright',//5
					'.page_homepage .mc_keyvisual .caption img'];//6
	
	/* Function Initialize */
	
	fn_updateKeyvisual1();
	alignCenter(home_array1[1],home_array1[0]);
	initParallax(home_array1[3]);
	
	setTimeout(function(){$(home_array1[4]).addClass('active');},1000);
	setTimeout(function(){
		$(home_array1[5]).fadeOut(800);
		$(home_array1[6]).addClass('go');
	},400);//6000
	
	// initial interval xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	
	var temp_interval=setInterval(temp_function,100);
	var temp_ctr=0;
	setInterval(function(){temp_ctr=1;},2000);
	
	function temp_function(){
		// initial alignment goes here
		alignCenter(home_array1[4],home_array1[5]);
		fn_updateKeyvisual1();
		alignCenter(home_array1[1],home_array1[0]);
		
		if(temp_ctr===1){
			clearInterval(temp_interval);
		}
	}
	

	/* global_interval */
	
	var home_global_interval=setInterval(home_global_function,100);
	function home_global_function(){
	}
	
	$(window).resize(function(){
		alignCenter(home_array1[4],home_array1[5]);
		fn_updateKeyvisual1();
		alignCenter(home_array1[1],home_array1[0]);
	});
	
	/* adjust homepage keyvisual */
	function fn_updateKeyvisual1(){	$(home_array1[0]).css({'height':$(window).height()+'px'});	}
	
	
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(home_array1[2]).css({'opacity':0});
		}else{
			$(home_array1[2]).css({'opacity':1});
		}
	});
	
	/* quote section */
	function initParallax(a){
		var var1=0,
			var2=0,
		    interval1=setInterval(updateData,100);
		
		function updateData(){
			var1=($('.nullobj1').offset().top/$(a).offset().top)*100;
			var2=-((var1-100)*4);
			
			$(a+' .prlxelement').css({'-ms-transform':'translateY('+var2+'px)',
							'-webkit-transform':'translateY('+var2+'px)',
							'transform':'translateY('+var2+'px)'});
		}
		
	}
	
	initHoverFx('.overviewbox:eq(0) .btn_style1','.overviewbox:eq(0) .trget .zoom');
	initHoverFx('.overviewbox:eq(1) .btn_style1','.overviewbox:eq(1) .trget .zoom');
	initHoverFx('.overviewbox:eq(2) .btn_style1','.overviewbox:eq(2) .trget .zoom');
	//initHoverFx('.overviewbox:eq(3) .btn_style1','.overviewbox:eq(3) .trget .zoom');
	initHoverFx('.overviewbox:eq(4) .btn_style1','.overviewbox:eq(4) .trget .zoom');
	initHoverFx('.overviewbox:eq(5) .btn_style1','.overviewbox:eq(5) .trget .zoom');
	
	function initHoverFx(a,b){
		$(a).mouseenter(function(){
			$(b).addClass('active');
		}).mouseleave(function(){
			$(b).removeClass('active');
		});
	}
	
	
	attachLighbox('.videopop1');
	
	
	function attachLighbox(a){
		$(a).click(function(){
			fn_lightbox1_open();
			$('.lightboxcontainer .box .previewbox').empty();
			$('.lightboxcontainer .box .previewbox').append('<div class="frameguide"><img src="images/common/videoguide.gif" alt="..."/></div><iframe width="560" height="315" src="https://www.youtube.com/embed/3dv-UEOvbLY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		});
	}
	
	
	/* GLOBAL LIGHTBOX */
	
	var scrollstatusx=0;
	
	$('.mclightbox_black, .lightboxcontainer').click(function(){
		fn_lightbox1_close();
	});
	
	function fn_lightbox1_open(){
		$('.mclightbox_black').fadeIn(300,function(){
			$('.lightboxcontainer').fadeIn(300);
			scrollstatusx=$(window).scrollTop();
			$(window).scrollTop(0);
		});
	}
	function fn_lightbox1_close(){
		$(window).scrollTop(scrollstatusx);
		$('.lightboxcontainer').fadeOut(300,function(){
			$('.lightboxcontainer .box .previewbox').empty();
			$('.mclightbox_black').fadeOut(300);
		});
	}
	
	
	/* Common Functions xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
	
	function alignCenter(a,b){
		$(a).css({
			'top':parseInt($(b).height()/2)-parseInt($(a).height()/2)+'px',
			'left':parseInt($(b).width()/2)-parseInt($(a).width()/2)+'px'
		});
	}
	
});