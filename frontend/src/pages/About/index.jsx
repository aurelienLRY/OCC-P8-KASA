import React from 'react';
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/aboutBanner.jpeg';
import './styles.scss';
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import {collapseData} from './aboutData.js'


 

export default function AboutPage() {
  return (
    <main className='main-about'>
      <Banner url={ImgBanner} />
      <Collapse
        expandIconPosition='end'
        expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? 180 : 0} />}
        items={collapseData}
      />
    </main>
  );
}
