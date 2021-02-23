import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./HomePage/Home";
import Detail from "./DetailPage/Detail";
import AllProducts from "./AllProducts";
import Login from "./Login";
import SearchItem from "./SearchItem";
import Cart from "./Cart";
import {AccountProvider} from "./contexts/AccountContext";
import {CartProvider} from "./contexts/CartContext";

function App() {
    return (
        <AccountProvider>
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <Navigation/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/products' component={AllProducts}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/product/:name' component={Detail}/>
                    <Route path='/search' component={SearchItem}/>
                    <Route path='/cart' component={Cart}/>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </AccountProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))

