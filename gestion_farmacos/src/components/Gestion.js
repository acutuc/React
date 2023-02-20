
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Toast,
    ToastHeader,
    ToastBody,
    Input,
    Button
} from 'reactstrap';
import Farmacos from './Farmacos';
import axios from 'axios';

function Gestion(props) {
    const [open, setOpen] = useState('1');
    const [medicamentos, setMedicamentos] = useState([]);
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    function clicar(){
        axios.post(Farmacos,JSON.stringify({
            
          }))
    }

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <div className="d-flex justify-content-between">
                            <div className="p-3 bg-info my-2 rounded">
                                <Toast>
                                    <ToastHeader>
                                        Incluir X medicamentos:
                                    </ToastHeader>
                                    <ToastBody>
                                        <Input >{props.medicamentos}</Input>
                                        <Button color="info" onClick={clicar}>Add</Button>&nbsp;
                                        <Button color="info">Clear</Button>
                                    </ToastBody>
                                </Toast>
                            </div>
                            <div className="p-3 bg-danger my-2 rounded">
                                <Toast>
                                    <ToastHeader>
                                        Incluir X medicamentos:
                                    </ToastHeader>
                                    <ToastBody>
                                        <Input >{}</Input>
                                        <Button color="danger">Add</Button>&nbsp;
                                        <Button color="danger">Clear</Button>
                                    </ToastBody>
                                </Toast>
                            </div>
                        </div>

                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Gestion;