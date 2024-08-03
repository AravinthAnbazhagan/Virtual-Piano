<?php
$database = "pianoUsers";
$connected = mysqli_connect('localhost', 'root', '');

if (!$connected) {
    die("Error happened: Connection Failed" . mysqli_connect_error());
}

$sql = "CREATE DATABASE IF NOT EXISTS $database;";
mysqli_query($connected, $sql);

mysqli_select_db($connected, $database);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['logname'];
    $lpwd = $_POST['logpwd'];

    $sql = "SELECT * FROM users WHERE UserName='$username';";
    $res = mysqli_query($connected, $sql);

    if (mysqli_num_rows($res) > 0) {
        $row = mysqli_fetch_assoc($res);
        if ($row['Password'] == $lpwd) {
            // Username and password match, redirect to another HTML page
            header("Location: piano_02.html");
            exit();
        } else {
            // Invalid password, show error message
            echo "<script>alert('Invalid Password.Go back to the Log in page.');</script>";
            
        }
    } else {
        // Invalid username, show error message
        echo "<script>alert('User Name doesn't exist.Go back to the Log in page.');</script>";
        
    }
}
?>