import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import '../../css/home.css'
import Home from "./Home";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Route exact path='/' component={Home} />
                <Footer/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

