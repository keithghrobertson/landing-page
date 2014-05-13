<?php

$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data

// ------------------------------------------------------ validate the variables
	// if any of these variables don't exist, add an error to our $errors array

if (empty($_POST['firstName']))
	$errors['firstName'] = 'First name is required.';
		
if (empty($_POST['lastName']))
	$errors['lastName'] = 'Last name is required.';

if (empty($_POST['email']))
	$errors['email'] = 'Email is required.';

if (empty($_POST['phone']))
	$errors['phone'] = 'Phone number is required.';

// --------------------------------------------------------- return a response

// if there are any errors in our errors array, success = false
if ( ! empty($errors)) {

	// if there are items in our errors array, return those errors (script.js decides where they go)
	$data['success'] = false;
	$data['errors']  = $errors;
} else {//no errrors, proceed

	// SAVE CLIENT'S INFO TO THE DATABASE (INSERT SQL)

	// show a message of success and provide a true success variable
	$data['success'] = true;
	$data['message'] = 'Thank you, click <a hrf="#" title="Free PDF">here</a> for our free PDF.';
}//end else

// return all our data back to script.js via AJAX
echo json_encode($data);
