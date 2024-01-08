import React from 'react';
import { Link } from 'react-router-dom';
import { dataHome } from '../../assets/datas/dataHome.js';
import './styles.scss';

export default function HomeList() {
  const listHome = dataHome;

  return (
    <section className="home-list">
      {listHome.map((item) => (
        <Link to={`/property/${item.identifiant}`} key={item.identifiant} className='cardHome'>
          <article className='cardHome-content' style={{ backgroundImage: `url(${item.cover})` }}>
            <h2 className='card-title'>{item.title || item.titre}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
}

