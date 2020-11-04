import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import './header-navbar.scss';
import brand_logo from '../../assets/images/brand_logo.png'

function HeaderNavbar() {
  return (
    <div>
      <Navbar className="header-navbar">
        <NavbarBrand>
          <img src={brand_logo} alt="brand_logo" />
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default HeaderNavbar;