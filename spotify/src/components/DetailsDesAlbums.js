import "../App.css";
import React, { useState, useEffect } from "react";

const DetailAlbum = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/rush_spotify/ApiAlbumAndTracks.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
                //console.log(result);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Listing détaillé des albums</h1>
            </div>
            <table className="mid">
                <thead>
                    <tr>
                        <th>Album name</th>
                        <th>Album description</th>
                        <th>Album popularity</th>
                        <th>Album release_date</th>
                        <th>Artist</th>
                        <th>Track name</th>
                        <th>Track duration</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={item.album_id}>
                            <td>{item.album_name}</td>
                            <td>{item.album_description}</td>
                            <td>{item.album_popularity}</td>
                            <td>{item.album_release_date}</td>
                            <td>{item.artist}</td>
                            <td>{item.track_name}</td>
                            <td>{item.track_duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default DetailAlbum;
