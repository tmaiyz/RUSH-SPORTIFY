<?php
include_once("core.php");
$con = mysqli_connect("localhost", "Nicolas", "a", "database_music");
$masterSearch = [];

$album_name = null;
$artist_name = 'A_Rival';
$genre_name = null;

$test = $_REQUEST['test'] ?? 1;
$artist_name = $_REQUEST['formValuee'] ?? null;

//var_dump($_REQUEST);

if ($con) {
    $sql1 = "SELECT
    albums.id                                    AS 'album_id',
    artists.name                                    AS 'artist_name',
    tracks.track_no                                 AS 'track_no',
    tracks.name                                     AS 'track_name',
    albums.name                                     AS 'album_name',
    albums.description                              AS 'album_description',
    FROM_UNIXTIME(albums.release_date, '%Y-%d-%m ') AS 'album_release_date',
    ROUND(tracks.duration / 60, 2)                  AS 'track_duration',
    g.name                                          AS 'genre_name'
FROM albums
         INNER JOIN artists ON albums.artist_id = artists.id
         INNER JOIN genres_albums ga ON albums.id = ga.album_id
         INNER JOIN genres g ON ga.genre_id = g.id
         INNER JOIN tracks ON albums.id = tracks.album_id
         WHERE albums.name LIKE UPPER(\"%" .  $album_name  . "%\")
         AND artists.name LIKE UPPER(\"%" .  $artist_name  . "%\")
         AND g.name LIKE UPPER(\"%" .  $genre_name  . "%\"
         )";
    // print_r($sql1);
    // die();
    $result1 = mysqli_query($con, $sql1);
    if ($result1) {
        header("Content-Type: application/json");
        $j = 0;
        while ($row1 = mysqli_fetch_assoc($result1)) {
            // var_dump($row1);
            $masterSearch[$j]['album_id'] = $row1['album_id'];
            $masterSearch[$j]['artist_name'] = $row1['artist_name'];
            $masterSearch[$j]['track_no'] = $row1['track_no'];
            $masterSearch[$j]['track_name'] = $row1['track_name'];
            $masterSearch[$j]['album_name'] = $row1['album_name'];
            $masterSearch[$j]['album_description'] = $row1['album_description'];
            $masterSearch[$j]['album_release_date'] = $row1['album_release_date'];
            $masterSearch[$j]['track_duration'] = $row1['track_duration'];
            $masterSearch[$j]['genre_name'] = $row1['genre_name'];
            $j++;
        }
        echo json_encode($masterSearch, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}

/*

*/