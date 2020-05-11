import React,{useState, useEffect} from 'react';
import Pregunta from"./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto"

function App() {
  //definir state
  const [presupuesto,guardarPresupuesto] = useState(0);
  const [restante,guardarRestante] = useState(0);
  const [mostrarDefinir,actualizarMostrarDefinir] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect actualiza el restante
  useEffect(() => {
    if(crearGasto){
      guardarGastos([
        //agrega el nuevo presupuesto
        ...gastos,
        gasto
      ]);

      //resta el presupuesto actual
      //console.log(gasto)
      const presupuestoRestante = restante-gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);

      //resetear a false
      guardarCrearGasto(false);
    }
   },[gasto, crearGasto, gastos, restante]);



  return(
    <div className="container">
      <header>
          <h2>Gasto Semanal</h2>
          <div className="contenido-principal contenido">
            {mostrarDefinir 
              ?( 
                <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarMostrarDefinir={actualizarMostrarDefinir}
              />
              )
              :(
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      guardarGasto = {guardarGasto}
                      guardarCrearGasto = {guardarCrearGasto}
                      //agregarNuevoGasto={agregarNuevoGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado 
                      gastos={gastos}
                    />
                    <ControlPresupuesto
                      presupuesto = {presupuesto}
                      restante = {restante}
                    />
                  </div>
                </div>
              )
            }
            
            
          </div>
      </header>

          
           
     
    </div>

  )
}

 
export default App