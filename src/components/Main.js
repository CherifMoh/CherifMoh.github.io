import React from 'react';
import line from "../asists/hello-line.svg";

export default function Main() {

  return(
    <main>
        <div class="banner-container">
            <h3 class="main-title">hello<img class="hello-line" src={line}></img></h3>
            <h1 class="main-name">i aM mansouri Cherif</h1>
            <h5 class="main-info">a front-end DEVELOPER</h5>
            <button class="main-button primary_btn">Hire ME</button>
        </div>
        <img class="main-image" src="https://preview.colorlib.com/theme/satner/img/banner/home-right.png"></img>
    </main>
  )
}