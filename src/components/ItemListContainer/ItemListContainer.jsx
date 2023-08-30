import React from "react";
import {  useState, useEffect } from "react";
import {  getProducts } from "../../services";
import ItemList from './ItemList';  


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts().then((response) => {
            setItems(response);
        });
    }, []);

    return <ItemList items={items}/>;
};

export default ItemListContainer;