import { Card, CardBody, CardTitle, Input, Label } from 'reactstrap';
const TarjetaPregunta = ({pregunta, idPregunta, respuestas, onChange}) => {

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
                    {respuestas.map(e => {

                        const idUnico = idPregunta + "_" + e.puntuacion;

                        return(<><Input
                            type='radio'
                            name={idPregunta}
                            id={idUnico}
                            value={e.puntuacion}
                            onChange={() => onChange(idPregunta, e.puntuacion)}
                            /> &nbsp;
                            <Label for={idUnico}>{e.respuesta}</Label><br/></>)
                    })}
                </CardBody>
            </Card>
        </>
    )
}

export default TarjetaPregunta;