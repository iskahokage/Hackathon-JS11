import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { addProductContext } from '../../contexts/AddProductContext';
import AddProduct from '../admin/AddProduct';

const Home = () => {

    const {products, getProductsData, deleteProduct, editProduct} = useContext(addProductContext)
    useEffect(()=>{
      getProductsData()
    }, [])
    // 
    function handleClick(id){
      deleteProduct(id)
    }
    return (
        <div>
          <AddProduct/>
          <h1>There should be a list of products</h1>
          {products.map(item => (
            <div>
              <div key={item.id}>{item.brand}</div>
              <div key={item.id}>{item.description}</div> 
              <div key={item.id}>{item.price}</div>
              <img src={item.image} alt="" /><br />
              <button onClick={()=>handleClick(item.id)}>Delete Item</button>
              <NavLink to="/edit">
                <button onClick={()=>editProduct(item.id)}>Edit Product</button>
              </NavLink>
              
            </div>
          ))}
        </div>
    );
  };
  
  // {item.brand}{item.description}{item.price}
  export default Home;