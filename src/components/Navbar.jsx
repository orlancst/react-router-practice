import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'>Mi Logo</Link>
        <ul className='menu'>
          
            <li>
              <Link to="/" className='menu-link'>Inicio</Link></li>
            <li><Link to="/nosotros" className='menu-link'>Nosotros</Link></li>
            <li><Link to="/productos" className='menu-link'>Productos</Link></li>
            <li><Link to="/productos/medias" className='menu-link'>Medias</Link></li>
            <li><Link to="/productos/pantalones" className='menu-link'>Pantalones</Link></li>
            <li><Link to="/productos/remeras" className='menu-link'>Remeras</Link></li>
            <li><Link to="/productos/buzos" className='menu-link'>Buzos</Link></li>
            <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar