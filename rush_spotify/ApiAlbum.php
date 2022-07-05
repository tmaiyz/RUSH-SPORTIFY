<?php
include_once("core.php");
$con = mysqli_connect("localhost", "Nicolas", "a", "database_music");
$albums = array();
if ($con) {
    $sql1 = "SELECT * FROM albums";
    $result1 = mysqli_query($con, $sql1);
    if ($result1) {
        header("Content-Type: JSON");
        $j = 0;
        while ($row1 = mysqli_fetch_assoc($result1)) {

            $albums[$j]['id'] = $row1['id'];
            $albums[$j]['artist_id'] = $row1['artist_id'];
            $albums[$j]['name'] = $row1['name'];
            $albums[$j]['description'] = $row1['description'];
            $albums[$j]['cover'] = $row1['cover'];
            $albums[$j]['cover_small'] = $row1['cover_small'];
            $albums[$j]['release_date'] = date('d-m-Y', $row1['release_date']);
            $albums[$j]['popularity'] = $row1['popularity'];
            $j++;
        }
        echo json_encode($albums, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}
