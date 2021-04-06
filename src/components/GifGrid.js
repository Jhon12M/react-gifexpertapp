import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridltem } from './GifGridltem';

export const GifGrid = ({category}) => {

    
    //Vamos hacer uso del Custom Hook 
    const {data:images, loading} = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {/* Utilizamos un operador ternario ? para logica */}
            {loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">   
                 {
                    images.map( img => (
                        <GifGridltem 
                            key={img.id}
                            {...img}  
                        />     
                    ))
                 }
             
            </div>
        </>   
    )
} 
