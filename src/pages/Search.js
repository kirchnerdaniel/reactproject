import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Pokemon from '../components/Pokemon';
import '../CSS/Search.css';
import { Link } from 'react-router-dom';

function Search() {

    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");

    function search(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
            .then(res =>setPokemons([res.data]))
            .catch(err=>console.log(err));
    };
    
  return (
    <>
        <button id='back'><Link to="/">Kezdőlap</Link></button>
        <div className="form">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={search}>Keresés</button>
        </div>
        <div className="result">
            {
                pokemons.map((item, idx)=>{
                    return <Pokemon key={idx} name={item.name} url={item.sprites.front_default} />
                })
            }   
        
        </div>
    </>
  )
}

export default Search