import * as React from 'react';
import { Link } from 'react-router-dom';

/** 
 * Header Stateless Component
*/
const Header = () => {
    return (
        <header>
            <Link id="nabi-logo-anchor" to="/">
                <img 
                    id="nabi-logo" 
                    className="nabi-text-center" 
                    alt="logo" 
                    src={require('../../../assets/images/logo.png')}
                />
                <p 
                    id="nabi-logo-text" 
                    className="nabi-text-center nabi-font-montserrat nabi-text-extrabold"
                >
                    Nabi Music
                </p>
            </Link>
        </header>
    );
};

export default Header;
