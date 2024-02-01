import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioEntradas = (props) => {

    const {enviado, statusPeticion} = useForm({})
    console.log(props);

    const showMsg = (status) => {
        if( status == '' ) return <p className='text-success'></p>
        if( status == 200 ) {
            props.formCode(status)
            return <p className='text-success'>Guardado correctamente</p>
        }
        if(status >= 400 && status <= 499) {
            props.formCode(status)
            return <p className='text-danger'>Error al guardar</p>
        }
    }
    
  return (
    <div>
        <form onSubmit={enviado} className='formulario'>
        <input type="hidden" name="endpoint" value="publicaciones"/>
        
            <div className="form-floating mb-3">
                <input type="text" className='form-control' name="Titulo" id="titulo" placeholder='Titulo' required autoFocus/>
                <label for="titulo">Titulo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className='form-control' name="Autor" id="autor" placeholder='Autor' required />
                <label for="autor">autor</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className='form-control' name="Contenido" id="contenido" cols="30" rows="10" placeholder='Contenido' required></textarea>
                <label for="contenido">Contenido</label>
            </div>
            
            <input type="submit" className='btn btn-primary' value="Enviar" />
            
            
            {showMsg(statusPeticion)}
            
        </form>
    </div>
  )
}