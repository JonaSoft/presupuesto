import React, {Fragment, useState} from 'react';
import Error from './Error'
const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarMostrarDefinir}) =>{
    const [cantidad, agregarCantidad] = useState(0);
    const [error, guardarError]=useState(false);
    //funcion que lee el presupuesto
    const definirPresupuesto =(e)=>{
        agregarCantidad(parseInt(e.target.value,10))
    }
    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        //console.log('enviando');

        //validar input
        if(cantidad<1 || isNaN(cantidad)){
            guardarError(true);
            return
        }

        //si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarMostrarDefinir(false)
    }

    return(
    <Fragment>
        <h3>Coloca tu Presupuesto</h3>
        {error ?<Error mensaje="Hubo un error, debes ingresar un monto"/> 
               : null}
        <form
            onSubmit={agregarPresupuesto}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu Presupuesto"
                onChange={definirPresupuesto}
                autoFocus
            />
            <input
                type="submit"  
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>

    </Fragment>
    )
}

export default Pregunta
