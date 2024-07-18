import React from 'react'
import './_Header.scss';
import '../../style/utils/_mixins.scss';
import '../../style/utils/_variables.scss';
import logo from '../../Assets/LOGO.svg';
import Nav from '../Nav/Nav';


function Header() {
    return (
        <header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
    )
}

export default Header