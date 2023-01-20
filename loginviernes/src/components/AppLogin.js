import {Row, Col, Card, CardTitle, Form, FormGroup, Label, Input, Button, CardText} from 'reactstrap';

export default function AppLogin(props) {
    //Constantes:
    const handleChange = (event) =>{

    }

    const clicar = () =>{

    }

    const 

    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="text-center" tag="h4">
                        Log in
                    </CardTitle>
                    <Form inline>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="exampleEmail">User id</Label>
                            <Input
                                id="Telefono"
                                name="telefono"
                                placeholder="type your user id"
                                type="email"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="examplePassword">Password</Label>
                            <Input
                                id="Password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <br />
                        <Button color="primary" size="lg" block onClick={clicar} >
                            <strong>Log in</strong>
                        </Button>
                        <CardText className="text-danger">{info}</CardText>

                    </Form>
                </Card>
            </Col>
        </Row>
    );
}