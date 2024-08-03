<?php
    $database = "pianoUsers";
    $connected = mysqli_connect('localhost', 'root', '');
    if (!$connected) {
        die("Error happened: Connection Failed" . mysqli_connect_error());
    } 
    $sql = "CREATE DATABASE IF NOT EXISTS $database;";
    mysqli_query($connected, $sql);

    mysqli_select_db($connected, $database);
    
    $sql = "CREATE TABLE IF NOT EXISTS users
        (
        UserName varchar(50),
        Email varchar(50),
        Number integer(50),
        Password varchar(25)
        );";
    mysqli_query($connected, $sql);
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'];
        $email = $_POST['mail'];
        $number = $_POST['number'];
        $pwd = $_POST['pwd'];
        $cpwd = $_POST['cpwd'];
        
        $sql = "INSERT INTO users VALUES ('$username', '$email', '$number','$pwd')";
        if (mysqli_query($connected, $sql)) {
            echo "Record inserted successfully<br>";
        } else {
            die("Error happened: " . mysqli_error($connected));
        }

        header("Location: login_01.html");
        exit();
    }
?>
