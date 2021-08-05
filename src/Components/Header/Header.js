import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="bg-color" light expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand href="/" className="mr-auto ml-md-5"><img src={logo} className="img-fluid w-50" alt="" /></NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink exact to="/" className="NavLink">Burger Builder</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
