import "./habitaciones.css";
import { Link } from "react-router-dom";



function Habitaciones() {



    return (
        <section id="rooms" className="sectionInfo">
            <div className="habitaciones-info">
                <h1>Salones</h1>
                <h3>¡Sentite cómodo, sentite bien!</h3>
                <p>CONOCÉ NUESTRAS HABITACIONES</p>
            </div>
            <div className="container-rooms">
                <div className="container-doble">
                    <div className="doble-image">
                        <img src="/public/image/habitacion2.jpg" alt="" />
                    </div>
                    <div className="doble-dresciption">
                        <h1>Doble</h1>
                        <h4>Matrimonial/Twin</h4>
                        <Link className="btn-saberMas" to={`/habitaciones/doble`}>
                            SABER MAS
                        </Link>
                    </div>
                </div>

                <div className="container-doble">
                    <div className="doble-image">
                        <img src="/public/image/habitacion2.jpg" alt="" />
                    </div>
                    <div className="doble-dresciption">
                        <h1>Doble</h1>
                        <h4>Matrimonial/Twin</h4>
                        <Link className="btn-saberMas" to={`/habitaciones/depto`}>
                            SABER MAS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Habitaciones;
