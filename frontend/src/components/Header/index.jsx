import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'
import {ReactComponent as Logo} from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <Logo className='header-logo'/>
      <nav className='header-nav'>
        <NavLink to="/" className='header-nav-link'>Accueil</NavLink> 
        <NavLink to="/about" className='header-nav-link'>A propos</NavLink>
      </nav>

    </header>



  )
}
