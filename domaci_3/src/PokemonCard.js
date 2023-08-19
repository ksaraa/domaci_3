import React from 'react';

const PokemonCard = ({ id, name }) => {
    return (
        <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + `/assets/images/sprites/${id}.png`} alt={name}></img>
            <div class="card-body">
                <p class="card-title">#{id} {name.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default PokemonCard;