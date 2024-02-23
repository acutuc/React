import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import React, { useState } from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//12 preguntas:
const PREGUNTAS = [
  { "pregunta": "Cuando mandas un mensaje por whatsapp esperas siempre al doble check. Si no aparece vuelves a abrir el terminal para revisarlo al rato.", "respuesta": 1 },
  { "pregunta": "Antes de acostarte siempre miras el móvil a ver si tienes mensajes o notificaciones.", "respuesta": 1 },
  { "pregunta": "Te despiertas antes de tiempo para jugar, mandar mensajes, actualizar perfiles,… con el teléfono móvil.", "respuesta": 1 },
  { "pregunta": "Si sales de casa sin el móvil volverías a cogerlo aunque llegues tarde a tu cita.", "respuesta": 1 },
  { "pregunta": "No tienes miedo a quedarte sin batería.", "respuesta": 0 },
  { "pregunta": "Cuando tienes la batería baja desactivas ciertas aplicaciones u opciones del teléfono como la WiFi, bluetooth para no quedarte sin batería.", "respuesta": 1 },
  { "pregunta": "Tienes ansiedad cuando tienes llamadas perdidas. Llamas a los números y te preocupas si no responden.", "respuesta": 1 },
  { "pregunta": "Miras la cobertura cuando estas en algún sitio con los amigos, esperando, etc.", "respuesta": 1 },
  { "pregunta": "Sueles hacer alguna otra cosa mientras que miras al móvil como comer, lavarte los dientes, etc.", "respuesta": 1 },
  { "pregunta": "No sueles mirar la cobertura del móvil con frecuencia", "respuesta": 0 },
  { "pregunta": "Vas al baño siempre con el móvil.", "respuesta": 1 },
  { "pregunta": "A veces sales a la calle sin el móvil.", "respuesta": 0 }
];



const Preguntas = ({ cabecera, sumaAciertos, sumaFallos, display, cambiaDisplay }) => {

  const responder = (event) => {
    if (event.target.value === "Si") {
      cambiaDisplay()
      sumaAciertos();
    } else {
      cambiaDisplay();
      sumaFallos();
    }
  }

  return (
    <div className="p-3 my-2 rounded bg-docs-transparent-grid" style={{
      display: display
    }}>
      <Toast>
        <ToastHeader>
          {cabecera}
        </ToastHeader>
        <div class="container">
          <div class="row justify-content-center">
            <Button outline color="secondary" value='Si' onClick={responder}>Si</Button>&nbsp;
            <Button outline color="secondary" value='No' onClick={responder}>No</Button>
          </div>
        </div>
      </Toast>
    </div>
  );

}

const VentanaModal = ({ sies, noes, reiniciar }) => {

  const [modal, setModal] = useState(true);

  const toggle = (event) => {
    if (event.target.value === "Seguir") {
      reiniciar()
      setModal(!modal);
    }
    setModal(!modal);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>RESULTADO DE SU TEST</ModalHeader>
        <ModalBody>
          Veces pulsadas 'Si': {sies}<br />
          Veces pulsadas 'No': {noes}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} value='Seguir'>Seguir</Button>
          <Button color="secondary" onClick={toggle}>Salir</Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preguntas: "ALMACENA EN ESTA VARIABLE LAS PREGUNTAS",
      aciertos: 0,
      fallos: 0,
      textoPregunta: "",
      respuesta: 0,
      finalizado: null,
      inicializarComps: []
    };
  }
  componentWillMount() {
    // POR SI NECESITAS REALIZAR ALGO ANTES DE  QUE SE MONTE EL COMPONENTE
    let copiaState = this.state;
    let arr = []
    for (let i = 0; i < PREGUNTAS.length; i++) {
      arr.push({ display: 'none', respondida: false })
    }
    //Saco la primera pregunta aleatoria:
    let num = this.aleatorio(0, PREGUNTAS.length)
    arr[num].display = ''

    copiaState.inicializarComps = arr;
    this.setState({ copiaState })
  }

  //Devuelve un valor aleatorio entre min y max.
  //INCLUYE min, NO INCLUYE max
  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.floor(Math.random() * horquilla + min);
  }

  sumaAciertos = () => {
    let copiaState = this.state;

    copiaState.aciertos++;

    this.setState({ copiaState })
  }

  sumaFallos = () => {
    let copiaState = this.state;

    copiaState.fallos++;

    this.setState({ copiaState })
  }

  cambiaDisplay = (n) => {
    let copiaState = this.state

    copiaState.inicializarComps[n].display = 'none'
    copiaState.inicializarComps[n].respondida = true

    //let num = this.aleatorio(0, PREGUNTAS.length);

    //PONER EN ALEATORIO:
    for (let i = 0; i < PREGUNTAS.length; i++) {
      if (copiaState.inicializarComps[i].display === 'none' && !copiaState.inicializarComps[i].respondida) {
        copiaState.inicializarComps[i].display = ''
        break;
      }
    }

    //Comprobamos si finalizamos el test:
    if (copiaState.aciertos + copiaState.fallos === PREGUNTAS.length - 1) {
      copiaState.finalizado = true
    }

    this.setState({ copiaState });
  }

  reiniciar = () => {
    let copiaState = this.state

    let arr = []
    for (let i = 0; i < PREGUNTAS.length; i++) {
      arr.push({ display: 'none', respondida: false })
    }
    //Saco la primera pregunta aleatoria:
    let num = this.aleatorio(0, PREGUNTAS.length)
    arr[num].display = ''

    copiaState.inicializarComps = arr;
    this.setState({ copiaState })
  }

  resultadoFinal = () => {

  }


  render() {
    let obj = [];

    for (let i = 0; i < PREGUNTAS.length; i++) {
      obj.push(<Preguntas
        cabecera={PREGUNTAS[i].pregunta}
        respuesta={PREGUNTAS[i].respuesta}
        key={i}
        sumaAciertos={this.sumaAciertos}
        sumaFallos={this.sumaFallos}
        display={this.state.inicializarComps[i].display}
        cambiaDisplay={() => this.cambiaDisplay(i)}
      />)
    }
    return (
      <div className="App">
        <header className="App-header">
          {obj}
          {this.state.finalizado && (<VentanaModal
            sies={this.state.aciertos}
            noes={this.state.fallos}
            reiniciar={this.reiniciar}
          />)}
        </header>
      </div>
    );
  }
}

export default App;