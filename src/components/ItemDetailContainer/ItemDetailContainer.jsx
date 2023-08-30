import React from 'react';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services';
import { useParams } from 'react-router-dom'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoadoing] = useState(true)};
    const { id } = useParams();

    useEffect(()=> {
        getProduct(id)
            .then((response) => {
                setItem(response);
            })
            .catch(()=> {
                setItem(null);
            })
            .finally(()=> {
                setIsLoadoing(false);   
            });

    }, [id]);

    return <itemDetail item={item} isLoading={isLoading}/>;

};

export default ItemDetailContainer;