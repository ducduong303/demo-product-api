
import React, { useState, useEffect } from 'react';
import './App.css';

import Products from './components/Products';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
function App() {
 

    return (

        <div className="App">
            <ul className="nav">
                <li><Link to="/">Trang Chủ</Link></li>
                <li><Link to="/product">Sản Phảm</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/product/:id" component={ProductDetail} />
        </div>
    )
     

}

export default App;
