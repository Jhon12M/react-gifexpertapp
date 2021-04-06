//Todos los hooks empiezan por use los cuales tienen un estado 
import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Esto es una promesa 
    //Los efectos no pueden ser async por que esperan algo sincrono 
    useEffect (() => {

        getGifs(category)
            .then(imgs => {
     
                    //console.log(img);
                    setState({
                        data: imgs,
                        loading: false
                    });
                
            })

    }, [category])


    return state;
}