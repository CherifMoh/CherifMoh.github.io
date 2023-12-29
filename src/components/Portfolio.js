import React from 'react';
import corse from '../asists/corse.svg';
import {ProjectsData} from '../data/projects-data.js';

export default function Portfolio() {

  const projectsElemnt = ProjectsData.map(project=>{
    return(
      <a href={project.link} className='project-card-container'>
        <div className='project-card-img-container'>
          <img className='project-card-img' src={project.img} />
          <div className='overlay'>
          </div>
            <img className='overlay-img' src={corse} />
        </div>
        <p className='project-card-title'>{project.title}</p>
        <p className='project-card-text'>{project.text}</p>
      </a>
    )
  })

  return(
    <section id='Portfolio' className='Portfolio-section'>
        <h2 className='Portfolio-title'>
        QUALITY WORK<br />
        RECENTLY DONE PROJECT
        </h2>
        <div className='projects-container'>
          {projectsElemnt}
        </div>
    </section>
  )
}