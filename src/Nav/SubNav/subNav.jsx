import React from 'react'
import { Link } from 'react-router-dom';
import "./subNav.css"
function SubNav() {



  return (
    <nav className='subNav-container'>
        <div className='subNav-logo'>
        <Link to="/"><div className="logo-subNav"></div></Link>
        </div>
        <div className='subNav-volver'>
        <Link to="/"><button className='btn-subNav-volver'>Volver al Menú</button></Link>
        </div>


    </nav>
  )


}

export default SubNav;