import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { useAnimatePage } from '../../utils/context/AnimateContext';
 
import {motion} from 'framer-motion'
export default function NoFoundPage() { 
  const animateData = useAnimatePage()
  return (
    <motion.main className='main-nofound'
    intial={animateData.intial}
    animate={animateData.animate}
    exit={animateData.exit}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' >Retourner sur la page d’accueil</Link>
    </motion.main>
  )
}
