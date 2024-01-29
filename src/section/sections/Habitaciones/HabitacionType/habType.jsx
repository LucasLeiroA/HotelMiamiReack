import Carousel from 'react-bootstrap/Carousel';
import "./habType.css"
import { Link } from 'react-router-dom';
import SubNav from '../../../../Nav/SubNav/subNav';
import { useState,useEffect } from "react";
import 'ldrs/spiral'
import Footer from '../../../../footer/footer';

// Default values shown  





function HabType(props) {


  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
        setLoader(false)
    }, 1300);
  }, [])
  
                   
  let imagenes = props.imagenes;
  let data = props.data;

  function cambioClase(){
    var navtar = document.querySelector("nav");
    navtar.classList.remove("stiky");
  }
  
  return (
    <>
      {
        loader? // Default values shown  
        <div     className="loader">
          <l-spiral
              size="40"
              speed="0.9"
              color="black" 
            ></l-spiral>
        </div>
      : 
        <div>

        <SubNav/>
        <div className='d-flex flex-column '>
          <div className='big-titulo'>
          <h1>{data.titulo}</h1>
          </div>
          <div className='container-Hab d-flex' >
          <section className='carusel'>
            <Carousel className="conteiner-carouseles " data-bs-theme="dark" >
              <Carousel.Item>
                <img
                  className="img-carouseles"
                  src={imagenes.img1}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-carouseles"
                  src={imagenes.img2}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-carouseles"
                  src={imagenes.img3}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>
          <section className='habInfo'>
          <p>Contamos con 2 tipos de Habitaciones Dobles:</p>
          <p>1) MATRIMONIAL</p>
          <p>2) TWIN(camas individuales)</p>
          <p>Ambas vienen equipadas con:</p>
          <ul>
            <li>Aire Acondicionado</li>
            <li>Calefaccion</li>
            <li>TV Por Cable</li>
            <li>WIFI</li>
          </ul>
          <Link to="/#booking" onClick={cambioClase}>volver</Link>
          </section>    

          </div>
      
        </div>
        <Footer/>
        </div>


      }
    
    </>
  );
}

export default HabType;
