import React, {Component} from 'react';
import {
    Card,
    Col,
    Container,
    ListGroup,
    Media,
    Row
} from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Container>
                < h2 className="text-center m-4">Blog</h2>
                <Row>
                    <Col md="9">
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src="https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="Generic placeholder"/>
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                    lacinia congue felis in faucibus.
                                </p>

                                <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                        alt="Generic placeholder"/>
                                    <Media.Body>
                                        <h5>Media Heading</h5>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                            sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                            lacinia congue felis in faucibus.
                                        </p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light"
                            style={{
                            width: '18rem'
                        }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;