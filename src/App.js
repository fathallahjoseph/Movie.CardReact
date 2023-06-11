import React from 'react'
import MovieList from './MovieList'
import { useState , useRef} from 'react';
import Filter from './FILTER.JS';
function App() {
  const t=useRef("");
  const d=useRef("");
  const r=useRef("");
  const i=useRef();
  const l=useRef(" ");
  const g=useRef(" ");
   const [li,setli]=useState("");
    const [gi,setgi]=useState("");

  const [movies,setMovie]=useState([{
    title:"Titanic",
  description:'Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997.',
   imgy: "data:image/jpeg;base64,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",
   rating:'4 start'
  },{
    title:"The kissing booth",
  imgy:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ISrJmc1H5h1ibwBrSwzHS9c5RorVEswopDfASeGK&s",
  rating:"9 start",
  description:'The Kissing Booth est une comédie romantique américaine réalisée par Vince Marcello et sorti en 2018 sur le service Netflix.'},
  {
    title:"License to kill",
    imgy:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPjFSidO340pcqejwbIx94SjJGbcmKVFzUECAd-ItXbE44X26IdxuTu7&s",
    description:"License to Kill is darker than many of the other Bond entries, with Timothy Dalton playing the character with intensity, but it still has some solid chases and fight scenes.",
    rating:"9.9 start"
  }
  ]);
  return (
    <div>
      
      <div>
      <div>
        <input ref={l}
          type="text"
          placeholder="Enter title"
        
        />
        <input ref={g}
          type="number"
          placeholder="Enter rating"
        />
        <button className='button-85' onClick={()=>setli(l.current.value)||setgi(g.current.value)}>
  recherche</button>
</div>


      <div className='try'><p className='button-84'>To Add Card Film</p></div>
    <div id='inp' >
      <div className="inp-border a1">
<input className="input" ref={t} type='text' placeholder="Title Film"></input>
</div>
<div className="inp-border a2">
<input  className="input" ref={i} type='text' placeholder="Url Image"></input>
</div>
<div className="inp-border a4">
<input  className="input" ref={d} type='text' placeholder="Description Of Film"></input>
</div>
<div className="inp-border a3">
<input  className="input" ref={r} type='text' placeholder="Rating"></input>  
</div>

<button className='button-85' onClick={()=>setMovie([...movies,{
    title:t.current.value,
  description:d.current.value,
   imgy:i.current.value,
   rating:r.current.value
  }])}>submit</button> 

      <MovieList  movies={movies.filter(movie=>movie.title.toLowerCase().includes(li)&&movie.rating.includes(gi))} />
     
     
  </div>
  </div>
  </div>
  )
}
export default App;