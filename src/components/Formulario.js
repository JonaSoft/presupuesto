import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombreGasto,guardarGasto0]=useState('');
    const [cantidadGasto,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);

    const agregarGasto=(e)=>{
        e.preventDefault();
        //validar
        if(cantidadGasto<1 || isNaN(cantidadGasto) || nombreGasto===""){
            guardarError(true);
            return
        }
        guardarError(false);
        

        //construir gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id:shortid.generate()
        }
        console.log(gasto)

        //pasar al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true);
        //resetear el form
        guardarGasto0('');
        guardarCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h3>Agrega tus gastos aquí</h3>
            {error ? <Error mensaje="Ambos campos son obligatorios"/>
                   :  null }
            <div className="campo">
                <label>Nombre de Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange={e =>guardarGasto0(e.target.value)}
                    autoFocus
                /> 
            </div>
            <div className="campo">
                <label>Cantidad de Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidadGasto}
                    onChange={e =>guardarCantidad(parseInt(e.target.value))}
                /> 
            </div>
            <input
                type="submit"
                className="button-primary u-full-width" 
                value="Agregar Gasto"
            />
        </form>
      );
}
 
export default Formulario;
