import React, { useState, useEffect } from 'react';
import './App.css';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video.mp4';
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
    <div className="plantilla">

<div class="video-container">
  
   	<video autoPlay muted loop class="fillWidth visible-lg" >
        <source src={video} type="video/mp4; "/>        
        Your browser does not support the video tag.
    </video>
    <h1>hola</h1>
    <div>
    {authors.length > 0 &&
            authors.map((author, index) => (
              <img src={authors.fondo1} alt=""/>
  ))}
    </div>
    
    <h2>hola2</h2>
</div>
     

    </div>
  );
}

export default App;