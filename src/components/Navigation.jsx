import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

function Navigation(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" color='info' dark>
            <NavbarBrand href="/">Photo Gallery</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link to="/" className='nav-link'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className='nav-link'>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login" className='nav-link'>Log In</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;