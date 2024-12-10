import React, { useEffect, useState } from "react";

import MovieServices from "../services/MovieServices";

import { movie } from "../types/Movie";

import { Link, useParams } from "react-router-dom";


export default function MovieVideo() {


    const [movie, setmovie] = useState<movie>();

    const {id} = useParams();


    const getmovie = (id: string) => {


        MovieServices.get(id)

            .then((response: any) => {

                setmovie(response.data);

                console.log(movie);


            })

            .catch((e: Error) => {

                console.log(e);

                alert(e.message);

            })

    }


    useEffect(() => {

        if(id){

            getmovie(id);

        }

        

    }, [id]);

    return (

      <div className="section">

      <div className="container">

        {movie ? (

          <>

            <h1 className="title">{movie.Moviename}</h1>

            <p className="subtitle">{movie.genres}</p>


            

            <div className="content">

              <p>{movie.Description}</p>

            </div>

            <div className="video-container">

            {movie.Mfile && (

  <iframe

    width="100%"

    height="500px"

    src={movie.Mfile.startsWith('https://www.youtube.com/embed/') ? movie.Mfile : `https://www.youtube.com/embed/${movie.Mfile.split('v=')[1]?.split('&')[0]}`}

    title={movie.Moviename}

    frameBorder="0"

    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

    allowFullScreen

  ></iframe>

)}


              

            </div>

          </>

        ) : (

          <p>Loading...</p>

        )}

      </div>

    </div>

    


    );

} 