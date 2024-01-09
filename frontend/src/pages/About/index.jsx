import React from 'react';
//components
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/aboutBanner.jpeg';
import { useAnimatePage } from '../../utils/context/AnimateContext';
//components tiers
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import {motion} from 'framer-motion'
//Data
import {collapseData} from './aboutData.js'
//styles
import './styles.scss';
 

export default function AboutPage() {
  const animateData = useAnimatePage()
  return (
    <motion.main className='main-about'
    intial={animateData.intial}
    animate={animateData.animate}
    exit={animateData.exit}>
      <Banner url={ImgBanner} />
      <Collapse
        expandIconPosition='end'
        expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? 180 : 0} />}
        items={collapseData}
      />
    </motion.main>
  );
}
