import React from 'react'
import { Link, Routes } from 'react-router-dom'
import Rate from '../Rate'
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
    return (
        
<Link to={`/movie/${movie.name}`}>
        <div className="wrapper">
        <div className="card">
          <img src= {movie.image}/>
          
          <div className="descriptions">
            <h1>{movie.name}</h1>
            <button> trailer </button>
            
                   <Rate rating={movie.rating} />
                 
            <p>
            {movie.description}
            </p>
            <p>{movie.date}</p>
           
          </div>
        </div>



        
      </div>
</Link>
      
    
    
        )
}

export default MovieCard