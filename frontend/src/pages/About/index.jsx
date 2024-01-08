import React from 'react';
import Banner from '../../components/Banner';
import ImgBanner from '../../assets/img/aboutBanner.jpeg';
import './styles.scss';
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';


 

export default function AboutPage() {
  return (
    <main className='main-about'>
      <Banner url={ImgBanner} />

      {/* Utilisation d'un seul Collapse avec plusieurs Panels générés dynamiquement */}
      <Collapse
        expandIconPosition='end'
        expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? 180 : 0} />}
        items={[
          
          {
            key: '1',
            label: 'Fiabilité',
            children: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
          },
          {
            key: '2',
            label: 'Respect',
            children: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
          },
          {
            key: '3',
            label: 'Service',
            children: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
          },
          {
            key: '4',
            label: 'Sécurité',
            children: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
          }
      
          

        ]}


      />
       
    </main>
  );
}
