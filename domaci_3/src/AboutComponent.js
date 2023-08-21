import React from 'react';

const AboutComponent = ({initialSelect}) => {
    return (
       <div className='container'>
           <div className='row text-center'>
               <h1>Gen 1 Pokedex app</h1>
           </div>
           <div className='row'>
               <p>This app is developed as homework project using React.js. Data is obtained using <a href='https://pokeapi.co/'>free Pokemon API</a></p>
           </div>
       </div>
    );
}

export default AboutComponent;