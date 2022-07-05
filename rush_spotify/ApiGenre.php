<?php
include_once("core.php");
$con = mysqli_connect("localhost", "Nicolas", "a", "database_music");
$genre = array();
if ($con) {
    $sql3 = " SELECT * FROM genres";
    $result3 = mysqli_query($con, $sql3);
    if ($result3) {
        header("Content-Type: JSON");
        $z = 0;
        // echo " Genres =>"."\n";
        while ($row3 = mysqli_fetch_assoc($result3)) {
            $genre[$z]['id'] = $row3['id'];
            $genre[$z]['name'] = $row3['name'];
            $z++;
        }
        echo json_encode($genre, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}
