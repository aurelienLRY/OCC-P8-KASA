import React from 'react'
import Banner from '../../components/Banner'
import ImgBanner from '../../assets/img/aboutBanner.jpeg'

export default function AboutPage() {
  return (
    <main>
      <Banner url={ImgBanner}  />
      <div>A propos</div>
    </main>
  )
}
