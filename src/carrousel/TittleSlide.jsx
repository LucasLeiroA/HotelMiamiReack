import "./tittle.css"
import {useEffect,useRef} from 'react'


function TittleSlide() {

        const customRef = useRef();


        const mouseMove = (e) => {
            const { clientX, clientY } = e
       
            const width = customRef.current.clientWidth;
            const height = customRef.current.clientHeight;

            const yRotation = ((clientX - width / 2) / width) * 20;
            const xRotation = ((clientY - height / 2) / height) * 20;


            const string = `
            perspective(500px)
            scale(1.1)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            `;
            
            customRef.current.style.transform = string;

          
  
        
        }
   
            // const mouseOut = () => {
            //     customRef.current.style.transform = `
            //     perspective(500px)
            //     scale(1)
            //     rotateX(0)
            //     rotateY(0)
            //     `;
                

            // }

                // cdigo para desabiliar el texto flotando agrengando la funcion mouseOut
    return(
       
    <>
          <div id="tittle-sl"  ref={customRef} onMouseMove={mouseMove} >
                 <h3>HOTEL MIAMI</h3>
                 <h2>¡Tucumán te espera!</h2>
           </div>
          
    </>

    )

}




export default TittleSlide;