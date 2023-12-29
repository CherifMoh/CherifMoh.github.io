import React from 'react';
import corse from '../asists/corse.svg';

export default function Portfolio() {

  return(
    <section id='Portfolio' className='Portfolio-section'>
        <h2 className='Portfolio-title'>
        QUALITY WORK<br />
        RECENTLY DONE PROJECT
        </h2>
        <div className='projects-container'>
          <a href='#' className='project-card-container'>
            <div className='project-card-img-container'>
              <img className='project-card-img' src='https://preview.colorlib.com/theme/satner/img/portfolio/p1.jpg' />
              <div className='overlay'>
              </div>
                <img className='overlay-img' src={corse} />
            </div>
            <p className='project-card-title'>MINIMAL DESIGN</p>
            <p className='project-card-text'>Animated, portfolio</p>
            
          </a>
          <a href='#' className='project-card-container'>
            <div className='project-card-img-container'>
              <img className='project-card-img' src='https://preview.colorlib.com/theme/satner/img/portfolio/p2.jpg' />
              <div className='overlay'>
              </div>
                <img className='overlay-img' src={corse} />
            </div>
            <p className='project-card-title'>MINIMAL DESIGN</p>
            <p className='project-card-text'>Animated, portfolio</p>
            
          </a>
        </div>
    </section>
  )
}