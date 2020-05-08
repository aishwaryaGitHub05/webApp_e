import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="Wrapper">
                    <div>LOGO</div>
                    <div className="Header">
                        <span><Link to="/home">Home</Link></span>
                        <span><Link to="/shop">Shop</Link></span>
                        <span><Link to="/about">About</Link></span>
                        <span>Journal</span>
                        <span>Contact</span>
                    </div>
                    <div className="loginFlex">
                        <span><Link to='/login'>Login</Link></span>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
            )

    }
}

export default HeaderComponent
