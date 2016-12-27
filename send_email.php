<?php header("Content-Type: text/html; charset=utf-8");
    $email_to =   'test@test.ru';
	$email_from = 'test@test.ru'; 
	$fio    =   $_POST['fio']; 
	$company    =   $_POST['company']; 
	$tel    =   $_POST['tel']; 
	$email    =   $_POST['email']; 
    $headers  = "From: $email_from\r\n";
 
    if(mail($email_to, "Получить гостевой доступ", "ФИО: ".$fio."\nКомпания: ".$company."\nТелефон: ".$tel."\nE-mail: ".$email, $headers)){
        echo 'sent';
    }else{
        echo 'failed';
    }
?>