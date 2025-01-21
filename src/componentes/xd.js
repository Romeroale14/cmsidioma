import React from 'react';
import './xd.css'
import avion from '././../assets/avion.png';
import video from './../assets/video9.mp4';
import weglon1 from '../assets/weglon anterior.png';
import weglon2 from '../assets/weglon.png';
import ban1 from '../assets/ban1.jpg';
import ban2 from '../assets/ban2.jpg';
import face from '../assets/redes/facebook_4494464.png';
import insta from '../assets/redes/instagram_4494468.png';
import tik from '../assets/redes/tiktok_3116491.png';
import you from '../assets/redes/video_6932560.png';
import tel from '../assets/redes/llamada-telefonica.png';
import msg from '../assets/redes/correo.png';
const ComponentName = () => {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video"><source src={video} type="video/mp4" /></video>

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
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card bg-transparent border-0 mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">CANADIAN</h5>
                <p className="card-text text-white">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '10px', width: '17rem' }}>
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
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card bg-transparent border-0 mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">CANADIAN</h5>
                <p className="card-text text-white">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '10px', width: '17rem' }}>
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

      <div class="scrolll ">
        <div className='mb-5'>
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />

        </div>
      </div>
      {/* <Compo2 /> */}
      {/* ------------------------PARTE 1 DEL FOOTER----------------------------- */}
      <div class="container mt-5 mb-5 ">
        <div class="row">
          <div class="bg-dark col-4 text-white d-flex align-items-center">
            <a href="">
              <img src={weglon2} alt="LOGO" className="logo2 me-2 mt-3" />
            </a>
            <h4 class="letras mt-3 ms-3">WEGLON</h4>
          </div>
          <div class="bg-dark col-4 text-white d-flex align-items-center">
            <h4 class="letras mt-3 ">UBICACION</h4>
          </div>
          <div class="bg-dark col-4 text-white d-flex align-items-center">
            <h6 class="letras mt-3">FOLLOW</h6>
          </div>
        </div>
        {/* ------------------------PARTE 2 DEL FOOTER----------------------------- */}
        <div class="row">
          <div class="bg-dark col-4 text-white d-flex align-items-center">
            <p className='letras  mt-5'>En WEGLON contamos con un equipo profesional y capacitado para hacer de tu viaje
              y de tu proceso de certificación una experiencia inolvidable.
              Contamos con un equipo de asesores expertos en educación internacional.
              Estamos comprometidos con la formación de líderes a nivel mundial para el desarrollo
              de nuestro país, introduciendo la cultura de otros países, fomentando el liderazgo
              y el trabajo en equipo mediante una perspectiva global.</p>
          </div>
          <div class="bg-dark col-4 text-white d-flex ">
            <h4 class="letras mt-5">San Gaspar 20B <br />
              Fraccionamiento Pedregal de las Fuentes <br />
              Jiutepec Morelos <br />
              C.P. 62554, México</h4>
          </div>
          <div class="col-4 bg-dark text-white d-flex flex-wrap justify-content-around">
            <div class="col ">
              <a href=""><img src={face} alt="LOGO" className="logo5 mt-3" /></a>
            </div>
            <div class="col ">
              <a href=""><img src={insta} alt="LOGO" className="logo5 mt-3 " /></a>
            </div>
            <div class="col ">
              <a href=""><img src={tik} alt="LOGO" className="logo5 mt-3 " /></a>
            </div>
            <div class="col ">
              <a href=""><img src={you} alt="LOGO" className="logo5 mt-3" /></a>
            </div>
          </div>

        </div>
        {/* ------------------------PARTE 3 DEL FOOTER----------------------------- */}
        <div class="row">
          <div class="bg-dark text-white d-flex flex-wrap col-4">
            <h6 class="letras mt-3 ms-0 col-12 col-md-6 text-center text-md-start">CONDICIONES DE USO</h6>
            <h6 class="letras mt-3 ms-0 col-12 col-md-6 text-center text-md-start">DECLARACIONES DE PRIVACIDAD</h6>
          </div>

          <div class="bg-dark col-4 text-white d-flex flex-column ">
            <h6 class="letras mt-3 ms-0 ">CONTAC</h6>
            <div class="mt-2 mb-5">
              <a href=""><img src={tel} alt="LOGO" className="logo5" /></a> <br />
              <a href=""><img src={msg} alt="LOGO" className="logo5 mt-2" /></a>
            </div>
          </div>

          <div class="bg-dark col-4 text-white d-flex align-items-center"></div>
        </div>

      </div>



    </div>
  );
};

export default ComponentName;
