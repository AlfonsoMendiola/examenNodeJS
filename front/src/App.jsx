import { useState, useEffect } from 'react'
import axios from 'axios';

import { FormularioEntradas } from './components/FormularioEntradas';
import { FormularioBusqueda } from './components/FormularioBusqueda';

function App() {
  const [entradas, setEntradas] = useState(null);
  const [formCode, setFormCode] = useState('');
  const [apiUrl, setApiUrl] = useState(`${import.meta.env.VITE_BASE_API_URL}/publicaciones?page=1&perPage=50`)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setEntradas(response.data);
        if (response.data.data.length == 0) setEntradas(null);
        console.log(response);
      } catch (error) {
        
        console.log(error);
        
      }
    };

    fetchData();
  }, [apiUrl, formCode]);
  

  return (
    <div className='App container mt-4'>
      
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Crear Entrada
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Entrada</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <FormularioEntradas formCode={setFormCode}></FormularioEntradas>
            </div>
            
          </div>
        </div>
      </div>

      <h1>Listado de entradas</h1>

      <FormularioBusqueda url={setApiUrl}></FormularioBusqueda>

      {entradas ? (
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
              {/*inicio de bucle de renderizado*/}
              { entradas.data.map((entrada) => (
                <>
                <h2 className="accordion-header" key={entrada.id}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${entrada.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    {entrada.Titulo} - { entrada.Contenido.substring(0, 70)} ...ver mas
                  </button>
                </h2>
                <div id={`flush-collapse${entrada.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"> {entrada.Contenido} <p className=' text-primary'> {entrada.Autor} : {entrada.FechaPublicacion}</p> </div>
                </div>
                </>
              ) ) }
            {/*fin de bucle de renderizado*/}
          </div>
        </div>
      ) : ( 
        <p>No hay contenido para mostrar</p>
      )}
      


    </div>
  );

  
}

export default App
