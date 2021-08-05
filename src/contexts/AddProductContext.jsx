import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/consts';

export const addProductContext = React.createContext();

const INIT_STATE ={
    products: []
}

const reducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case "GET_TODOS_DATA":
            return{
                ...state,
                products: action.payload
            }
        default: return state
    }
}


const AddProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProductsData = async () =>{
    let {data} = await axios(JSON_API)
    dispatch({
        type: "GET_TODOS_DATA",
        payload: data
    })
    }

    const addProduct = (newTask)=>{
        axios.post(JSON_API, newTask)
        getProductsData()
    }   
    return (
        <addProductContext.Provider value={{
            products: state.products,
            addProduct,
            getProductsData
        }}>
            {children}
        </addProductContext.Provider>
    );
};

export default AddProductContextProvider;