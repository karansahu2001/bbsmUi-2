import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function TopNavBar(args) {
  return (
    <div>
      <Navbar className="" color="dark" dark>
        <NavbarBrand href="/">
          <h4
            style={{
              height: 40,
              width: 40,
            }}
          >
            KulBunny{' '}
          </h4>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
