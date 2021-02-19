import React, {Component} from 'react';
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

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Route exact path='/' component={Home}/>
                <Route path='/products' component={AllProducts}/>
                <Route path='/login' component={Login}/>
                <Route path='/product/:name' component={Detail} />
                <Route path='/search' component={SearchItem} />
                <Footer/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))

