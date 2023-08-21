import React, { useState, useEffect } from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr';
import PokemonDataDexEnty from './PokemonDataDexEntry';



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
        <>
        <div className='row mb-1'>
            <button className='btn btn-info' onClick={()=> handleClick(-1)}>Pokemon list</button>
        </div>
        <div className="row">
            {pokemon ? (
                <div className="card">
                    <div className="container-fluid">
                        <div className="row align-content-center mt-1">
                            <div className='col-1 btn btn-info' onClick={() => handleClick(prevId)} > <GrPrevious/>{`#${prevId}`}</div>
                            <div className='col-10 text-center strong h4'>#{id} - {pokemon.name.toUpperCase()}</div>
                            <div className='col-1 btn btn-info' onClick={() => handleClick(nextId)}>{`#${nextId}`}<GrNext /></div>
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 p-1"><img className='w-100' src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
                            <div className="col-6 p-1"><img className='w-100' src={pokemon.sprites.back_default} alt={pokemon.name} /></div>
                        </div>
                        <div className="row">
                            <PokemonDataDexEnty id={id}></PokemonDataDexEnty>
                        </div>
                    </div>
                </div>
            
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </>
    );
}

export default PokemonData;