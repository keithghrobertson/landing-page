$(document).ready(function(){
	
	//check for screen size
	if ($(window).width() <= 665) {
		mobileStyles();
		$("a").removeClass("fancybox.iframe");
	}else{
		regularStyles();
	}
	
	//call fancybox
	$(".video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: true,
		width		: '70%',
		height		: '70%',
		autoSize	: true
	});
	
});//end ready functions

//on window resize, remove fancybox link if on a mobile screen
$(window).resize(function() {
	if ($(window).width() <= 665) {
		$("a").removeClass("fancybox.iframe");
	}
});


function mobileStyles() {    
	
	//when a mobile sized screen is dectected, the slider/carousel should hide automatically.
	//This code prevents the hidden slider from "sliding"	
	$('.bxslider').bxSlider({
		auto: false,
		speed: 4000,
		touchEnabled:false,
		adaptiveHeight: true
	});
		
}//end mobileStyles


//if screensize is bigger than 665, do this function:
function regularStyles() {  
  
  	//create slider if screensize is not mobile	
	$('.bxslider').bxSlider({
		auto: true,
		speed: 2000,
		pause: 6000,
		touchEnabled: false,
		adaptiveHeight: true
	});	
	
}//end regularStyles

