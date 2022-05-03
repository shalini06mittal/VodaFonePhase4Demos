import React, { Component, useEffect, useState } from 'react'
import './MovieDetails.css'
//import React from 'react'

export default function MovieDetails({movie}) {
    
    const [moviedetails, setMovieDetails] = useState({});
    useEffect(()=>{
        fetch('https://techgatha.com/movies.php')
        .then(res=>res.json())
        .then(movies=>{
            console.log(movies);
            for(let m of movies)
            {
                if(m.name===movie){
                    setMovieDetails(m);
                    break;
                }
            }
            
        })
    },[movie])
  return (
    <div>
        <h1>Details of the Movie</h1>
        <p>Movie Name: {moviedetails.name}</p>
        <p>Description : {moviedetails.desc}</p>
        <p><img src={moviedetails.cover}/></p>
    </div>
  )
}

