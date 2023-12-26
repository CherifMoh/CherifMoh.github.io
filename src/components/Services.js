import React from 'react';
import webDev from "../asists/web dev.svg";
import {ServicesData} from "../data/Services-data";



export default function Services() {
  
  const cartElemnt = ServicesData.map((Service)=>{
    return(
      <div className='service-cart'>
          <img className='service-img' src={Service.img}></img>
          <h4 className='service-title'>{Service.title}</h4>
          <p className='service-text'>{Service.text}</p>
      </div>
    )
  })

  return(
    <section id='Services' className='Services-section'>
      <header className='Services-header'>
        <h2 className='Services-header-tile'>SERVICE OFFERS</h2>
        <p className='Services-header-text'>
          Is give may shall likeness made yielding spirit a itself togeth created after sea
          <br />is in beast beginning signs open god you're gathering ithe
        </p>
      </header>
      <div className='carts-container'>{cartElemnt}</div>
    </section>
  )
}