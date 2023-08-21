import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Image = styled.img`
    height: 200px;
`;

const Homepage = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: ${props=>props.blue ? "blue" : "#fccf00"};
    border: 2px solid blue;
    border-radius: 5px;
    box-sizing: border-box;
    a{
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        color: ${props=>props.blue ? "#fccf00" : "blue"};
    }
`;



function Home() {
  return (
    <Homepage>
        <Image src='https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png' alt="pokemonlogo"/>
        <div>
            <Button blue><Link to="/All">Összes pokémon</Link></Button>
            <Button><Link to="/Search">Pokémon keresése</Link></Button>
        </div>
    </Homepage>
  )
}

export default Home