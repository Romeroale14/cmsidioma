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
         <div class=" video-container">
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

        

      </div> 
     

      



    </div>
  );
}

export default App;