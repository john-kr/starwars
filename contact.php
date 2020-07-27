<?php

    if (isset($_POST['submit'])) {
        # code...
        $name = $_POST['name'];
        $mailFrom = $_POST['mail'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];

        $mailTo = 'kr412wk@gmail.com';
        $headers = 'From: '.$mailFrom;
        $txt = 'You have reveived an e-mail from '.$name.".\n\n".$message;

        mail($mailTo, $name, $headers, $txt);
        header("Location: contact.php?mailsend");
    };

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <main>
        <div class="contact-container">
            <div class="contact-content">
                <form action="contact.php">
                    <h1>Drop us line.</h1>
                    <input type="text" name="name" placeholder="Name">
                    <input type="email" name="mail" id="" placeholder="E-mail Address">
                    <input type="text" name="tel" placeholder="Phone number">
                    <textarea name="message" name="message" id="" cols="50" rows="10"></textarea>
                    <button class="" name="submit">Submit</button>
                </form>
            </div>
        </div>
    </main>
</body>
</html>