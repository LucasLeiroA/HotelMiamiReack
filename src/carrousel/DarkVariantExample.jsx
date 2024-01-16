import Carousel from 'react-bootstrap/Carousel';
import "./DarkVariantExample.css"

function DarkVariantExample() {
  return (
    <Carousel className='conteiner-carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="img-carousel"
          src="/image/habitacion2.jpg"
          alt="First slide"          
        />
        <Carousel.Caption>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="img-carousel"
          src="/image/habitacionDoble.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carousel"
          src="/image/re3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;