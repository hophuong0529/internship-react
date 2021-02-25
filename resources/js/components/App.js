import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./HomePage/Home";
import Detail from "./DetailPage/Detail";
import AllProducts from "./NavigationPages/AllProducts";
import Login from "./NavigationPages/Login";
import SearchItem from "./SearchPage/SearchItem";
import Cart from "./NavigationPages/Cart";
import {AccountProvider} from "./contexts/AccountContext";
import {CartProvider} from "./contexts/CartContext";
import CategoryProducts from "./SearchPage/CategoryProducts";
import {PrivateRoute} from "./contexts/AccountContext";
import SaleProducts from "./SearchPage/SaleProducts";

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
                    <PrivateRoute path='/cart' component={Cart}/>
                    <Route path='/category/:name' component={CategoryProducts}/>
                    <Route path='/sale-product' component={SaleProducts}/>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </AccountProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))

