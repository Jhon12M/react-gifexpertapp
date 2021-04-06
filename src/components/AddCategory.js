import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    
    //La caja de texto tiene que tener un tipo de estado para saber
    //lo que la persona esta escribiendo
    //el onChange se dispara cadavez que la caja cambie 
    const [inputValue, setInputValue] = useState(''); //si sedeja vacio es undefined por lo tanto value={inputValue} es undefined
    //Para que se a un strin vacion se deja '' 
    //Con esta funcion extraemos el valor de la caja 
    //Tenemos el inputValue actualizado con el ultimo valor que la persona escribio
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Para prevenir el comportamiento por defecto del formulario 
        e.preventDefault();  

        //console.log('Submit hecho');
        if (inputValue.trim().length > 2) {
            
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>

            <input type='text' value={inputValue} onChange={handleInputChange}></input>
        
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}