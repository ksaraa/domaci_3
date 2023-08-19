import React, { useState, useEffect } from 'react';


const PokemonData = ({ id, setSelectedPokemon }) => {
    const [pokemon, setPokemon] = useState(null);
    const prevId = id - 1 < 1 ? 151 : id - 1;
    const nextId = id + 1 > 151 ? 1 : id + 1;

    useEffect(() => {
        fetchData();
    }, [pokemon]);

    const fetchData = async () => {
        try {
            console.log("Fetching data for: " + id)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const jsonData = await response.json();
            console.log(jsonData);
            setPokemon(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = (id) => {
        console.log("Clicked on: " + id);
        setPokemon(null);
        setSelectedPokemon(id);
    }


    return (
        <div class="row">
            {pokemon ? (
                <div class="card">
                    <div class="container-fluid">
                        <div class="row border-bottom">
                            <div className='col-1' onClick={() => handleClick(prevId)} > {`<#${prevId}`}</div>
                            <div class='col-10 text-center'>#{id} - {pokemon.name.toUpperCase()}</div>
                            <div className='col-1' onClick={() => handleClick(nextId)}>{`#${nextId}>`}</div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-1"><img class='w-100' src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
                            <div class="col-6 p-1"><img class='w-100' src={pokemon.sprites.back_default} alt={pokemon.name} /></div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PokemonData;