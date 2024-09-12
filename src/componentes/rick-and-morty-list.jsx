import { useEffect, useState } from "react";
import { getAllRickAndMorty } from "../servicios/rickandmortyService";
import { Modal2 } from "./modal";
import { CharacterDetail } from "./modal";
import React from 'react';


function RickAndMortyList() {
    const [rymdata, setRyMData] = useState([]);
    const [characterId, setCharacterId] = useState(null)
    const [status, setStatus] = useState(false)
    const apiURL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllRickAndMorty(apiURL);
            console.log(response);
            setRyMData(response.results);
        }
        fetchData();
    }, [])

    const handleCharacterClick = (characterId) => {
        setCharacterId(characterId)
        setStatus(true)
    }

    const handleClose = () => {
        setStatus(false)
    }


    return (
        <div>
            <h1>Rick and Morty List</h1>
            <ul>
                {rymdata.map((rym) => (
                    <li key={rym.id} onClick={() => handleCharacterClick(rym.id)}>
                        <h2>{rym.name}</h2>
                        <p>Status: {rym.status}</p>
                        <p>Species: {rym.species}</p>
                        <p>Gender: {rym.gender}</p>
                        <p>Origin: {rym.origin.name}</p>
                        <p>Location: {rym.location.name}</p>
                        <img src={rym.image} alt={rym.name} />
                    </li>
                ))}
            </ul>
    

            <Modal2 status={status} handleClose={handleClose} >
                <CharacterDetail characterId={characterId} />
            </Modal2>
        </div>
    )
 }  
 
 export default RickAndMortyList;

 


   