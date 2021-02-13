import React, {Component} from 'react';
import { Container, Navbar } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;