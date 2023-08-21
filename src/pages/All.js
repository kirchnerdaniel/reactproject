import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const AllPage = styled.div`
    height: 100vh;
    width: 100%;
    margin:0;
    padding:0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const P = styled.div`
    width: 150px;
    margin: 10px auto;
    padding: 15px;
    text-align: center;
    border: 5px solid blue;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #fccf00;
    background-color: #fccf00;
    color: blue;
    h4{
        margin: 0 0 10px 0;
    }
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: blue;
    border: 2px solid blue;
    border-radius: 5px;
    box-sizing: border-box;
    a{
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        color: #fccf00;
    }
`;


function All() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                const results = res.data.results;
                setPokemons(results);
            })
            .catch(err=>console.log(err));
    }, []);


  return (
    <>
        <Button><Link to="/">Kezdőlap</Link></Button>
        <AllPage>
            {
                pokemons.map((item)=>{
                    return <P>
                            <h4>{item.name}</h4> 
                            <a href={item.url}>{item.name} url</a>
                        </P> 
                })
            }
        </AllPage>
    </>
  )
}

export default All