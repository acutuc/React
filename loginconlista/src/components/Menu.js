import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, List } from 'reactstrap';

export default function Menu(props){
    //Hooks
    const [cosa, setCosa] = useState("");

    const handleChange = (event) =>{
        if(event.target.name === "cosa"){
            setCosa(event.target.value);
        }
    }

    const handleSubmit = () =>{
        props.anadirLista(cosa)
        console.log(props.lista)
    }

    return(
        <Form>
            <FormGroup>
                <Label>Añade algo</Label>
                <Input 
                type="text"
                name="cosa"
                id="cosa"
                onChange={handleChange}
                />
            </FormGroup>
            <Button onClick={handleSubmit}>Añade</Button>
            <List>
                {props.lista.map(element =>{
                    return(<li>{element}</li>)
                })}
            </List>
        </Form>
    )
}