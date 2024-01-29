import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
function Nav() {


   function toggle() {
     const navMenu = document.querySelector(".listMenu-container");
     navMenu.classList.toggle("listMenu-container_visible");
  
     const iconMenu = document.querySelector(".font-menu");
     iconMenu.classList.toggle("font-menu_invisible");
  
     const iconClose = document.querySelector(".font-close");
     iconClose.classList.toggle("font-close_visible");
  
  
   }
   const [url, setUrl] = useState();
  
   function URlChange(){
     setUrl(location.href) ;
     
   }
 



  


  useEffect(() => {
    

    var menuLinks = document.querySelectorAll('.menu-container a[href^="#"]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const menuLink = document.querySelector(
            `.menu-container a[href="#${id}"]`
          );

          if (entry.isIntersecting) {
            document
              .querySelector(".menu-container a.selected")
              .classList.remove("selected");
            menuLink.classList.add("selected");
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    menuLinks.forEach((menuLink) => {
      const hash = menuLink.getAttribute("href");
      const target = document.querySelector(hash);
      if (target) {
        observer.observe(target);
      }
    });
    

  },[url]);
  
  window.addEventListener("scroll", () => {
   
    
    var heigt = document.getElementById("contact").clientHeight;
    
      

        var navtar = document.querySelector("nav");
        navtar.classList.toggle("stiky", window.scrollY >= heigt);
      
    // var logo = document.querySelector("imagen");
    // logo.src = "/image/logoHotel2024.png";
  });

  function cambioClase(){
    var navtar = document.querySelector("nav");
    navtar.classList.remove("stiky");
    window.location.href ="#home"
  }


function funciones(){
  toggle();
  URlChange();

}

  return (
    <>
      <nav>
        <div className="nav-tar-container" >
          
          
              <div className="listMenu-container">
                <h2 className="tittle-menu">Bienvenidos al Hotel Miami</h2>
                <ul className="menu-container">
                  <li>
                
                    <a href="#home" onClick={funciones} className="selected" >Home</a >
                  </li >
                  <li>
                    <a href="#contact" onClick={funciones}>
                      Contactanos
                    </a>
                  </li>
                  <li>
                    <a href="#rooms" onClick={funciones}>
                      Habitaciones
                    </a>
                  </li>
                  <li>
                    <a href="#turism" onClick={funciones}>
                      Turismo
                    </a>
                  </li>
                  <li>
                    <a href="#booking" onClick={funciones}>
                      Reservar
                    </a>
                  </li>
                </ul>
                <p className="paraf-text">
                  Hotel Miami 2023.Todos los derechos reservados.
                </p>
              </div>

            <div className="list-container">
            <div className="logo-container">
            {/* <li><a href="#home"><img className="imagen" src="/image/logoHotelBlanco2024.png" alt="" /></a></li> */}
            <Link to="/" onClick={cambioClase}><div className="logo-div"></div></Link>
            </div>

              <div className="butom-container">

                    <div className="contact-phone">
                      <i>
                        <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                      </i>
                      (0381) 4310265
                    </div>


                    <div className="iconToggle">
                      <li className="nav-item">
                        <button onClick={funciones} className="toogle-button">
                          MENÚ
                          <FontAwesomeIcon className="font-menu" icon={faBars} />
                          <FontAwesomeIcon className="font-close" icon={faXmark} />
                        </button>
                      </li>
                    </div>

                    <div className="reserv-container">
                      <button className="reserv-boton">
                        <a href="#booking">RESERVAR</a>
                      </button>
                    </div>
              </div>
              
            </div>

          
        </div>
      </nav>
    </>
  );
}

export default Nav;
