<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $availability = $_POST['availability'];
    $interests = implode(", ", $_POST['interests']);
    $transportation = $_POST['transportation'];
    $experience = $_POST['experience'];

    $stmt = $conn->prepare("INSERT INTO volunteers (full_name, email, phone, address, availability, interests, transportation, experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $full_name, $email, $phone, $address, $availability, $interests, $transportation, $experience);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Volunteer registered successfully."]);
    } else {
        echo json_encode(["error" => "Failed to register volunteer."]);
    }

    $stmt->close();
}
?>
