import * as React from 'react';
import { Link } from 'react-router-dom';
import DrawerMenu from './Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

/** 
 * Header component
 */
const Header = () => {
  return (
    <header>
      <div className="nabi-header-container">
        <DrawerMenu />
        <Divider className="header-divider hide-on-desktop"/>
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
            NABI MUSIC
          </p>
        </Link>
        <div className="nabi-header-button" >
          <Button className="nabi-responsive-button">
          LOG IN
          </Button>
          <Link to="/registration">
          <Button className="nabi-responsive-button" color="primary" variant="raised">
          CREATE ACCOUNT
          </Button>
          </Link>
        </div>
      </div>
   </header>
  );
};

export default Header;
