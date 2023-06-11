import React from 'react'

function FILTER() {
    const l=useRef(" ");
    const g=useRef(" ");
    const [li,setli]=useState("");
    const [gi,setgi]=useState("");
  return (
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
    </div>
  )
}

export default FILTER