import "../App.css";
import React, { useState, useEffect } from "react";

const ListingDesArtistes = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/rush_spotify/ApiArtiste.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Listing des artistes</h1>
            </div>

            <table className="mid">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Bio</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.bio}</td>
                            <td>
                                <img
                                    className="img"
                                    src={item.photo}
                                    alt={item.photo}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListingDesArtistes;
