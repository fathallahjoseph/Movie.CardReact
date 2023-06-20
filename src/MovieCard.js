import React from 'react'
import  './App.css'
import { Link } from "react-router-dom";
function MovieCard(props) {
  return (
    <Link to={`/Movie/${props.movie.title}`} style={{textDecoration:"none"}}> <div><div>  <p id='p2'>Title:<p>{props.movie.title}</p></p>
    <p id='p2'><img id='img' src={props.movie.imgy} alt='a' /></p>
      <p id='p2'>Description: <p>{props.movie.description}</p> </p>
      <p id='p2'>Rating:<p>{props.movie.rating}</p></p>
      <p id='p2'>Trailer:<p>{props.movie.trailer}</p></p>
      </div></div>
      </Link>
  )}
export default MovieCard