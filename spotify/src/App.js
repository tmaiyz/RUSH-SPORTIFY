import "./App.css";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import ListingDesArtistes from "./components/ListingDesArtistes";
import DetailAlbum from "./components/DetailsDesAlbums";
import Navigation from "./components/navbar";
import ListingDesAlbums from "./components/ListingDesAlbums";
import ListingDesGenres from "./components/ListingDesGenres";
import SearchResult from "./components/SearchPage";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route
                    path="/components/SearchPage"
                    element={<SearchResult />}
                />

                <Route
                    path="/components/ListingDesAlbums"
                    element={<ListingDesAlbums />}
                />
                <Route
                    path="/components/ListingDesGenres"
                    element={<ListingDesGenres />}
                />
                <Route
                    path="/components/ListingDesArtistes"
                    element={<ListingDesArtistes />}
                />
                <Route
                    path="/components/DetailsDesAlbums"
                    element={<DetailAlbum />}
                />
            </Routes>
        </div>
    );
}

export default App;
