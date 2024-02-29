
const Supermercados = ({supermercadosSeleccionados}) =>{

    return(
        <ul>
        {supermercadosSeleccionados.map((indice, valor) => {
            return(<li>Personas que acudirían al supermercado <strong>{valor+1}</strong>, ubicado en las coordenadas {indice.posX} {indice.posY}: <strong>{indice.personas}</strong></li>)
        })}
        </ul>
    )
}

export default Supermercados;