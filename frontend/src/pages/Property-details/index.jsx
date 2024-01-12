import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './styles.scss';
//data
import { propertiesData } from '../../assets/datas/dataHome.js';
//components tiers
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

// components
import Tag from '../../components/Tag';
import StarRating from '../../components/StarRating'; // Renommez le composant StarFilled en StarRating
import CustomCarousel from '../../components/CustomCarousel';
import CustomCollapse from '../../components/CustomCollapse';


export default function PropertyPage() {
  const { id } = useParams(); // use de react router dom pour récupérer les paramètres de l'url'

  const propertyList = propertiesData;
  const property = propertyList.find((item) => item.identifiant === id);


  // Si l'id est inexistant on redirige vers noFoundPAge
  if (!property) {
    console.log('Property not found');
    return <Navigate to="/Property-not-found" />;
  }

  return (
    <main className='main-property'>

      {/* carousel  */}
      <CustomCarousel photos={property['des photos']} />

      {/* contenu */}
      <div className='property-content'>
        <div className='property-header'>
          <h2 className='property-title'>{property.title}</h2>
          <p className='property-location'>{property.location}</p>
          <div className='property-tags'>
            {property['Mots clés'].map((item, key) => (
              <Tag key={key}>{item}</Tag>
            ))}
          </div>
        </div>
        <div className='property-avatar'>
          <div className='property-avatar-info'>
            <span>{property.hôte.name || property.hôte.nom}</span>
            <Avatar icon={property.hôte.photo ? <img src={property.hôte.photo} alt="avatar" /> : <UserOutlined />} />
          </div>
          <StarRating notes={property.note} className='property-star-rating' />
        </div>
      </div>

      {/* Collapse */}
      <div className='property-collapse'>

        <CustomCollapse title='Description'>
          <p>{property.description}</p>
        </CustomCollapse>
        
        <CustomCollapse title='Équipements'>
          <ul>
            {property['équipements'].map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </CustomCollapse>

      </div>

    </main>
  );
}
