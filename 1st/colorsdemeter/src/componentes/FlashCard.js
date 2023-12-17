import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const FlashCard = (props) => {
    return (
        <>
            <Card
            color="primary"
            inverse
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt={props.titulo}
                    title={props.titulo}
                    src={props.imagen}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.titulo}
                    </CardTitle>
                    <CardText>
                        {props.texto}
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default FlashCard;