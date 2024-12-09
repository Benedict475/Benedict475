import React, { useEffect, useState } from "react";
import MovieService from "../services/Movieservice";
import { movie as MovieType } from "../types/Movie";
import TvshowService from "../services/Tvshowservice";
import { tvshow } from "../types/Tvshows";
import { Link } from "react-router-dom";

export default function Movie() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  const [tvshow, setTvshow] = useState<tvshow[]>([]);

  
  const getMovie = () => {
    MovieService.getAll()
        .then((response: any) => {
            setMovie(response.data); // Correct setter
            console.log(response.data); // Log fetched data
        })
        .catch((e: Error) => {
            console.log(e);
            alert(e.message);
        });
};

const getTvshows = () => {
  TvshowService.getAll()
      .then((response: any) => {
          setTvshow(response.data); // Correct setter
          console.log(response.data); // Log fetched data
      })
      .catch((e: Error) => {
          console.log(e);
          alert(e.message);
      });
};

useEffect(() => {
  getMovie();
  getTvshows();
}, []);



return (
  <><div className="container is-fluid">
    <section className="section">
      <h1 className="title">Movie Catalogue</h1>

      <div className="columns is-multiline">
        {movie.map((movie) => ( // Updated to map over the correct state
          <div className="column" key={movie.id}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-header-title"> {movie.Moviename}</h2>
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
                <Link className="button is-rounded is-danger" to={`/movie/${movie.id}`}>View Movie</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div><div className="container is-fluid">
      <section className="section">
        <h1 className="title">Tvshow Catalogue</h1>

        <div className="columns is-multiline">
          {tvshow.map((tvshow) => ( // Updated to map over the correct state
            <div className="column" key={tvshow.tvid}>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-header-title"> {tvshow.Tvshowname}</h2>
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
                  <Link className="button is-rounded is-danger" to={`/tvshow/${tvshow.tvid}`}>View Tvshow</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div></>

);

}