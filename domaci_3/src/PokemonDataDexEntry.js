import React, { useState, useEffect } from 'react';

const PokemonDataDexEnty = ({ id, setGenera }) => {
    const [dexEnties, setDexEnties] = useState(null);
    const [types, setTypes]  = useState(null);
    

    useEffect(() => {
        fetchData();
    }, [dexEnties]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const jsonData = await response.json();

            setDexEnties(normalizeData(jsonData));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const normalizeData = (jsonData) => {
        const uniqueDexEnties = new Set();

        jsonData.genera.forEach(entry => {
            if(entry.language.name == 'en') {
                setGenera(entry.genus);
            }
        });

        jsonData.flavor_text_entries.forEach(entry => {
            if (entry.language.name == 'en') {
                uniqueDexEnties.add(entry.flavor_text);
            }
        });

        return Array.from(uniqueDexEnties);
    }

    return (
        <div className="container mt-1">
            <div className="row">
                {dexEnties ? (
                    dexEnties.map((dexEntry) => {
                        return <div className='col-12 p-1 text-center border-bottom'>{dexEntry}</div>;
                    })
                ) :
                    (<p className='col-12 text-center'>No data</p>)
                }
            </div>
        </div>
    );
}

export default PokemonDataDexEnty;