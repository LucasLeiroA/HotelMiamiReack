import DarkVariantExample from "../carrousel/DarkVariantExample";
import TittleSlide from "../carrousel/TittleSlide";
import "./Section.css";
import Contactanos from "./sections/Contactanos/contactanos";
import Habitaciones from "./sections/Habitaciones/habitaciones";
import Home from "./sections/Home/home";
import Reservar from "./sections/Reservar/reservar";
import Turismo from "./sections/Turismo/turismo";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/nav";
import Footer from "../footer/footer";


function Section() {
    return(
        <>
        <div className="container-section">     
                <Nav/>
                <Home/>
                <Contactanos/>
                <Habitaciones/>
                <Turismo/>
                <Reservar/>
                <Footer/>
        
        </div>
        </>
    )
}    


export default Section;