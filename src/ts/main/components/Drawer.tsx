import * as React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from 'material-ui/Divider';

import { nonRegisteredUserMenuItems } from '../model';

interface DrawerMenuState {
  isDrawerOpen: boolean;
}

export default class DrawerMenu extends React.Component<{}, DrawerMenuState>  {
  constructor(props: {}) {
    super(props);
    this.state = {isDrawerOpen: false};
  }

  handleToggle = () => this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  handleClose = () => this.setState({isDrawerOpen: false});

  render() {
    const menuItems: any = [];

    for (const [key, item] of Object.entries(nonRegisteredUserMenuItems)) {
      menuItems.push(
        <Link key={key} to={item.url}>
          <MenuItem className={item.className} onClick={this.handleClose}>
            {item.label}
          </MenuItem>
          {item.divider && <Divider />}
        </Link>
      );
    }

    return (
      <div>
        <IconButton onClick={this.handleToggle} id="menu" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Drawer
          onClick={this.handleClose}
          open={this.state.isDrawerOpen}
        >
          {menuItems}
        </Drawer>
      </div>
    );
  }
}
