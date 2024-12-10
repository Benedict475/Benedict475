// Importing required libraries and modules
import React, { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import MovieService from "../services/Movieservice"; // Service for handling movie-related API requests
import { movie as MovieType } from "../types/Movie"; // Type definition for movie data
import { Link } from "react-router-dom"; // For navigation and route linking
import Movieservice from "../services/Movieservice"; // Service for CRUD operations on movies

// Component to display a list of movies and manage deletion
export default function Movie() {
  // Function to handle movie deletion by ID
  const deletemovies = (id: string) => {
    Movieservice.remove(id) // API call to delete a movie
      .then((response: any) => {
        alert(response.data); // Notify user on successful deletion
        getmovie(); // Refresh the movie list after deletion
      })
      .catch((e: Error) => {
        console.log(e); // Log error details
        alert(e.message); // Alert user about the error
      });
  };

  // State to hold the list of movies
  const [movie, setmovie] = useState<MovieType[]>([]);

  // Function to fetch the list of movies from the API
  const getmovie = () => {
    MovieService.getAll()
      .then((response: any) => {
        setmovie(response.data); // Update state with the fetched movie list
        console.log(response.data); // Log the data for debugging
      })
      .catch((e: Error) => {
        console.log(e); // Log errors to the console
        alert(e.message); // Alert the user about the error
      });
  };

  // useEffect hook to fetch movies when the component loads
  useEffect(() => {
    getmovie(); // Fetch the list of movies on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="container is-fluid">
      <section className="section">
        <h1 className="title">Movie Catalogue</h1> {/* Title for the movie catalogue */}
      </section>
      <div className="columns is-multiline">
        {/* Mapping through the list of movies to display each one */}
        {movie.map((movie) => (
          <div className="column" key={movie.id}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-header-title">{movie.Moviename}</h2> {/* Display movie name */}
              </div>
              <div className="card-content">
                <figure className="image is-1by4">
                  <img src={movie.image} alt={movie.Moviename} /> {/* Movie image */}
                </figure>
                {/* Display various movie details */}
                <p className="content">{movie.id}</p>
                <p className="content">{movie.Description}</p>
                <p className="content">{movie.Director}</p>
                <p className="content">{movie.Year}</p>
                <p className="content">{movie.Starring}</p>
                <p className="content">{movie.Writers}</p>
                <p className="content">{movie.Media}</p>
              </div>
              <div className="card-footer">
                {/* Link to view detailed movie page */}
                <Link className="button is-rounded is-danger" to={`/movies/${movie.id}`}>
                  View Movie
                </Link>
                {/* Button to delete the movie */}
                <Link
                  className="button is-rounded is-danger"
                  onClick={() => {
                    deletemovies(movie.id); // Trigger delete function
                  }}
                  to={""}
                >
                  Delete Movie
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
