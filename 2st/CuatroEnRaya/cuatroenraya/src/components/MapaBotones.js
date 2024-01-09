import { Button } from 'reactstrap';

const MapaBotones = ({colores, botones, clica}) => {
    let lista = [];
    for (let i = 0; i < botones.length; i++) {
        let lista2 = [];

        for (let j = 0; j < botones.length; j++) {
            if (i === 0) {
                lista2.push(<Button
                    key={i * 10 + j}
                    onClick={() => clica(i, j)}
                    color={colores[i][j]}
                    outline
                />)
            } else {
                if(colores[i][j] === "secondary"){
                    lista2.push(<Button
                        key={i * 10 + j}
                        color={colores[i][j]}
                        outline
                    />)
                }else{
                    lista2.push(<Button
                        key={i * 10 + j}
                        color={colores[i][j]}
                    />)
                }
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