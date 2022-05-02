<?php
if (isset($_POST["inputEmail"])) {
    $email = $_POST["inputEmail"];
    $comentario = $_POST["textareaInput"];
    echo $email;
    $token = "5170670162:AAENw0yNaX2J_9CE2y-mdwtKBEZ-P8C9N5M";
    $id = "1435451153";
    $urlMsg = "https://api.telegram.org/bot{$token}/sendMessage";
    $msg = "\n
        Email: $email\n
        Comentario: $comentario\n
        ";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $urlMsg);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "chat_id={$id}&parse_mode=HTML&text=$msg");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
}
header("Location:../html/index.html");
