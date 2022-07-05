<?php
include_once("core.php");
$con = mysqli_connect("localhost", "Nicolas", "a", "database_music");
$albums = array();
$album_name = '';
if ($con) {
    $sql1 = "SELECT albums.id                       AS 'album_id', albums.name                                     AS 'album_name',
    albums.description                              AS 'album_description',
    albums.popularity                               AS 'album_popularity',
    FROM_UNIXTIME(albums.release_date, '%Y-%d-%m ') AS 'album_release_date',
    artists.name                                    AS 'artist',
    tracks.name                                     AS 'track_name',
    ROUND(tracks.duration / 60, 2)                  AS 'track_duration'
FROM albums
      INNER JOIN artists ON albums.artist_id = artists.id
      INNER JOIN tracks ON albums.id = tracks.album_id
WHERE albums.name LIKE UPPER(\"%" .  $album_name  . "%\")";
    $result1 = mysqli_query($con, $sql1);
    if ($result1) {
        header("Content-Type: JSON");
        $j = 0;
        while ($row1 = mysqli_fetch_assoc($result1)) {
            // var_dump($row1);
            $albums[$j]['album_name'] = $row1['album_name'];
            $albums[$j]['album_description'] = $row1['album_description'];
            $albums[$j]['album_popularity'] = $row1['album_popularity'];
            $albums[$j]['album_release_date'] = $row1['album_release_date'];
            $albums[$j]['artist'] = $row1['artist'];
            $albums[$j]['track_name'] = $row1['track_name'];
            $albums[$j]['track_duration'] = $row1['track_duration'];
            $j++;
        }
        echo json_encode($albums, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}
