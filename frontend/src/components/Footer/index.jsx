import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import './styles.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <Logo className='footer-logo'/>
      <p className='footer-text'>K© 2020 Kasa. All rights reserved  </p>
    </footer>
  );
}
