<?php
include_once("core.php");
$con = mysqli_connect("localhost", "Nicolas", "a", "database_music");
$artists = array();
if ($con) {
    $sql = " SELECT * FROM artists";
    $result = mysqli_query($con, $sql);
    if ($result) {
        header("Content-Type: JSON");
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $artists[$i]['id'] = $row['id'];
            $artists[$i]['name'] = $row['name'];
            $artists[$i]['description'] = $row['description'];
            $artists[$i]['bio'] = $row['bio'];
            $artists[$i]['photo'] = $row['photo'];
            $i++;
        }
        echo json_encode($artists, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}
