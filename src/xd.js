import { useEffect, useState } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import espanol from './assets/espana.png';
import read from './assets/read.png';
import speak from './assets/speak.png';
import under from './assets/understand.png';
import write from './assets/write.png';

import ReactPlayer from 'react-player';

function App() {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAuthors();
        setAuthors(response || []);
      } catch (err) {
        setError('Error al cargar los autores');
      } finally {
        setLoading(false);
      }
    };

    if (authors.length === 0) {
      fetchData();
    }
  }, [getAuthors, authors.length]);

  useEffect(() => {
    // Aplicar el fondo dinámico
    if (authors.length > 0) {
      document.body.style.backgroundImage = `url(${authors[0].bodyy})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
    return () => {
      // Limpiar el fondo al desmontar el componente
      document.body.style.backgroundImage = '';
    };
  }, [authors]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <ClipLoader color="#007bff" loading={loading} size={75} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div>
      <header className="header">
        <div>
          {authors.length > 0 &&
            authors.map((author, index) => (
              <a id="mi-enlace2" href="/" className="logo2" key={index}>
                <img src={author.logoPa} alt="logo" />
              </a>
            ))}
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            {authors.length > 0 &&
              authors.map((author, index) => (
                <ul className="navbar-nav" key={index}>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={author.ingles} alt="Inglés" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={espanol} alt="Español" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={author.frances} alt="Francés" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={author.italiano} alt="Italiano" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={author.china} alt="Chino" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="mi-enlace" href="/">
                      <img src={author.aleman} alt="Alemán" />
                    </a>
                  </li>
                </ul>
              ))}
          </div>
        </nav>
      </header>
     

      <div className="intro">
        <h1>About</h1>
        <h5>
          At WorldWide Certification, we are dedicated to providing language certification programs that meet the highest
          international standards.
        </h5>

        <h5>
          Our goal is to offer our users an official validation of their language skills facilitating their access to new
          academic, professional, and cultural opportunities in a globalized context.
        </h5>

        <div className='intro'>
          <h1>What do you learn?</h1>
          <ul>
            <li className="segundo">
              <img src={read} style={{ width: '80px', height: '70px' }} />
            </li>
            <li className="segundo">
              <img src={under} style={{ width: '80px', height: '70px' }} />
            </li>
            <li className="segundo">
              <img src={speak} style={{ width: '80px', height: '70px' }} />
            </li>
            <li className="segundo">
              <img src={write} style={{ width: '80px', height: '70px' }} />
            </li>
          </ul>

        </div>



      </div>

      <div>
        {authors.length > 0 ? (
          authors.map((author, index) => ( // Si hay autores, muestra el ReactPlayer con el video
            <ReactPlayer
              key={index}
              url={author.videoRep}
              width="820"
              height="340"
              controls={false}
              playing
              muted // Silencia el video al inicio
              loop // Hace que el video se repita en bucle
              id="myVideoContainer"
            />
          ))
        ) : null}
      </div>





      {/* CARRUSEL */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div>
          {authors.length > 0 ? (
            authors.map((author, index) => (
              <div className="carousel-inner" key={index}>
                <div className="carousel-item active">
                  <img src={author.avatar} className="d-block w-100" alt="First Slide" />
                </div>
                <div className="carousel-item">
                  <img src={author.carrusel2} className="d-block w-100" alt="Second Slide" />
                </div>
                <div className="carousel-item">
                  <img src={author.carrusel1} className="d-block w-100" alt="Third Slide" />
                </div>
              </div>
            ))
          ) : null}
        </div>

        {/* BOTONES CARRUSEL */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          data-bs-ride="carousel"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




       {/* <div class=" video-container">
        <video autoPlay muted loop class="fillWidth visible-lg" >
          <source src={video} type="video/mp4; " />
        </video>



        <img src={alemania} alt="" className='fondo1' />
        <img src={letra1} alt="" className='fondo1' />
        <img src={alemania2} alt="" className='fondo1' />
        <img src={letra2} alt="" className='fondo1' />
        <button type="button" class="btn btn-primary">See more &#8594; </button>


        <button class="hamburger-menu" id="hamburger-btn" onclick="toggleMenu()">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-search" viewBox="0 0 16 16" className='lupa'>
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>

      </div> 
      */}
    </div>
  );
}

export default App;
