import { useEffect, useState } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import espanol from './assets/espana.png';

function App() {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();
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

    <div className='cont'>


      <div class="m-4">

        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <div>
              {authors.length > 0 &&
                authors.map((author, index) => (
                  <a href="/" className="logo2" key={index}>
                    <img src={author.logoPa} alt="logo" />
                  </a>
                ))}
            </div>


            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link active  me-4">Ingles</a>
                <a href="#" class="nav-item nav-link active me-4">Frances</a>
                <a href="#" class="nav-item nav-link active me-4">Italiano</a>
                <a href="#" class="nav-item nav-link active me-4">Aleman</a>
                <a href="#" class="nav-item nav-link active me-4">Chino</a>
                <a href="#" class="nav-item nav-link active me-4">Español</a>
              </div>

            </div>
          </div>
        </nav>

        
      </div>
            



    </div>


  );
}
export default App;