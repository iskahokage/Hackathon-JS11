import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../contexts/AddProductContext';
import AddProduct from '../admin/AddProduct';

const Home = () => {

    const {products, getProductsData} = useContext(addProductContext)
    useEffect(()=>{
      getProductsData()
    }, [])
    // 
    return (
        <div>
          <AddProduct/>
          <h1>There should be a list of products</h1>
          {products.map(item => (
            <div key={item.id}>{item.brand}</div>
          ))}
          {products.map(item => (
            <div key={item.id}>{item.description}</div>
          ))}
          {products.map(item => (
            <div key={item.id}>{item.price}</div>
          ))}  
        </div>
    );
  };
  
  // {item.brand}{item.description}{item.price}
  export default Home;