import { Button, Container, Row, Col } from "reactstrap";

const SelectorMinas = (props) => {
    return (
        <Container>
            <Row xs="12">
                <Col>
                    Minas:
                </Col>
                <Col>
                    <Row xs="1">
                        <Col>
                            <Button onClick={() => props.subirMinas()} size="lg">+</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => props.bajarMinas()} size="lg">-</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                {props.minas}
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>



            
        </Container>
    )
}

export default SelectorMinas;