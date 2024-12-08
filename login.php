<?php
// Hardcoded example user credentials
$valid_email = 'tsolmonkhanorgil@gmail.com';
$valid_password = 'khanuka23';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['username']; // This will be the email field
    $password = $_POST['password'];

    // Validate credentials
    if ($email == $valid_email && $password == $valid_password) {
        // Redirect to the main page (index.html) if login is successful
        header('Location: index.html');
        exit();
    } else {
        // Redirect back to login page with an error if login fails
        header('Location: login.html?error=true');
        exit();
    }
}
?>
