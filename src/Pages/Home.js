import React, {Component} from 'react';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our Team</h2>
                    <CardDeck>
                        <Card
                            style={{
                            width: '18rem'
                        }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                            width: '18rem'
                        }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                            width: '18rem'
                        }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default Home;