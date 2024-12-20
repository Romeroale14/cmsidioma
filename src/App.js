import { useEffect, useState, useCallback } from 'react'; // Importación de hooks de React: useEffect, useState, y useCallback
import './App.css'; // Importa el archivo CSS de la aplicación
import useContentful from './useContentful'; // Importa el hook personalizado para interactuar con Contentful
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap
import ReactPlayer from 'react-player'; // Importa el componente ReactPlayer para mostrar videos
import { ClipLoader } from 'react-spinners'; // Importa el spinner de react-spinners
import espanol from './assets/espana.png'; // Importa una imagen (España) para el navbar

function App() {
  const [authors, setAuthors] = useState([]); // Estado para almacenar los autores obtenidos
  const { getAuthors } = useContentful(); // Obtiene la función getAuthors desde el hook useContentful
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar los errores

  // Usa useCallback para memorizar la función getAuthors y evitar que se redefine en cada render
  const memoizedGetAuthors = useCallback(getAuthors, [getAuthors]);

  useEffect(() => {
    const fetchData = async () => { // Función para obtener los datos de los autores
      try {
        setLoading(true); // Activa el estado de carga
        const response = await memoizedGetAuthors(); // Llama a la función memoizada
        if (response) { // Si la respuesta es válida, actualiza el estado de autores
          setAuthors(response || []);
        } else { // Si no hay respuesta, establece una lista vacía
          setAuthors([]);
        }
      } catch (err) { // Si hay un error en la solicitud, maneja el error
        setError('Error al cargar los autores');
      } finally {
        setLoading(false); // Desactiva el estado de carga al finalizar
      }
    };

    if (authors.length === 0) { // Solo ejecuta fetchData si no hay autores cargados
      fetchData(); // Llama a fetchData
    }
  }, [memoizedGetAuthors, authors.length]); // Dependencias: memoizedGetAuthors y la longitud de authors

  const toggleMenu = () => { // Función para alternar el estado del menú
    setMenuOpen(!menuOpen);
  };

  // Si los datos aún están cargando, muestra el spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <ClipLoader color="#007bff" loading={loading} size={75} />
      </div>
    );
  }

  // Si hay un error, muestra el mensaje de error
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: authors.length > 0 ? `url(${authors[0].bodyy})` : 'none', // Establece la imagen de fondo si hay autores
        backgroundSize: 'cover', // Asegura que la imagen de fondo cubra toda el área
        backgroundPosition: 'center', // Centra la imagen de fondo
        minHeight: '100vh', // Hace que el fondo cubra toda la altura de la pantalla
      }}
    >
      <header className="header">
        <div>
          {authors.length > 0 ? (
            authors.map((author, index) => ( // Si hay autores, mapea y muestra el logo
              <a id="mi-enlace2" href="/" className="logo2" key={index}>
                <img src={author.logoPa} alt="logo" />
              </a>
            ))
          ) : null}
        </div>

        {/* Navbar */}
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
            {authors.length > 0 ? (
              authors.map((author, index) => ( // Si hay autores, mapea y muestra los elementos del menú
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
              ))
            ) : null}
          </div>
        </nav>
      </header>

      <br />
      <br />
      <br />
      <br />
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
            authors.map((author, index) => ( // Si hay autores, muestra el carrusel
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
    </div>
  );
}

export default App; // Exporta el componente App para usarlo en otras partes de la aplicación
