import React from 'react';
//components
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/aboutBanner.jpeg';
import CustomCollapse from '../../components/CustomCollapse';
//Data
import { collapseData } from './aboutData.js'
//styles
import './styles.scss';

export default function AboutPage() {

  return (
    <main className='main-about'>
      <Banner url={ImgBanner} />
      <div className="about-container">
        {collapseData.map((item, index) => (
          <CustomCollapse title={item.label} key={index} >
            {item.children}
          </CustomCollapse>
        )
        )}
      </div>
    </main>
  );
}
