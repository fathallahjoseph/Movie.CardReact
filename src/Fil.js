import React from 'react'

const Filter = ({g,l,search}) => {
  return (
    <div>  <div>
    <input ref={l} className="inputs"
      type="text"
      placeholder="src with title"
    
    />
        <button className='button5' onClick={(search)}>
recherche</button>
    <input ref={g}  className="inputs"
      type="number"
      placeholder="src with rating"
    />

</div></div>
  )
}

export default Fil