import React, { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import PokemonDataDexEnty from './PokemonDataDexEntry';



const PokemonData = ({ id, setSelectedPokemon }) => {
    const [pokemon, setPokemon] = useState(null);
    const [genera, setGenera] = useState(null);

    const prevId = id - 1 < 1 ? 151 : id - 1;
    const nextId = id + 1 > 151 ? 1 : id + 1;

    const typeColorMap = new Map([
        ['NORMAL', '#A8A878'],
        ['FIRE', '#F08030'],
        ['WATER', '#6890F0'],
        ['ELECTRIC', '#F8D030'],
        ['GRASS', '#78C850'],
        ['ICE', '#98D8D8'],
        ['FIGHTING', '#C03028'],
        ['POISON', '#A040A0'],
        ['GROUND', '#E0C068'],
        ['FLYING', '#A890F0'],
        ['PSYCHIC', '#F85888'],
        ['BUG', '#A8B820'],
        ['ROCK', '#B8A038'],
        ['GHOST', '#705898'],
        ['DRAGON', '#7038F8'],
        ['DARK', '#705848'],
        ['STEEL', '#B8B8D0'],
        ['FAIRY', '#EE99AC']
      ]);

    useEffect(() => {
        fetchData();
    }, [pokemon]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const jsonData = await response.json();

            setPokemon(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = (id) => {
        setPokemon(null);
        setSelectedPokemon(id);
    }

    return (
        <>
            <div className='row mb-1'>
                <button className='btn btn-info' onClick={() => handleClick(-1)}>Pokemon list</button>
            </div>
            <div className="row">
                {pokemon ? (
                    <div className="card">
                        <div className="container-fluid">
                            <div className="row d-flex mt-1">
                                <div className='col-1 btn btn-info h-50 "align-self-center' onClick={() => handleClick(prevId)} > <GrPrevious />{`#${prevId}`}</div>
                                <div className='col-10 text-center'>
                                    <p className='strong h4'>#{id} - {pokemon.name.toUpperCase()}</p>
                                    <p>{genera}</p>
                                </div>
                                <div className='col-1 btn btn-info h-50 "align-self-center' onClick={() => handleClick(nextId)}>{`#${nextId}`}<GrNext /></div>

                            </div>
                            <div className="d-flex flex-row justify-content-center">
                                {
                                    pokemon.types.map(type => {
                                        var typeStr = type.type.name.toUpperCase();
                                        console.log(typeColorMap.get(typeStr))
                                        return <p className='p-1 btn m-1' style={{backgroundColor: typeColorMap.get(typeStr)}}>{typeStr}</p>
                                    }
                                    )
                                }
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 p-1"><img className='w-100' src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
                                <div className="col-6 p-1"><img className='w-100' src={pokemon.sprites.back_default} alt={pokemon.name} /></div>
                            </div>
                            <div className="row">
                                <PokemonDataDexEnty id={id} setGenera={setGenera}></PokemonDataDexEnty>
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