import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" className="mb-4">
            <Container>
                <NavbarBrand tag={RRNavLink} exact to="/">
                    <span role="img" area-label="fire">🔥</span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink} to="/users" activeClassName="active">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink} to="/profile" activeClassName="active">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;