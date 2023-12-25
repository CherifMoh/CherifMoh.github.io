import React from 'react';


export default function About() {

  return(
    <section id='About' className='about-section'>
      <div className='about-conatainer'>
        <div className='about-img-container'>
          <img className="about-image" src="https://preview.colorlib.com/theme/satner/img/about-us.png"></img>
        </div>
        <div className="about-text-container">
          <h2 className='about-tilte'>let’s  <br />Introduce about <br />myself<br /></h2>
          <p className='about-text'>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.<br /></p>
          <p className='about-text'>Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.<br /></p>
          <button className="about-btn primary_btn">Hire ME</button>
        </div>
      </div>
      <div>
        <div className='experience-conatainer'>
          <div className='years-experience-conatainer'>
            <div className='year-experience'>2</div>
            <div className='experience-text'>Years <br /> Experience<br /> Working</div>
          </div>
          <div className='call-conatainer'>
            <img className='phone-icon' src='https://static-00.iconduck.com/assets.00/phone-icon-1561x2048-qjhf7be8.png' />
            <div className='phone-number-container'>
              <p>call us now</p>
              <h3>(+213)0775633763</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}