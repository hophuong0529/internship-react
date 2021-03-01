import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./HomePage/Home";
import Detail from "./DetailPage/Detail";
import AllProducts from "./NavigationPages/AllProducts";
import Login from "./NavigationPages/Login";
import SearchItem from "./SearchPage/SearchItem";
import Cart from "./NavigationPages/Cart";
import Checkout from "./NavigationPages/Checkout";
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
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/products' component={AllProducts}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/product/:name' component={Detail}/>
                        <Route exact path='/search' component={SearchItem}/>
                        <PrivateRoute exact path='/cart' component={Cart}/>
                        <PrivateRoute exact path='/checkout' component={Checkout}/>
                        <Route exact path='/category/:name' component={CategoryProducts}/>
                        <Route exact path='/sale-product' component={SaleProducts}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </AccountProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))

