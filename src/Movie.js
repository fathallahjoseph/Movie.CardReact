import React from 'react'
import { useParams,Link } from 'react-router-dom'
import "./App.css"
const Movie = ({movies}) => {
    const params=useParams()
    const x=movies.find(movie=>movie.title===params.titi)
  return (
    <div className='card2'>
       <p id='p2'>Title:<p>{x.title}</p></p>
       <img id='img' src={x.imgy}/>
       <p id='p2'>Description:<p>{x.description}</p></p>
       <Link className='button-85'  style={{textDecoration:"none",backgroundColor:'red'}} to={x.trailer}>Trailer-Link</Link>
       <p id="p2">Rate:<p>{x.rating}</p></p>
       <Link className='button-85' style={{textDecoration:"none"}} to='/'>⇤ back</Link>
    </div>

  )
}

export default Movie