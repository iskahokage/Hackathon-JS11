import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../components/admin/AddProduct';
import Home from '../components/home/Home';
import AddProductContextProvider from '../contexts/AddProductContext';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <AddProductContextProvider>
                    <Switch>
                        <Route exact path = "/add" component={AddProduct}/>
                        <Route exact path = "/" component={Home}/>
                    </Switch>
                </AddProductContextProvider>
            </BrowserRouter>
        </div>
    );
};

export default Routes;