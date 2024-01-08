import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './styles.scss';
import { dataHome } from '../../assets/datas/dataHome.js';
import { UpOutlined, UserOutlined } from '@ant-design/icons';
import { Collapse, Avatar } from 'antd';
import Tag from '../../components/Tag';
import StarRating from '../../components/StarRating'; // Renommez le composant StarFilled en StarRating
import CarouselItem from '../../components/Carousel';


export default function PropertyPage() {
  const { id } = useParams();
  const listHome = dataHome;

  const property = listHome.find((item) => item.identifiant === id);

  if (!property) {
    console.log('Property not found');
    return <Navigate to="/Property-not-found" />; // Retournez quelque chose de significatif, par exemple, null
  }

  return (
    <main className='main-property'>
      <CarouselItem photos={property['des photos']} />

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
            <Avatar  icon={property.hôte.photo ? <img src={property.hôte.photo} alt="avatar" /> : <UserOutlined />} />
          </div>
          <StarRating notes={property.note} className='property-star-rating' />
        </div>

      </div>
      <div className='property-collapse'>
        <Collapse
          expandIconPosition='end'
          expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? 180 : 0} />}
          items={[
            {
              key: '1',
              label: 'Description',
              children: <p>{property.description}</p>,
            },
            {
              key: '2',
              label: 'Équipements',
              children: (
                <ul>
                  {property['équipements'].map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>

    </main>
  );
}
