import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';
import DATOS from './components/Datos';
import Cabecera from './components/Cabecera';
import TarjetaPregunta from './components/TarjetaPregunta';
import { useState } from 'react';

const App = () => {
  const [respuestas, setRespuestas] = useState({});
  const [imagenMostrada, setImagenMostrada] = useState(null);
  const [botonVisible, setBotonVisible] = useState(true);
  const [formularioVisible, setFormularioVisible] = useState(true);



  const determinarTipo = (puntuacion) => {
    if (puntuacion >= 0 && puntuacion <8) {
      return 1;
    } else if (puntuacion >= 8 && puntuacion < 22) {
      return 2;
    } else if(puntuacion >= 22 && puntuacion < 42){
      return 3;
    }else if(puntuacion >= 42 && puntuacion < 68){
      return 4;
    }else if(puntuacion >= 68 && puntuacion < 84){
      return 5;
    }else{
      return 6;
    }
  };

  const determinarExplicacionTipo = (puntuacion) => {
    if (puntuacion >= 0 && puntuacion <8) {
      return "Muy sensible a la luz solar";
    } else if (puntuacion >= 8 && puntuacion < 22) {
      return "Sensible a la luz solar";
    } else if(puntuacion >= 22 && puntuacion < 42){
      return "Sensibilidad normal a la luz solar";
    }else if(puntuacion >= 42 && puntuacion < 68){
      return "La piel tiene tolerancia a la luz solar";
    }else if(puntuacion >= 68 && puntuacion < 84){
      return "La piel es oscura. Alta tolerancia";
    }else{
      return "La piel es negra. Altísima tolerancia";
    }
  };

  const handleRespuestaChange = (idPregunta, valor) => {
    setRespuestas(respuestaAnterior => ({
      ...respuestaAnterior,
      [idPregunta]: parseInt(valor, 10) || 0,
    }));
  };

  const todasPreguntasRespondidas = () => {
    return DATOS.every((pregunta) => {
      const respuesta = respuestas[pregunta.idPregunta];
      return respuesta !== undefined && respuesta !== null;
    });
  };

  const calcularSuma = () => {
    return DATOS.reduce((suma, pregunta) => {
      const respuesta = respuestas[pregunta.idPregunta];
      return suma + (respuesta ? parseInt(respuesta, 10) : 0);
    }, 0);
  };

  const handleClickEnviarRespuestas = () => {
    const puntuacionTotal = calcularSuma();
    const rutaImagen = "/images/tipos/tipo" + determinarTipo(puntuacionTotal) + ".png";
    setImagenMostrada(rutaImagen);
    setBotonVisible(false); 
    setFormularioVisible(false)
  };

  //Cargamos todas las tarjetas en un array:
  let obj = [];
  for (let i = 0; i < DATOS.length; i++) {
    obj.push(<TarjetaPregunta
      pregunta={(i + 1) + ". " + DATOS[i].pregunta}
      idPregunta={DATOS[i].idPregunta}
      respuestas={DATOS[i].respuestas}
    />)
  }

  //src para la imagen de cabecera:
  const imagen = "/images/logo/demeter-logo-contorno-transp-green.png";

  return (
    <div className="App">
      <Cabecera
        imagen={imagen}
      />
      {formularioVisible && 
      DATOS.map((valor, indice) => (
        <TarjetaPregunta
          key={indice}
          pregunta={(indice + 1) + ". " + valor.pregunta}
          idPregunta={valor.idPregunta}
          respuestas={valor.respuestas}
          onChange={handleRespuestaChange}
        />
      ))}
      <Button
        color="primary"
        disabled={!todasPreguntasRespondidas()}
        onClick={handleClickEnviarRespuestas}
        style={{ display: botonVisible ? '' : 'none' }}
      >
        Enviar Respuestas
      </Button>
      {imagenMostrada && (
        <>
        <h2>Fototipo {determinarTipo(calcularSuma())}</h2>
        <h4>{determinarExplicacionTipo(calcularSuma())}</h4>
        <img src={imagenMostrada} alt="Resultado" style={{ marginTop: '20px', maxWidth: '100%' }} />
        </>
      )}
    </div>
  );
}

export default App;
