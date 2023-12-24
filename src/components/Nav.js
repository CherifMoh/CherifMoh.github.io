import React from 'react';
import logo from "../asists/logo.svg";

export default function Nav() {

  return(
    <header>
        <a href='../public/index.html' className="logo-container">
            <img className="logo" src={logo} alt="" />
        </a>
        <nav className="navbar-container">
                <a href='#' className="selected-nav navBar-elements">Home</a>
                <a href='#' className="navBar-elements">About</a>
                <a href='#' className="navBar-elements">services</a>
                <a href='#' className="navBar-elements">portfolio</a>
                <a href='#' className="navBar-elements">contact</a>
        </nav>

    </header>
  )
}