import React from 'react'
import { dataHome } from '../../assets/datas/dataHome.js'
import './styles.scss'

export default function homeList() {
  const listHome = dataHome;

  console.log(listHome);
//TODO: faire l'image et l’événement au click
  return (
    <section className="home-list">
      {listHome.map((item, index) => (
        <article key={item.identifiant} id={item.identifiant} className='cardHome'>
          {/* <img src={item.cover} alt={item.title} className='card-img' /> */}
          <h2 className='card-title'>{item.title}</h2>
        </article>

      ))}


    </section>
  )
}
