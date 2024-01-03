import React from 'react'
import HomeList from '../../components/HomeList';
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/homeBanner.jpeg'
import './styles.scss'



export default function Home() {


  return (
    <main >
      <Banner url={ImgBanner} title="Chez vous, partout et ailleurs" />
      <HomeList />
    </main>
  );
}
