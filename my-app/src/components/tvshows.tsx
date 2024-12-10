// Importing required libraries and modules
import React, { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import TvshowService from "../services/Tvshowservice"; // Service to handle TV show-related API requests
import { tvshow } from "../types/Tvshows"; // Type definition for TV show data
import { Link } from "react-router-dom"; // For navigation and route linking

// Component to display a list of TV shows
export default function Tvshow() {
    // State to hold the list of TV shows
    const [tvshow, setTvshow] = useState<tvshow[]>([]);

    // Function to fetch the list of TV shows from the API
    const getTvshow = () => {
        TvshowService.getAll()
            .then((response: any) => {
                setTvshow(response.data); // Update state with the fetched TV shows
                console.log(response.data); // Log the data for debugging
            })
            .catch((e: Error) => {
                console.log(e); // Log errors to the console
                alert(e.message); // Alert the user about the error
            });
    };

    // useEffect hook to fetch TV shows when the component loads
    useEffect(() => {
        getTvshow(); // Fetch the list of TV shows on component mount
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="container is-fluid">
            <section className="section">
                <h1 className="title">Tvshow Catalogue</h1> {/* Title for the TV show catalogue */}
                <div className="columns is-multiline">
                    {/* Mapping through the list of TV shows to display each one */}
                    {tvshow.map((tvshow) => (
                        <div className="column" key={tvshow.tvid}>
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-header-title">{tvshow.Tvshowname}</h2> {/* Display TV show name */}
                                </div>
                                <div className="card-content">
                                    <figure className="image is-1by4">
                                        <img src={tvshow.image} alt={tvshow.Tvshowname} /> {/* TV show image */}
                                    </figure>
                                    {/* Display various TV show details */}
                                    <p className="content">{tvshow.tvid}</p>
                                    <p className="content">{tvshow.Description}</p>
                                    <p className="content">{tvshow.Director}</p>
                                    <p className="content">{tvshow.Year}</p>
                                    <p className="content">{tvshow.Starring}</p>
                                    <p className="content">{tvshow.Writers}</p>
                                </div>
                                <div className="card-footer">
                                    {/* Link to view detailed TV show page */}
                                    <Link className="button is-rounded is-danger" to={`/tvshow/${tvshow.tvid}`}>
                                        View Tvshow
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


