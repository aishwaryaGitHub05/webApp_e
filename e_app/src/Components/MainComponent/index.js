import React from 'react';
import './styles.css';
import About from "../Pages/About";
import HomePage from "../Pages/homePage";
import Login from "../Pages/Login";
// import {Switch, Route} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Shop from "../Pages";



class MainComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={"/home"}>
                    <HomePage/>
                </Route>
                <Route path="/shop">
                    <Shop/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
            )
    }
}

export default MainComponent
