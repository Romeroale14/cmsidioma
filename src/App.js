import React, { useState, useEffect } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video.mp4';
import fondo1 from './assets/parte1.png';
import fondo2 from './assets/parte2.png';
import letra1 from './assets/letra1.png';
import letra2 from './assets/letra2.png';
import alemania3 from './assets/alemania.png'
import españa from './assets/espana.png'

function App() {
  // Estado para manejar la lista de autores
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [currentSlide, setCurrentSlide] = useState(0);



  // Función para avanzar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 6); // Asegura que no se salga del rango
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 6) % 6); // Permite retroceder sin problemas
  };

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
    <div>
      {/* -----------------------------------------ENCABEZADO---------------------------------------------------------------------------- */}
      <div className="video-container">
        {/* Video de fondo */}
        <video autoPlay muted loop className="fillWidth visible-lg">
          <source src={video} type="video/mp4;" />
        </video>

        {/* Imágenes superpuestas */}
        <img src={fondo1} alt="" className="fondo1" />
        <img src={letra1} alt="" className="fondo1" />
        <img src={fondo2} alt="" className="fondo1" />
        <img src={letra2} alt="" className="fondo1" />

        {/* Botón de acción */}
        {/* <button type="button" className="btn btn-primary">See more &#8594;</button> */}

        {/* Menú hamburguesa */}
        <button className="hamburger-menu" id="hamburger-btn" >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      {/* ---------------------------------------------TEXTO CARRUSEL 1-------------------------------------------------------------- */}
      <div className="certifi ms-5">
        <div className="row">
          <div className="col-12 col-md-6 mt-3 text-start">
            <h1 className="fs-1">CERTIFICATION AND COURSES</h1>
          </div>

          <div className="col-6 col-md-3 mt-3 fs-4">
            <h6 className="fs-4 custom-border-bottom">ALL CERTIFICATIONS</h6>
          </div>

          <div className="col-6 col-md-3 mt-3">
            <h6 className="fs-4 custom-border-bottom2">ALL COURSES</h6>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- CARRUSEL 1----------------------------------------------------------------------- */}
      <div className="slider-container">
        {authors.length > 0 &&
          authors.map((author, index) => (
            <div className="slider"
              style={{
                transform: `translateX(-${currentSlide * 40}%)`, // Mueve 100% por diapositiva
                transition: 'transform 0.5s ease', // Suaviza la transición
              }}
            >



              {/* Diapositiva 1 */}
              <div className="slide">
                <img
                  src={author.ItaliaCarr1}
                  alt="Italian"
                />
                <div className="slide-content">
                  <h2>ITALIAN</h2>
                  <p>Study Italian and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>

              {/* Diapositiva 2 */}
              <div className="slide">
                <img
                  src={author.chinaCarr1}
                  alt="Chinese"
                />
                <div className="slide-content">
                  <h2>CHINESE</h2>
                  <p>Study Chinese and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>

              {/* Diapositiva 3 */}
              <div className="slide">
                <img
                  src={author.espanolCarr1}
                  alt="Español"
                />
                <div className="slide-content">
                  <h2>SPANISH</h2>
                  <p>Study Spanish and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>
              {/* Diapositiva 4 */}
              <div className="slide">
                <img
                  src={author.francesCarr1}
                  alt="Frances"
                />
                <div className="slide-content">
                  <h2>FRENCH</h2>
                  <p>Study French and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>
              {/* Diapositiva 4 */}
              <div className="slide">
                <img
                  src={author.alemanCarr1}
                  alt="Aleman"
                />
                <div className="slide-content">
                  <h2>GERMAN</h2>
                  <p>Study German and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>
              {/* Diapositiva 5 */}
              <div className="slide">
                <img
                  src={author.inglesCarr1}
                  alt="Ingles"
                />
                <div className="slide-content">
                  <h2>English</h2>
                  <p>Study English and get certified!</p>
                  <p>Open doors to new opportunities</p>
                  <button className="btn">Get started today! &#8594;</button>
                </div>
              </div>
            </div>
          ))}


        <div className="slider-controlss mt-5 ">
          <button className="prev-slide" onClick={prevSlide}>
            &lt;
          </button>
          <span className="slide-number">{currentSlide + 1}/6</span>
          <button className="next-slide" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>

      {/* --------------------------------------C A R R U S E L  2------------------------------------------------------------------ */}
      <div className="contenedorCarru2 row">
        <div class="col-7 ">
          <h1 className="custom-border-bottom3 text-center">TYPE OF CERTIFICATIONS</h1>
          <h3 className='letras mt-5 ml-4'>Language certifications guarantee <br />your level of understanding and expression
            <br />essential for studies, work, or migration.
            <br />
            <br />

            <br />
            From TOEFL and IELTS (English) to DELE (Spanish) <br />
            or DELF (French), they are internationally <br />recognized and open up new opportunities for you.
          </h3>
          <button className='boton btn ms-2'>KNOW MORE &#8594;</button>
        </div>

        <div className=" col-5">
        {authors.length > 0 &&
            authors.map((author, index) => (
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

            <div class="carousel-inner">
              
              <div class="carousel-item active d-flex justify-content-center align-items-center">
                <img src={author.cert1} alt="" className="img-fluid"/>
              </div>
              <div class="carousel-item  d-flex justify-content-center align-items-center ">
                <img src={alemania3} alt="" className="img-fluid"/>
              </div>
              <div class="carousel-item  d-flex justify-content-center align-items-center">
                <img src={españa} alt="" className="img-fluid"/>
              </div>
            </div>



            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
          ))}
        </div>

      </div>

      <div className='sec4 '>
        <h5 class="text-center">COURSES</h5>
        <h1 class="text-center" style={{color: '#007FD0'}}>←GERMAN &#8594;</h1>
        <p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur placeat recusandae iusto corrupti velit impedit ipsum. Accusamus itaque corrupti, libero magni perferendis similique dolores aperiam voluptatum cum qui eius!</p>
          
      </div>
      <div>
        
      </div>
      


    </div>
  );
}

export default App;
