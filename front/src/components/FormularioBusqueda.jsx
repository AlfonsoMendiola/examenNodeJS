import React, { useState } from 'react'

export const FormularioBusqueda = (props) => {
    console.log(props);
    const buscar = e =>{
        e.preventDefault();
        props.url(`${import.meta.env.VITE_BASE_API_URL}/publicaciones/search?page=1&perPage=50&campo=${e.target.campo.value}&valor=${e.target.valor.value}`)
    }
    
  return (
    <div>
        <form onSubmit={buscar}>
            <div className="form-floating mb-3">
                <input type="text" className='form-control' name="valor" id="valor" placeholder='valor' required/>
                <label for="valor">Valor</label>
            </div>
            
            <select className="form-select" name="campo" aria-label="Default select example">
                <option selected value="Titulo">Titulo</option>
                <option value="Autor">Autor</option>
                <option value="Fecha">Fecha</option>
                <option value="Contenido">Contenido</option>
            </select>

            <button type='submit' className='btn btn-primary mt-1 mb-4'>Bucar entradas</button>
        </form>
            
        
    </div>
  )
}