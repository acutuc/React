import { Button, Container, Row, Col } from "reactstrap";

const Botonera = (props) => {
    return (
        <Container>
            <Row xs="3">
                <Col>

                </Col>
                <Col>
                    <Button size="lg">↑</Button>
                </Col>
                <Col>

                </Col>
                <Col>
                    <Button size="lg">←</Button>
                </Col>
                <Col>

                </Col>
                <Col>
                    <Button size="lg">→</Button>
                </Col>
                <Col>

                </Col>
                <Col>
                    <Button size="lg">↓</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Botonera;