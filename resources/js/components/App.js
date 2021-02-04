import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Navigation from "./HomePage/Navigation";
import Footer from "./Footer";
import Home from "./HomePage/Home";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Route exact path='/' component={Home} />
                <Route exact path='/' component={Home} />
                <Footer/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

