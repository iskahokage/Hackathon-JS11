import React, { useContext, useState } from 'react';
import { addProductContext } from '../../contexts/AddProductContext';

const AddProduct = () => {
    const [inpTitle, setInpTitle] = useState('')
    const [inpDescription, setInpDescription] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const  {addProduct} = useContext(addProductContext)
    function handleClick (){
        let newObj={
            brand:inpTitle,
            description: inpDescription,
            price: inpPrice,
        }
        addProduct(newObj)
    }
    return (
        <div>
            <h1>Adding product</h1>
            <form>
                <input onChange={(e) =>setInpTitle(e.target.value)} type="text" />
                <input onChange={(e) =>setInpDescription(e.target.value)} type="text" />
                <input onChange={(e) =>setInpPrice(e.target.value)} type="text" />
                <button onClick={handleClick}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;