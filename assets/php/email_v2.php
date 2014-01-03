<?php
	require 'PHPMailerAutoload.php';
	//require '../PHPMailerAutoload.php';

	//Create a new PHPMailer instance
	$mail = new PHPMailer;
	//Set who the message is to be sent from
	$mail->setFrom($_REQUEST["contact_email"], 'greenspacestudiodotnet');
	//Set an alternative reply-to address
	$mail->addReplyTo($_REQUEST["contact_email"], $_REQUEST["contact_name"]);
	//Set who the message is to be sent to
	$mail->addAddress('gspacestudio@gmail.com', 'Jeff Wilbur');
	//Set the subject line
	$mail->Subject = 'GSC Website Submission';
	//Concatinate the body
	$mail->Body = 'Preferred Styles: <br />';
	//Loop through checkboxes
	if(!empty($_REQUEST['style_list'])) {
    foreach($_REQUEST['style_list'] as $check) {
    		$mail->Body .= ' -'.$check."<br />";
	    }
	}
	//gather text inputs
	$mail->Body .= 'Other styles: ' . $_REQUEST["style_other"] . '<br /> Plans liked: ' . $_REQUEST["plans_like"] . '<br /> Plans disliked: ' . $_REQUEST["plans_disliked"] . '<br /> Preferred materials: <br />';
	//Loop through checkboxes
	if(!empty($_REQUEST['materials_list'])) {
    foreach($_REQUEST['materials_list'] as $check) {
    		$mail->Body .= ' -'.$check."<br />";
	    }
	}
	//gather text inputs
	$mail->Body .= 'Other materials: ' . $_REQUEST["materials_other"] . '<br /> Colors liked: ' . $_REQUEST["colors_like"] . '<br /> Colors disliked: ' . $_REQUEST["colors_dislike"] . '<br /> Notes: ' . $_REQUEST["notes"] . '<br />';
	//failsafe body
	$mail->AltBody = 'This is a plain-text message body';
	$mail->WordWrap = 50;                  // Set word wrap to 50 characters

	//Attach an image file
	//send the message, check for errors
	foreach($_FILES["img"]["error"] as $key => $value) {
		if ($value == UPLOAD_ERR_OK){
            $succeed++;
            // get the image original name
            $mail->addAttachment($_FILES["img"]["tmp_name"][$key]);
		}
		else{
            $error++;
        }
	}
	
	if (!$mail->send()) {
	    echo "Error: " . $mail->ErrorInfo;
	} else {
	    echo "Message sent!";
	}
?>
