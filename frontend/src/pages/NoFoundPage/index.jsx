import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'


export default function NoFoundPage() { 

  return (
    <main className='main-nofound'
    >
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' >Retourner sur la page d’accueil</Link>
    </main>
  )
}
