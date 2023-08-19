import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import PokemonData from './PokemonData';

const HomeComponent = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(-1)

    useEffect(() => {
        console.log("Selected pokemon: "+selectedPokemon);
    }, [selectedPokemon])

    return (
        <div className='container'>
            {!selectedPokemon || selectedPokemon == -1 ?(
                <PokemonList setSelectedPokemon={setSelectedPokemon}></PokemonList>
            ):(
                <PokemonData setSelectedPokemon={setSelectedPokemon} id={selectedPokemon}></PokemonData>
            )}
        </div>
    );
}

export default HomeComponent;