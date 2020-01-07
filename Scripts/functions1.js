// JavaScript Document

$(document).ready(function() {
	
	"use strict";
	
	try {
		$('.imgrple1').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04
		});
		$('main').ripples({
			resolution: 128,
			dropRadius: 10, 
			perturbance: 0.04,
			interactive: false
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('body, main').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('body, main').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('body, main').ripples('pause');
	});

	// Automatic drops
	setInterval(function() {
		var $el = $('.imgrple1');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
	
});