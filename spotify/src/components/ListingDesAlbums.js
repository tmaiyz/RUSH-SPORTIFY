import "../App.css";
import React, { useState, useEffect } from "react";

const ListingDesAlbums = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/rush_spotify/ApiAlbum.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
                // console.log(result);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Listing des albums</h1>
            </div>
            <table className="mid">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cover</th>
                        <th>Cover Small</th>
                        <th>Release Date</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <img
                                    className="img"
                                    src={item.cover}
                                    alt={item.cover}
                                />
                            </td>
                            <td>
                                <img
                                    src={item.cover_small}
                                    alt={item.cover_small}
                                />
                            </td>
                            <td>{item.release_date}</td>
                            <td>{item.popularity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default ListingDesAlbums;
