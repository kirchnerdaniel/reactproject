import React from 'react';
import './Pokemon.css'

function Pokemon({name, url}) {
  return (
    <div className='poke'>
        <h4>{name.charAt(0).toUpperCase()+name.slice(1)}</h4>
        <img src={url} alt={name}/>
    </div>
  )
}

export default Pokemon