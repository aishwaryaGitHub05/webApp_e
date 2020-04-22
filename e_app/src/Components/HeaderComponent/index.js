import React from 'react';
import './styles.css';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="Wrapper">
                    <div>LOGO</div>
                    <div className="Header">
                        <span>Shop</span>
                        <span>About</span>
                        <span>Journal</span>
                        <span>Contact</span>
                    </div>
                    <div className="loginFlex">
                        <span>Login</span>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
            )

    }
}

export default HeaderComponent