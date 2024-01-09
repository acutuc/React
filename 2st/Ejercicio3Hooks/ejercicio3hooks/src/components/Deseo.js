import { useState } from 'react';
import { Input, Button } from 'reactstrap';

const Deseo = ({deseos, setDeseos}) => {
    const [deseo, setDeseo] = useState("");
    console.log(deseo)
    return (
        <form>
            <Input
                type='text'
                id='deseo'
            />
            <Button onClick={() => setDeseo(document.getElementById("deseo").value)}>Añadir deseo</Button>
        </form>
    )
}

export default Deseo;