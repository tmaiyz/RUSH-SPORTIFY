import React from "react";
import "./HomeDefault.css";
import { Link } from "react-router-dom";
import { MySpotify480, Wac } from "../../assets";
// import { Mariadb } from "../../DB";

// console.warn( Mariadb )
const HomeDefault = () => {
    return (
        <div className="home-prosper">
            <div className="home-item1">
                <h1 className="home-item1__header">My spotify</h1>
                <i className="home-item1__paragraph1">
                    Awesome group projet by W@C{" "}
                </i>
            </div>
            <div className="home-item2">
                <div className="home-item2__photo">
                    <img
                        className="home-item2__photo-img"
                        src={MySpotify480}
                        alt="Team"
                    />
                    <img
                        className="home-item2__photo-circle"
                        src={Wac}
                        alt="Circle"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeDefault;
