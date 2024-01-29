import Nav from "../Nav/nav";
import Footer from "../footer/footer";
import Section from "../section/Section";
import "./home.css";
import { Route , Routes } from "react-router-dom";
import HabType from "../section/sections/Habitaciones/HabitacionType/habType";

import { useState } from "react";

import { dotWave } from 'ldrs'


function App() {

  let imagenesHab={
    img1:"/public/image/habitacion2.jpg",
    img2:"/public/image/habitacionDoble.jpeg",
    img3:"/public/image/re3.jpeg"
}

  let dataHab= {
      titulo:"Habitacion Doble",
      precio:"12.500",
      descripcion:"Habitacion para 2 personas cuenta con wifi. smart Tv y demas"
  }

  let dataDepto= {
    titulo:"Departamento Doble",
    precio:"12.500",
    descripcion:"Habitacion para 2 personas cuenta con wifi. smart Tv y demas"
}

  const [loading, setLoading] = useState(true)


  return (
    <>
    <div className="app-container">
   
      
          
          <Routes>

            <Route path="/" element={<Section/>}/>
            <Route path="/habitaciones/doble" element={ <HabType data={dataHab} imagenes={imagenesHab}/>} />
            <Route path="/habitaciones/depto" element={ <HabType  data={dataDepto} imagenes={imagenesHab}/>}/>
          </Routes>

                
         
   

    </div>
          <script src='../efectoHoverTittle.js'></script>

    </>
  );
}

export default App;
