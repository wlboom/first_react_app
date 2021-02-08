import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Route, Router, Switch } from 'react-router';
import logo from './logo.svg';

// {'sm' | 'md' | 'lg' | 'xl'}

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>{' '}
                    <Navbar.Brand href="/">Мое первое приложение</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contacts">Contact us</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exaxt path="/" component={Home}/>
                        <Route exaxt path="/about" component={About}/>
                        <Route exaxt path="/contacts" component={Contacts}/>
                        <Route exaxt path="/blog" component={Blog}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;