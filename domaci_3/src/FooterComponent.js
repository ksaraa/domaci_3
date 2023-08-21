import React, {useState, useEffect} from 'react';

const FooterComponent = ({initialSelect}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(initialSelect)

    return (
       <div className='container-fluid w-100 bg-dark'>
           <div className='row text-light p-2'>
               <p>By: Sara Kalicanin ©2023</p>
           </div>
       </div>
    );
}

export default FooterComponent;