
const TotalPersonas = ({ poblacion }) => {
    const total = (poblacion) => {
        let total = 0;
        poblacion.map(e => e.map(f => total+= f))
        return (total)
    }
    return (
        <p>Total de personas: <strong>{total(poblacion)}</strong></p>
    )
}

export default TotalPersonas;