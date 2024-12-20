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
    <div>

      <div className='navegador'>
        {authors.length > 0 &&
          authors.map((author, index) => (
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="#"><img src={author.aleman} className='navimg'  alt="Alemán" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><img src={author.china} className='navimg'   alt="Chino" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><img src={author.italiano} className='navimg'   alt="Italiano" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#"><img src={author.frances} className='navimg'   alt="Francés" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#"><img src={espanol} className='navimg'   alt="Español" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#"><img src={author.ingles} className='navimg'   alt="Ingles" /></a>
              </li>
            </ul>
          ))}
      </div>


    </div>



  );
}

export default App;
