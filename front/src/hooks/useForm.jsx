import { useState } from "react";
import axios from "axios";

export const useForm = (objetoInicial = {}) =>{
    const [formulario, setFormulario] = useState(objetoInicial);
    const [statusPeticion, setStatusPeticion] = useState('');

    const serializarFormulario = (target) =>{
        const formData = new FormData(target);
        const objetoCompleto = {};
        
        for(let [name, value] of formData){
            objetoCompleto[name] = value;
        }
        return objetoCompleto;

    }
    const enviado = async e =>{
        try {
            e.preventDefault();
            const objComplete = serializarFormulario(e.target);
            setFormulario( objComplete )
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/${objComplete.endpoint}`,{
                ...objComplete
            })
            setStatusPeticion(response.status)
        } catch (error) {
            console.log(error.response.status);
            setStatusPeticion(error.response.status)
        }
        
        
    }

    const cambiado = ({target}) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return{
        statusPeticion,
        formulario,
        enviado,
        cambiado

    }
}