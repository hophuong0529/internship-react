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
import Overview from "./AdminPage/Overview";
import AdHeader from "./AdminPage/Ad-Header";
import AdLeft from "./AdminPage/Ad-Left";
import AddProduct from "./AdminPage/ProductPage/AddProduct";
import EditProduct from "./AdminPage/ProductPage/EditProduct";
import AdFooter from "./AdminPage/Ad-Footer";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/">
                    <AdHeader/>
                    <div className="container-fluid row">
                        <div className="col-md-2">
                            <AdLeft/>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route exact path='/admin/' component={Overview}/>
                                <Route path='/admin/products' component={Overview}/>
                                <Route path='/admin/product/add' component={AddProduct}/>
                                <Route path='/admin/product/edit/:id' component={EditProduct}/>
                            </Switch>
                        </div>
                    </div>
                    <AdFooter/>
                </Route>
                <Route path='/'>
                    <AccountProvider>
                        <CartProvider>
                            <Header/>
                            <Navigation/>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/products' component={AllProducts}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/product/:name' component={Detail}/>
                                <Route path='/search' component={SearchItem}/>
                                <PrivateRoute path='/cart' component={Cart}/>
                                <PrivateRoute path='/checkout' component={Checkout}/>
                                <Route path='/category/:name' component={CategoryProducts}/>
                                <Route path='/sale-product' component={SaleProducts}/>
                            </Switch>
                            <Footer/>
                        </CartProvider>
                    </AccountProvider>
                </Route>
            </Switch>
        </BrowserRouter>

)
}

ReactDOM.render(
    <App/>
, document.getElementById('app'))

