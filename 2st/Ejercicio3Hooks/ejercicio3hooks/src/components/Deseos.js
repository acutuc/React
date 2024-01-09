
const Deseos = ({ deseos }) => {
    return (
        <div>
            {deseos.map(e => {
                return (
                    e + " - "
                )
            })}
        </div>
    )
}


export default Deseos;