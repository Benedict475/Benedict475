// Importing necessary libraries and modules
import React, { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import MovieService from "../services/Movieservice"; // Service for fetching movie data
import { movie as MovieType } from "../types/Movie"; // Type definition for movie data
import TvshowService from "../services/Tvshowservice"; // Service for fetching TV show data
import { tvshow } from "../types/Tvshows"; // Type definition for TV show data
import { Link } from "react-router-dom"; // For navigation and linking within the app

// Movie component that fetches and displays movie and TV show data
export default function Movie() {
  // State to store movie data
  const [movie, setMovie] = useState<MovieType[]>([]);

  // State to store TV show data
  const [tvshow, setTvshow] = useState<tvshow[]>([]);

  // Function to fetch movies from the API
  const getMovie = () => {
    MovieService.getAll()
      .then((response: any) => {
        setMovie(response.data); // Update state with fetched movie data
        console.log(response.data); // Log the response data for debugging
      })
      .catch((e: Error) => {
        console.log(e); // Log errors to the console
        alert(e.message); // Display an error message to the user
      });
  };

  // Function to fetch TV shows from the API
  const getTvshows = () => {
    TvshowService.getAll()
      .then((response: any) => {
        setTvshow(response.data); // Update state with fetched TV show data
        console.log(response.data); // Log the response data for debugging
      })
      .catch((e: Error) => {
        console.log(e); // Log errors to the console
        alert(e.message); // Display an error message to the user
      });
  };

  // useEffect hook to fetch movies and TV shows when the component mounts
  useEffect(() => {
    getMovie();
    getTvshows();
  }, []); // Empty dependency array ensures this runs only once

  // Rendering the movie and TV show catalogues
  return (
    <>
      {/* Movie catalogue section */}
      <div className="container is-fluid">
        <section className="section">
          <h1 className="title">Movie Catalogue</h1>
          <div className="columns is-multiline">
            {movie.map((movie) => ( // Iterating over the movie state to display each movie
              <div className="column" key={movie.id}>
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-header-title">{movie.Moviename}</h2>
                  </div>
                  <div className="card-content">
                    <figure className="image is-1by4">
                      <img src={movie.image} alt={movie.Moviename} />
                    </figure>
                    <p className="content">{movie.id}</p>
                    <p className="content">{movie.Description}</p>
                    <p className="content">{movie.Director}</p>
                    <p className="content">{movie.Year}</p>
                    <p className="content">{movie.Starring}</p>
                    <p className="content">{movie.Writers}</p>
                  </div>
                  <div className="card-footer">
                    <Link
                      className="button is-rounded is-danger"
                      to={`/movie/${movie.id}`}
                    >
                      View Movie
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* TV show catalogue section */}
      <div className="container is-fluid">
        <section className="section">
          <h1 className="title">TV Show Catalogue</h1>
          <div className="columns is-multiline">
            {tvshow.map((tvshow) => ( // Iterating over the TV show state to display each show
              <div className="column" key={tvshow.tvid}>
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-header-title">{tvshow.Tvshowname}</h2>
                  </div>
                  <div className="card-content">
                    <figure className="image is-1by4">
                      <img src={tvshow.image} alt={tvshow.Tvshowname} />
                    </figure>
                    <p className="content">{tvshow.tvid}</p>
                    <p className="content">{tvshow.Description}</p>
                    <p className="content">{tvshow.Director}</p>
                    <p className="content">{tvshow.Year}</p>
                    <p className="content">{tvshow.Starring}</p>
                    <p className="content">{tvshow.Writers}</p>
                  </div>
                  <div className="card-footer">
                    <Link
                      className="button is-rounded is-danger"
                      to={`/tvshow/${tvshow.tvid}`}
                    >
                      View TV Show
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
