//Usar el sniper rafc 
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//Para agresar una lista lo hacemos mediante una expresion que regrese un valor
//map resive dos argumentos el elemento del arreglo y el indice i,  


//Para renderizar usamos el Hook del useState 
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'] );
    
    /* const handleAdd = () => {
        setCategories([...categories, 'Pokemon']);
        //Otra forma 
        //setCategories(cats => [...cats, 'Pokemon']);
    } */

    //AddCategory podemos enviarle propiedades para la conunicacion entre componentes
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr  /> 

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
