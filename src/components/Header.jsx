import React from "react";

import Logo from "../img/header/logo.png"
import Notification from "../img/header/notification.png"
import Circle from "../img/header/cirlce__image.png"
import Row from "../img/header/vector.png"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href="#"><img src={Logo} alt="Logo" className="logo" /></a>
                    <div className="header__menu">
                        <a href="#"><img src={Notification} alt="notification" className="header__menu-notification" /></a>
                        <div className="header__menu-profile">
                            <img src={Circle} alt="circle" className="circle" />
                            <a href="#"><img src={Row} alt="row" className="row" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__line"></div>
        </header>
    );
};

export default Header;