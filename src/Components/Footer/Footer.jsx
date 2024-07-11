import React from "react";
import logo from '../../Assets/logo-footer.svg';


const Footer = () => {
    return (
        <footer className="Footer">
            <img src={logo} alt="logo de kasa"/>
                <p className="Footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;