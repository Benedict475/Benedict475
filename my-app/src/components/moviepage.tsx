// Importing required libraries and modules
import React, { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import MovieServices from "../services/Movieservice"; // Service to fetch movie data
import { movie } from "../types/Movie"; // Type definition for movie data
import { Link, useParams } from "react-router-dom"; // Routing utilities for navigation and parameter handling

// Component to display a movie's details and associated video
export default function MovieVideo() {
  // State to hold the movie data
  const [movie, setmovie] = useState<movie>();

  // Extracting the `id` parameter from the route
  const { id } = useParams();

  // Function to fetch movie details based on the provided ID
  const getmovie = (id: string) => {
    MovieServices.get(id)
      .then((response: any) => {
        setmovie(response.data); // Update state with the fetched movie data
        console.log(movie); // Log movie data for debugging
      })
      .catch((e: Error) => {
        console.log(e); // Log errors to the console
        alert(e.message); // Display an error message to the user
      });
  };

  // useEffect to fetch movie data when the `id` changes
  useEffect(() => {
    if (id) {
      getmovie(id); // Fetch movie details if ID is available
    }
  }, [id]); // Dependency array ensures the effect runs when `id` changes

  return (
    <div className="section">
      <div className="container">
        {/* Conditional rendering to check if movie data is available */}
        {movie ? (
          <>
            {/* Movie title */}
            <h1 className="title">{movie.Moviename}</h1>

            {/* Movie genres */}
            <p className="subtitle">{movie.Genres}</p>

            {/* Movie description */}
            <div className="content">
              <p>{movie.Description}</p>
            </div>

            {/* Video player */}
            <div className="video-container">
              {movie.Media && (
                <iframe
                  width="100%"
                  height="500px"
                  // Embedding YouTube video or generating embed URL from raw video link
                  src={
                    movie.Media.startsWith('https://www.youtube.com/embed/')
                      ? movie.Media
                      : `https://www.youtube.com/embed/${movie.Media.split('v=')[1]?.split('&')[0]}`
                  }
                  title={movie.Moviename} // Accessible title for the iframe
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </>
        ) : (
          // Display loading message if movie data is not yet available
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
