import "../App.css";
import React, { useState, useEffect } from "react";

const ListingDesGenres = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/rush_spotify/ApiGenre.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
            });
    });
    return (
        <>
            <div>
                <h1>Listing des genres</h1>
            </div>
            <table className="mid">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListingDesGenres;
