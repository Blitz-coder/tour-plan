<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новое обращение с Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

// если указан только email
if ($email) {
  $title = "Подписка на новости Best Tour Plan";
  $body = "
    <h2>Подписка на новости</h2>
    <b>mail:</b> $email<br>
  ";
}

// если указан email и телефон - модальное окно
if (($email) and ($phone)) {
  $title = "Новое обращение с Best Tour Plan";
  $body = "
    <h2>Новое обращение с Best Tour Plan</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Email:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'the.best.tour.plan@gmail.com'; // Логин на почте
    $mail->Password   = 'GjyjvfhtyrjY77'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('the.best.tour.plan@gmail.com', 'Юрий Пономаренко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('blitz-coder@yandex.ru');  
  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');