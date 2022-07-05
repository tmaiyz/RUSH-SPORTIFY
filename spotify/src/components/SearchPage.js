import "../App.css";
import React, { useState, useEffect } from "react";

const SearchResult = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost/rush_spotify/ApiSearch.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
            });
    });

    function getSearch(v) {
        let formData;
        let formValue = v;
        formData = new FormData();
        formData.append("formValuee", formValue);
        formData.append("test", "1");
        formValue = new Request("http://localhost/rush_spotify/ApiSearch.php", {
            method: "POST",
            body: formData,
            headers: new Headers({}),
        });
        fetch(formValue).then((response) => console.warn(response));
        // .then(function () {})
        // .then((data) => console.log(data));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let formValue_ = document.getElementById("searchInput").value;
        getSearch(formValue_);
        //  console.warn(e.target[0])
        //  console.log("submission prevented");
    };
    return (
        <>
            <div>
                <h1>Résultat de la recherche</h1>
            </div>

            <form id="searchInputForm" onSubmit={onSubmit}>
                <input id="searchInput" type="text" />
                <input type="submit" />
            </form>
            <table className="mid">
                <thead>
                    <tr>
                        <th>artist_name</th>
                        <th>track_no</th>
                        <th>track_name</th>
                        <th>album_name</th>
                        <th>album_description</th>
                        <th>album_release_date</th>
                        <th>track_duration</th>
                        <th>genre_name</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr>
                            <td>{item.artist_name}</td>
                            <td>{item.track_no}</td>
                            <td>{item.track_name}</td>
                            <td>{item.album_name}</td>
                            <td>{item.album_description}</td>
                            <td>{item.album_release_date}</td>
                            <td>{item.track_duration}</td>
                            <td>{item.genre_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default SearchResult;
