import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="nav__welcome">
            <div className="nav__welcome--links">
                <Link to="/"> Acceuil </Link>

                <Link to="/components/SearchPage">
                    {" "}
                    Recherche{" "}
                </Link>
                <Link to="/components/ListingDesAlbums">
                    {" "}
                    Listing des albums{" "}
                </Link>

                <Link to="/components/ListingDesGenres">
                    {" "}
                    Listing des genres{" "}
                </Link>

                <Link to="/components/ListingDesArtistes">
                    {" "}
                    Listing des artistes{" "}
                </Link>

                <Link to="/components/DetailsDesAlbums">
                    {" "}
                    Détail d'un album{" "}
                </Link>
            </div>
        </nav>
    );
}
