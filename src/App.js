import React, { useState, useEffect } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video3.mp4';
import weglon1 from './assets/weglon anterior.png';
import weglon2 from './assets/weglon.png';
import avion from './assets/avion.png';
function App() {
  // Estado para manejar la lista de autores
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores


  // Hook de efecto para cargar datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia el estado de carga
        const response = await getAuthors(); // Obtiene autores desde Contentful
        setAuthors(response || []); // Asigna los datos al estado, o un arreglo vacío si la respuesta es nula
      } catch (err) {
        setError('Error al cargar los autores'); // Maneja errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    // Evita volver a cargar los datos si ya se han obtenido
    if (authors.length === 0) {
      fetchData();
    }
  }, [getAuthors, authors.length]); // Dependencias: solo ejecuta el efecto cuando cambien

  // Muestra el indicador de carga si `loading` es verdadero
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <ClipLoader color="#007bff" loading={loading} size={75} />
      </div>
    );
  }

  // Muestra el mensaje de error si hay algún problema
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span>{error}</span>
      </div>
    );
  }

  // Contenido principal
  return (

    <div className="video-container">
      {/* Video de fondo */}
      <video autoPlay muted loop className="fillWidth visible-lg"> <source src={video} type="video/mp4;" /> </video>
      
{/* ---------------------------NAVEGADOR--------------------------------------- */}
      <div className="containerr text-center">
        <div className="row">

          <div className="xd col d-flex align-items-center ms-3">
            <a href=""><img src={weglon1} alt="LOGO" className="logo" /></a>
          </div>

          <div className="xd col d-flex justify-content-center align-items-center">
            <ul className="lista list-unstyled d-flex justify-content-between">
              <li className="mx-3">
                <a className="menux nav-link active text-white" aria-current="page" href="#">OUR SERVICES</a>
              </li>
              <li className="mx-3">
                <a className="menux nav-link active text-white" aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="mx-3">
                <a className="menux nav-link active text-white" aria-current="page" href="#">CONTACTO</a>
              </li>
            </ul>
          </div>
          
          <div className="xd col d-flex justify-content-end align-items-center me-3 mt-3">
            <a href=""><img src={weglon2} alt="LOGO" className="logo2" /></a>
          </div>

        </div>
      </div>

{/* ---------------banner-------------------------------------------- */}
      <div className='banner  ms-3 '>
        <div class="containerr ">
          <div class="row">
            <div class=" col">
              <h1 className='text2 text-white'>EXPLORA EL MUNDO</h1>
              <h5 className='textt text-white '>DOMINA LOS IDIOMAS</h5>
              <br />
              <br />
              <h6 className='text-white'>Weglon es una empresa de viajes educativos
                que combina experiencias culturales inmersivas con
                certificación en idiomas transformando
                el aprendizaje global.</h6>
            </div>

            <div class="col d-flex justify-content-end ">
              <img src={avion} alt="LOGO" className="logo3" />
            </div>

          </div>
        </div>
      </div>

{/* ----------------------EXPERIENCE--------------------------- */}
<div>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  >
    <div class="carousel-inner ">
      <div class="carousel-item active">
        <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp" alt="" class="d-block mx-auto"/>
      </div>
      <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aXvLjtaLMClIofbaj7GxDyhxs50WWxd_uQ&s" alt="" class="d-block mx-auto"/>
        
      </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</div>



    </div>
  );
}

export default App;
