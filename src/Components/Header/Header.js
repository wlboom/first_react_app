import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavLink
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

// {'sm' | 'md' | 'lg' | 'xl'}

class Header extends Component {
    render() {
        return (
            <div className="header_navbar">
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>{' '}
                    <Navbar.Brand as={Link} to="/">FROST</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink as={Link} to="/">Home</NavLink>
                            <NavLink as={Link} to="/about">About us</NavLink>
                            <NavLink as={Link} to="/contacts">Contact us</NavLink>
                            <NavLink as={Link} to="/blog">Blog</NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;