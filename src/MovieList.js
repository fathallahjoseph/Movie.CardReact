import React from 'react'
import MovieCard from './MovieCard'
function MovieList(props) {
  return (


    <div className='tol'>
    <h1>My movies Card</h1>
  <div className='card'>
  { props.movies.map(ob=><MovieCard movie={ob}/>)}
    </div>
    </div>
    

   
  )
}

export default MovieList