import React, { useState, useEffect } from 'react';

const PokemonDataDexEnty = ({ id }) => {
    const [dexEnties, setDexEnties] = useState(null);

    useEffect(() => {
        fetchData();
    }, [dexEnties]);

    const fetchData = async () => {
        try {
            console.log("Fetching data for: " + id)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const jsonData = await response.json();

            setDexEnties(normalizeData(jsonData));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const normalizeData = (jsonData) => {
        const uniqueDexEnties = new Set();

        jsonData.flavor_text_entries.forEach(entry => {
            if (entry.language.name == 'en') {
                uniqueDexEnties.add(entry.flavor_text);
            }
        });

        return Array.from(uniqueDexEnties);
    }

    return (
        <div className="container mt-2">
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