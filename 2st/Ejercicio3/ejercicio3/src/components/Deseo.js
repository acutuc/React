import { Form, Input, Row, Col } from 'reactstrap';

const Deseo = (props) => {

    return (
        <Form onSubmit={props.actualizaDeseos}>
            <Row>
                <Col>

                </Col>
                <Col> <Input name='deseo' id='deseo' placeholder='Escriba aquí un deseo'></Input></Col>
                <Col></Col>
            </Row>
        </Form>
    )
}

export default Deseo;