import { Card, CardBody, CardTitle, CardSubtitle, CardText, Input } from 'reactstrap';
const TarjetaPregunta = ({pregunta, idPregunta}) => {

    return (
        <>

            <Card
                style={{
                    width: '90%',
                    margin:'0 auto'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {pregunta}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </CardText>
                    <Input
                    type='radio'
                    name={idPregunta}
                    />
                </CardBody>
            </Card>
        </>
    )
}

export default TarjetaPregunta;