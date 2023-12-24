import React from 'react';
import line from "../asists/hello-line.svg";
import purpeldot from "../asists/purpel dot.svg";
import greendot from "../asists/green dot.svg";
import heart from "../asists/heart beat.svg";
import name from "../asists/name.svg";

export default function Main() {

  return(
    <main>
        <img src={purpeldot} className='purpel-dot'></img>
        <img src={greendot} className='green-dot'></img>
        <img src={heart} className='heart1'></img>
        <img src={heart} className='heart2'></img>
        <img src={name} className='name-image'></img>
        <div className="banner-container">
            <h3 className="main-title">hello<img class="hello-line" src={line}></img></h3>
            <h1 className="main-name">i aM mansouri Cherif</h1>
            <h5 className="main-info">a front-end DEVELOPER</h5>
            <button className="main-button primary_btn">Hire ME</button>
        </div>
        <img className="main-image" src="https://preview.colorlib.com/theme/satner/img/banner/home-right.png"></img>
    </main>
  )
}