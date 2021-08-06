import { ListItemAvatar } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { addProductContext } from '../../contexts/AddProductContext';

const EditProduct = () => {

    const {productToEdit, saveProduct} = useContext(addProductContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)
        useEffect(()=>{
            setNewEditItem(productToEdit)
        }, [productToEdit])

    function handleEditInput(e){
        let newProduct ={
            ...newEditItem,
        [e.target.name]:e.target.value,
        }
        setNewEditItem(newProduct)
    }
    return (
        <div>
            {newEditItem ?
            <>
                <form>
                    <input name= "brand" onChange={handleEditInput} value={newEditItem.brand} type="text" />
                    <input name= "description" onChange={handleEditInput} value={newEditItem.description} type="text" />
                    <input name= "price" onChange={handleEditInput} value={newEditItem.price} type="text" />
                    <input type="text" />
                    <Link to="/">
                     <button onClick={()=>saveProduct(newEditItem)}>Edit Product</button>
                    </Link>
                </form>
            </>
            : <h1>LOADING...</h1>
            }
        </div>
    );
};

export default EditProduct;