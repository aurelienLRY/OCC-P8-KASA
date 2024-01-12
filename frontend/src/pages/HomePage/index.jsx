import React from 'react'
import PropertiesList from '../../components/PropertiesList';
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/homeBanner.jpeg'
import './styles.scss'




/**
 * This function returns the home page of the website.
 * @return {JSX.Element} The home page of the website.
 */
export default function HomePage() {

  return (
    <main className='main-home'>
      <Banner url={ImgBanner} title="Chez vous, partout et ailleurs" />
      <section className="propertylist">
        <PropertiesList /> 
      </section>
    </main>
  );
}
