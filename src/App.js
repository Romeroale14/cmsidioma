import React, { useState, useEffect } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video.mp4';
import alemania from './assets/parte1.png';
import alemania2 from './assets/parte2.png';
import letra1 from './assets/letra1.png';
import letra2 from './assets/letra2.png';


function App() {
  // Estado para manejar la lista de autores
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // Función para avanzar a la siguiente diapositiva
  const nextSlide2 = () => {
    const totalSlides2 = document.querySelectorAll('.slide2').length;
    setCurrentSlide2((prevSlide2) => (prevSlide2 + 1) % totalSlides2);
  };
  // Función para retroceder a la diapositiva anterior
  const prevSlide2 = () => {
    const totalSlides2 = document.querySelectorAll('.slide2').length;
    setCurrentSlide2((prevSlide2) => (prevSlide2 - 1 + totalSlides2) % totalSlides2);
  };



  // Función para avanzar a la siguiente diapositiva
  const nextSlide = () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };
  // Función para retroceder a la diapositiva anterior
  const prevSlide = () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
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
        <img src={alemania} alt="" className="fondo1" />
        <img src={letra1} alt="" className="fondo1" />
        <img src={alemania2} alt="" className="fondo1" />
        <img src={letra2} alt="" className="fondo1" />

        {/* Botón de acción */}
        <button type="button" className="btn btn-primary">See more &#8594;</button>

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
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentSlide * 40}%)`,
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Diapositiva 1 */}
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ybc5gsqiTQijYdo3mniLFmWylzRG2asEbQ&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3LvGShMeTVaHF04sdek9VZXG0C75PuOUuA&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3LvGShMeTVaHF04sdek9VZXG0C75PuOUuA&s"
              alt="Japanese"
            />
            <div className="slide-content">
              <h2>JAPANESE</h2>
              <p>Study Japanese and get certified!</p>
              <p>Open doors to new opportunities</p>
              <button className="btn">Get started today! &#8594;</button>
            </div>
          </div>

        </div>
      </div>

{/* ----------------------------------------CONTROLES CARRUSEL 1------------------------------------------------------------- */}
      <div className="slider-controlss mt-5 ">
        <button className="prev-slide" onClick={prevSlide}>
          &lt;
        </button>
        <span className="slide-number">{currentSlide + 1}/3</span>
        <button className="next-slide" onClick={nextSlide}>
          &gt;
        </button>
      </div>

{/* --------------------------------------C A R R U S E L  2------------------------------------------------------------------ */}
      <div className="contenedor2 row mt-5">
        <div class="col-7 ">
          <h1 className="custom-border-bottom3 text-center">TYPE OF CERTIFICATIONS</h1>
          <h3 className='letras mt-5'>Language certifications guarantee <br />your level of understanding and expression
            <br />essential for studies, work, or migration.
            <br />
            <br />

            <br />
            From TOEFL and IELTS (English) to DELE (Spanish) <br />
            or DELF (French), they are internationally <br />recognized and open up new opportunities for you.
          </h3>
          <button className='boton btn'>KNOW MORE &#8594;</button>
        </div>

        <div className=" col-5">
          <div className="slider-container2">
            <div
              className="slider2"
              style={{
                transform: `translateX(-${currentSlide2 * 40}%)`,
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Diapositiva 1 */}
              <div className="slide2">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBSviL6GQfVAnWX2X7TB0qsraTv3wyRWZDau7rEMX_DBlBjpRCXhk1ShVKz9MRiLY0PA7eJ6nQV_q00rs_yQjZ1w"
                  alt="Italian"
                />
              </div>

              {/* Diapositiva 2 */}
              <div className="slide2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiKalyYh8W8AwrQbROTn4BzQBlHIFcWMAx-WnyoSnxLf39R8mLrHqYub7GZtcAUJAoqfPwINSHBPu-bn42tE_eQ"
                  alt="Chinese"
                />
              </div>

              {/* Diapositiva 3 */}
              <div className="slide2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/My_pug.jpg/800px-My_pug.jpg"
                  alt="Japanese"
                />
              </div>
            </div>
          </div>
        </div>


        <div>
        {/* Controles del carrusel */}
          <div className="slider-controlss mt-5 ">
            <button className="prev-slide" onClick={prevSlide2}>
              &lt;
            </button>
            <span className="slide-number">{currentSlide2 + 1}/3</span>
            <button className="next-slide" onClick={nextSlide2}>
              &gt;
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
