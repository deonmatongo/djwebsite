<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $contact_preference = implode(', ', $_POST["contact_preference"]);

    $to = "dmatongo3@gmail.com";
    $subject = "New Contact Form Submission";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $messageBody = "
        <html>
        <body>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Contact Preference:</strong> $contact_preference</p>
            <p><strong>Message:</strong><br/> $message</p>
        </body>
        </html>
    ";

    mail($to, $subject, $messageBody, $headers);
    echo "Message sent!";
}
?>
