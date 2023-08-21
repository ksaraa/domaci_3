import React from 'react';

const PokemonCard = ({ id, name }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + `/assets/images/sprites/${id}.png`} alt={name}></img>
            <div className="card-body">
                <p className="card-title">#{id} {name.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default PokemonCard;