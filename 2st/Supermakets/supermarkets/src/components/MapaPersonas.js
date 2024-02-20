import { Table, Button } from 'reactstrap';

const MapaPersonas = ({ poblacion }) => {

    return (
        <Table bordered>
            <tbody>
                {poblacion.map(e => {
                    return (<tr>{e.map(f => {
                        return (<td><Button style={{ width: 60 }}>{f}</Button></td>)
                    })}</tr>)
                })}
            </tbody>
        </Table>
    )
}

export default MapaPersonas;