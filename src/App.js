import React, { useState, useEffect } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video5.mp4';
import weglon1 from './assets/weglon anterior.png';
import weglon2 from './assets/weglon.png';
import avion from './assets/avion.png';
import ban1 from './assets/ban1.jpg'
import ban2 from './assets/ban2.jpg'
import Compo2 from './componentes/xd'
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

      {/* ----------------------CARRUSEL--------------------------- */}
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-center align-items-center">
              <img src={ban1} class="d-block img-fluid" alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img src={weglon1} class="d-block img-fluid" alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img src={ban2} class="d-block img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* ----------------------EXPERIENCE--------------------------- */}

      <div className='experience col d-flex flex-column'>
        <h1 className='mt-5 me-3 text-end text-white'>WEGLON EXPERIENCE</h1>
        <h6 className='me-3 text-end text-white'>EDUCATIONAL</h6>
        <h6 className='me-3 text-end text-white'>PROGRAMS</h6>
      </div>

      <div class="cartas">
        <div class="row">
          <div class="col">
            <div className="card" style={{ marginLeft: '20px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card bg-transparent border-0" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">CANADIAN</h5>
                <p className="card-text text-white">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ marginLeft: '10px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LONDON</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* -----------------------VIDEO EXPERIENCE--------------------------- */}
      <div className="video-containerr">
        <video width="640" height="360" controls>
          <source src="https://www.youtube.com/watch?v=ag7Vj3f7yMk" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
{/* -----------------------LETRAS CERTIFICATION------------------------------------- */}
      <div className='experience col d-flex flex-column'>
        <h1 className='mt-5 ms-3 text-start text-white'>WEGLON CERTIFICATION</h1>
        <h6 className='ms-4 text-start text-white'>EDUCATIONAL</h6>
        <h6 className='ms-4 text-start text-white'>PROGRAMS</h6>
      </div>
      <div class="cartas">
        <div class="row">
          <div class="col">
            <div className="card" style={{ marginLeft: '20px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card bg-transparent border-0" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">CANADIAN</h5>
                <p className="card-text text-white">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ marginLeft: '10px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LONDON</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* --------------------------VIDEO CERITIFICATION--------------------------------- */}
      <div className="video-containerr">
        <video width="640" height="360" controls>
          <source src="https://www.youtube.com/watch?v=ag7Vj3f7yMk" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

<div class="scrolll">
<div>
  <img src={avion} alt="" className='imgcarru'/>
  <img src={weglon1} alt="" className='imgcarru'/>
  <img src={weglon2} alt="" className='imgcarru'/>
  <img src={avion} alt="" className='imgcarru'/>
  <img src={weglon1} alt="" className='imgcarru'/>
  <img src={weglon2} alt="" className='imgcarru'/>
  <img src={avion} alt="" className='imgcarru'/>
  <img src={weglon1} alt="" className='imgcarru'/>
  <img src={weglon2} alt="" className='imgcarru'/>
  
</div>
</div>
<Compo2 />






    </div>
  );
}

export default App;


