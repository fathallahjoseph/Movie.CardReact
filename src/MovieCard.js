import React from 'react'
import  './App.css'
function MovieCard(props) {
//   const it=()=>[settitle(t.current.value)];
//  const ubmit=()=>[setdescription(d.current.value)];
//   const bmit=()=>[setrating(r.current.value)];
//  const mit=()=>[setphoto(p.current.value)];

 
  return (
  <div><div>  <p id='p2'>Title:<p>{props.movie.title}</p></p>
 <p id='p2'><img id='img' src={props.movie.imgy} alt='a' /></p>
   <p id='p2'>Description: <p>{props.movie.description}</p> </p>
   <p id='p2'>Rating:<p>{props.movie.rating}</p></p>
   </div></div>

  )}
    



export default MovieCard