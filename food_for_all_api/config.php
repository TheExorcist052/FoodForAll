<?php
$host = "localhost";
$username = "root";
$password = ""; // Default is empty for XAMPP/WAMP
$database = "food_for_all";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
