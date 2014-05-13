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
	
	
	
//FORM SCRIPT:

	$("#firstName").focus(function(){
		$(this).css({color:"#000"});
	});
	
	$("#lastName").focus(function(){
		$(this).css({color:"#000"});
	});
	
	$("#email").focus(function(){
		$(this).css({color:"#000"});
	});
	
	$("#phone").focus(function(){
		$(this).css({color:"#000"});
	});

	// process the form
	$('form').submit(function(event) {
		
		//clear any existing errors
		$('.form-item').removeClass('error'); // remove the error class
		$('.error-message').remove(); // remove the error text


		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'firstName' 	: $('input[name=firstName]').val(),
			'lastName' 		: $('input[name=lastName]').val(),
			'email' 		: $('input[name=email]').val(),
			'phone' 		: $('input[name=phone]').val()
		};
		
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'process.php', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
            encode      : true
		})//end ajax function
		
		// using the done promise callback
		.done(function(data) {

			// log data to the console so we can see
			console.log(data); 

			// here we will handle errors and validation messages
			if ( ! data.success) {
					
				// handle errors for first name ---------------
				if (data.errors.firstName) {
					$('#firstName').addClass('error'); // add the error class to show red input
					$('#firstName').append('<span class="error-message">' + data.errors.firstName + '</span>'); // add the actual error message under our input
				}
					
				// handle errors for last name
				if (data.errors.lastName) {
					$('#lastName').addClass('error'); // add the error class to show red input
					$('#lastName').append('<span class="error-message">' + data.errors.lastName + '</span>'); // add the actual error message under our input
				}
		
				// handle errors for email ---------------
				if (data.errors.email) {
					$('#email').addClass('error'); // add the error class to show red input
					$('#email-group').append('<span class="error-message">' + data.errors.email + '</span>'); // add the actual error message under our input
				}
		
				// handle errors for phone number ---------------
				if (data.errors.phone) {
					$('#phone').addClass('error'); // add the error class to show red input
					$('#phone').append('<span class="error-message">' + data.errors.phone + '</span>'); // add the actual error message under our input
				}
		
			} else {//no errors, proceed with download link for PDF
		
					$('form').append('<span class="form-success">' + data.message + '</span>');
		
			}//end else
				
		})//end .done ajax function
		
		// using the fail promise callback
		.fail(function(data) {

			//show any errors
			//best to remove for production
			console.log(data);
			
		});//end fail ajax function

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});//end submit function

	
	
	
});//end ready functions

//on window resize, remove fancybox link if on a mobile screen
$(window).resize(function() {
	if ($(window).width() <= 665) {
		$("a").removeClass("fancybox.iframe");
	}
});



/*------------------------------------------------------------------------------*/
//----------------------------------- FUNCTIONS --------------------------------//
/*------------------------------------------------------------------------------*/

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


