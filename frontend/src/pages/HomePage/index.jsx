import React from 'react'
import PropertiesList from '../../components/PropertiesList';
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/homeBanner.jpeg'
import './styles.scss'
import { motion } from 'framer-motion'

import { useAnimatePage } from '../../utils/context/AnimateContext';



/**
 * This function returns the home page of the website.
 * @return {JSX.Element} The home page of the website.
 */
export default function HomePage() {
  const animateData = useAnimatePage()
  return (
    <motion.main className='main-home'
    intial={animateData.intial}
    animate={animateData.animate}
    exit={animateData.exit}
    >
      <Banner url={ImgBanner} title="Chez vous, partout et ailleurs" />
      <section className="propertylist">
        <PropertiesList /> 
      </section>
     
    </motion.main>
  );
}
