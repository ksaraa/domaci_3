import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ setSelectedPokemon }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = (id) => {
        console.log("Clicked on: " + id);
        setSelectedPokemon(id);
    }

    return (
        <div className='row justify-content-between p-5' >
            {data && data.results ? (
                data.results.map((pokemon) => {
                    const name = pokemon.name;
                    const index = parseInt(pokemon.url.split("/")[6]);
                    return (
                        <div key={index} onClick={() => handleClick(index)} className="col-3 m-1">
                            <PokemonCard id={index} name={name} />
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

}

export default PokemonList;