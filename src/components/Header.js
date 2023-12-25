import {useState,useEffect} from 'react';
import logo from "../asists/logo.svg";

export default function Header() {
  const [scrollDown , setScroll] =useState(false)

  function scrollHandler (){
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll >= 100) {
      setScroll(true)
      document.querySelector('.header-container').style.height = '70px';
    }else{
      document.querySelector('.header-container').style.height = '100px';
      setScroll(false)
    }
  }


  useEffect(()=>{
    window.addEventListener('wheel', scrollHandler)
    return ()=>window.removeEventListener('wheel', scrollHandler())
  },[])

  const styles=scrollDown ? {
    position:'fixed',
    top: '0',
    transition:' top 100s ease-in-out',
    animation: 'header 0.5s ease-in-out',
  }:{}
  return(
    <header style={styles}>
      <div className='header-container'>
        <a href='../public/index.html' className="logo-container">
            <img className="logo" src={logo} alt="" />
        </a>
        <nav className="navbar-container">
                <a href='#Main' className="selected-nav navBar-elements">Home</a>
                <a href='#About' className="navBar-elements">About</a>
                <a href='#' className="navBar-elements">services</a>
                <a href='#' className="navBar-elements">portfolio</a>
                <a href='#' className="navBar-elements">contact</a>
        </nav>
      </div>
    </header>
  )
}