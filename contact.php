<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $project = htmlspecialchars(trim($_POST["project"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Recipient email
    $to = "antocaptechnologies@gmail.com";

    // Email subject
    $subject = "New Message from $name regarding $project";

    // Email content
    $body = "
        Name: $name\n
        Email: $email\n
        Project: $project\n
        Message: $message
    ";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Sending the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message sending failed. Please try again later.'); window.location.href='index.html';</script>";
    }
}
?>
