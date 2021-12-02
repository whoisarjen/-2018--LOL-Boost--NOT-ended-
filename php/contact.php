<?php
if(isset($_POST['email'])) {
 
	session_start();
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "support@lol-boost.eu";
    $email_subject = $_POST["select"];
 
    function died($error) {
        $_SESSION["contact_errors"] = $error;
		header('Location: http://lol-boost.eu/#contact');
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['select']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $select = $_POST['select']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$select)) {
    $error_message .= 'The select Name you entered does not appear to be valid.<br />';
  }

  if(strlen($message) < 2) {
    $error_message .= 'The message you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died('<p style="color: #b1272f">'.$error_message.'</p>');
  }
 
    $email_message = "";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Select: ".clean_string($select)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";


mail($email_to, $email_subject, $email_message, $email);

}
$_SESSION["contact_errors"] = '<p style="color: #92b751;">Thank you for contacting us. We will be in touch with you very soon.</p>';
header('Location: http://lol-boost.eu/#contact');
?>