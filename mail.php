<?php 

if (isset($_POST['name']) && isset($_POST["emailaddress"]) && isset($_POST['subject'])) {
if (empty($_POST['name']) || empty($_POST['emailaddress']) || empty($_POST['subject'])) {
echo 'Сообщение не отправлено';
} else {
 $name = strip_tags($_POST['name']);
 $emailaddress = strip_tags($_POST['emailaddress']);
 $subject = strip_tags($_POST['subject']);
 $result = " Имя: ". $name . "\n Email: ". $emailaddress . "\n Сообщение: " . $subject;
mail("/", $theme, $result);
echo header("Location: sms.html");
}
} else {
echo "при отправке произошли ошибки. повторите отправку";
}
?>
