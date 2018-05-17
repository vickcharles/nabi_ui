import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    return (
      <div>
        <IconButton onClick={this.handleToggle} aria-label="Menu">
        <MenuIcon />
        </IconButton>

        <Drawer
          onClick={this.handleClose}
          open={this.state.isDrawerOpen}
        >
          <MenuItem onClick={this.handleClose}>*TODO*</MenuItem>
          <MenuItem onClick={this.handleClose}>*TODO*</MenuItem>
        </Drawer>
      </div>
    );
  }
}