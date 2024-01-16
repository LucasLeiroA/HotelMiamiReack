import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone ,faBars ,faXmark} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

function Nav() {
  
  function toggle(){
      const navMenu=document.querySelector(".listMenu-container");
      navMenu.classList.toggle("listMenu-container_visible");

      const iconMenu=document.querySelector(".font-menu");
      iconMenu.classList.toggle("font-menu_invisible");
      
      const iconClose=document.querySelector(".font-close");
      iconClose.classList.toggle("font-close_visible");

  }



    window.addEventListener("scroll",()=>{
        
        var heigt = document.getElementById("contact").clientHeight;
           
        var navtar = document.querySelector("nav");
        navtar.classList.toggle("stiky" , window.scrollY > (heigt - 10))
      
    })




  return (
    <>
    <nav>
      <div className='nav-tar-container'>
          <div className='logo-container'>
            <li><a href="#home"><img src="/image/logoHotel.png" alt="" /></a></li>

          </div>
          <div className='separator-container'>

            <div className='contact-phone'>
                <i><FontAwesomeIcon className="phone-icon" icon={faPhone} /></i>
                (0381) 4310265
            </div>
            <div className='list-container'>
              <div className="listMenu-container">
                  <h2 className="tittle-menu">Bienvenidos al Hotel Miami</h2>
                  <ul className="menu-container">
                    <li><a href="#home" onClick={toggle}>HOME</a></li>
                    <li><a href="#contact" onClick={toggle}>CONTACT</a></li>
                    <li><a href="#rooms" onClick={toggle}>ROOMS</a></li>
                    <li><a href="#turism" onClick={toggle}>TURISM</a></li>
                    <li><a href="#booking" onClick={toggle}>BOOKING</a></li>
                  </ul>
                  <p className="paraf-text">Hotel Miami 2023.Todos los derechos reservados.</p>
              </div>
              <div className="iconToggle">
                  <li className="nav-item">
                      <button onClick={toggle} className="toogle-button">MENÚ<FontAwesomeIcon className="font-menu" icon={faBars} /> 
                      <FontAwesomeIcon className="font-close" icon={faXmark} /></button>
                     
                  </li>           
               </div>
            </div>
            <div  className='reserv-container'>
                  <button className="reserv-boton"><a href="#booking">RESERVAR</a></button>
            </div>

          </div>
          
      </div>


    </nav>

     </>
 
  )
}

export default Nav
