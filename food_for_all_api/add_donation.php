<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $donor_name = $_POST['donor_name'];
    $food_type = $_POST['food_type'];
    $donation_type = $_POST['donation_type'];
    $expiry_date = $_POST['expiry_date'];
    $location = $_POST['location'];
    $food_image = "";

    // Handle image upload
    if (isset($_FILES['food_image']['name'])) {
        $food_image = "uploads/" . basename($_FILES['food_image']['name']);
        move_uploaded_file($_FILES['food_image']['tmp_name'], $food_image);
    }

    $stmt = $conn->prepare("INSERT INTO donations (donor_name, food_type, donation_type, expiry_date, location, food_image) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $donor_name, $food_type, $donation_type, $expiry_date, $location, $food_image);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Donation added successfully."]);
    } else {
        echo json_encode(["error" => "Failed to add donation."]);
    }

    $stmt->close();
}
?>
