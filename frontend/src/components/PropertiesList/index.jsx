import React from 'react';
import { Link } from 'react-router-dom';
import { dataHome } from '../../assets/datas/dataHome.js';
import './styles.scss';

export default function PropertiesList() {
  const properties = dataHome;

  return (
    <>
      {properties.map((item) => (
        <Link to={`/property/${item.identifiant}`} key={item.identifiant} className='property-card'>
          <article className='property-card-content' style={{ backgroundImage: `url(${item.cover})` }}>
            <h2 className='property-card-title'>{item.title || item.titre}</h2>
          </article>
        </Link>
      ))}
      </>
      );
}

