import React from "react";
import {  useState, useEffect } from "react";
import {  getProducts } from "../../services";
import ItemList from './ItemList';
import { useParams } from "react-router-dom"; 


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId).then((response) => {
            setItems(response);
        });
    }, [categoryId]);

    return <ItemList items={items}/>;
};

export default ItemListContainer;