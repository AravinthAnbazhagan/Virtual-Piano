<!DOCTYPE html>
<html>
<head>
    <title>Sign-in form</title>
    <link href="login_01.css" rel="stylesheet">
    <script src="signup_01.js"></script>
</head>
<body>
    <div class="menu">
        <ul>
            <img style="width:110px; height:80px;" src="https://th.bing.com/th/id/OIP.zH8wNjDzbHNQQK2-OJmTJQHaHa?pid=ImgDet&w=640&h=640&rs=1">
            <li><a href="Home_01.html">Home</a></li>
            <li><a href="piano_01.html">Music</a></li>
            <li><a href="Contact_01.html">Contact</a></li>
            <li><a href="About_01.html">About</a></li>
        </ul>
        <ul>
            <li>
                <img title="IT homies" style="height: 30px; width: 30px; border-radius: 30px; padding-top: 5px ;" alt="IT Homies" src="https://th.bing.com/th/id/OIP.XA6EcH_6e2nRp0fXgBBk0gHaHS?pid=ImgDet&w=207&h=203&c=7&dpr=1.3"></a>
                <li><a class="sign" href="signup_01.html">Create account</a></li>
                <li><a class="sign" href="login_02.php">Log in</a></li>
            </li>
        </ul>
    </div>
    <div id="login-form-container">
        <form method="post" onsubmit="return Validate();" action="">
            <h1 id="log-in-title">Log In</h1>
            <div class="input-field">
                <label for="logname">Username:</label><br>
                <input type="text" id="logname" name="logname"><br>
                <span id="lname_error"></span><br>
            </div>

            <div class="input-field">
                <label for="logpwd">Password:</label><br>
                <input type="password" id="logpwd" name="logpwd"><br>
                <span id="lpwd_error"></span><br>
            </div>

            <input type="submit" value="Log in" id="log-in-button">
            <p style="font-size: 13px;">Don't have an account? <a href="signup_01.html">Sign-up</a></p>
        </form>
    </div>
    <div class="copyright">
        <p>Copyright 1999-2023 by Musicca Data. All Rights Reserved.<br>Pianist is Powered by IT Homies.</p>
        <img style="width:40px; height:20px;" src="https://th.bing.com/th/id/OIP.zH8wNjDzbHNQQK2-OJmTJQHaHa?pid=ImgDet&w=640&h=640&rs=1">
    </div>
</body>
</html>
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
    $username = mysqli_real_escape_string($connected, $_POST['logname']);
    $lpwd = $_POST['logpwd'];
    $sql = "SELECT * FROM users WHERE UserName='$username';";
    $res = mysqli_query($connected, $sql);

    if (mysqli_num_rows($res) > 0) {
        $row = mysqli_fetch_assoc($res);
        if ($row['Password'] == $lpwd) {
            header("Location: piano_02.html");
            exit();
        } else {
            echo "<script>alert('Invalid Password');</script>";
        }
    } else {
        echo "user name doesnot exist";
        echo "<script>alert('User Name does not exist.');</script>";

    }
}

?>
