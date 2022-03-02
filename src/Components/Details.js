import React from 'react'
import {  useParams } from 'react-router-dom'
const Details = (props) => {
    const params = useParams()
   
    const user = props.movies.find(el => el.name === params.name)

  return (
    <div>
         <h1>{user.name}</h1>
         <img src={user.image} ></img>
         <h2>{user.description}</h2>  
         <p>{user.date}</p> 
         <button> trailer </button>   
    </div>
  )
}

export default Details