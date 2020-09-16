import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);



//, () => console.log(this.state) 
        //si volem veure el STATE ACTUAL hem de cridar 2 funcions (si no ho fem amb la 2a funcio, veurem el state anterior)                                
        //la 1a es la que ACTUALITZA el state
        //la 2a es un console.log, pero l'hem de CRIDAR DESDE FUNCIÓ (per això fem: , ()=>console.log)