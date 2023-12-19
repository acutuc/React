import { Button } from 'reactstrap';

const MapaBotones = (props) => {
    let lista = [];
    for (let i = 0; i < props.botones.length; i++) {
        let lista2 = [];

        for (let j = 0; j < props.botones.length; j++) {
            if (i === 0) {
                lista2.push(<Button
                    key={i * 10 + j}
                    onClick={() => props.clica(i, j)}
                    outline
                />)
            } else {
                lista2.push(<Button
                    key={i * 10 + j}
                    outline
                />)
            }

        }

        lista.push(
            <>
                {lista2}<br />
            </>
        )
    }
    return (
        <>
            {lista}
        </>
    )
}

export default MapaBotones;