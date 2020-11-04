import React, { useState } from 'react';
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';

import './header-navbar.scss';
import brand_logo from '../../assets/images/brand_logo.png'

function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="header-navbar" light expand="sm">
        <Container>
          <Row>
            <NavbarBrand className="pl-4">
              <img src={brand_logo} alt="brand_logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Pages
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      Service
                  </DropdownItem>
                    <DropdownItem>
                      Personal
                  </DropdownItem>
                    <DropdownItem>
                      Q&A
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderNavbar;