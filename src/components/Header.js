import {useState,useEffect} from 'react';
import logo from "../asists/logo.svg";

export default function Header() {
  const [scrollDown , setScroll] =useState(false)

  function scrollHandler (){
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll >= 100) {
      setScroll(true)
      document.querySelector('.header-container').style.height = '70px';
      document.querySelector('.top-header').style.boxShadow = '0px 3px 16px 0px rgba(0, 0, 0, 0.1)';
    }else{
      document.querySelector('.header-container').style.height = '100px';
      document.querySelector('.top-header').style.boxShadow = '';
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
    <header className='top-header' style={styles}>
      <div className='header-container'>
        <a href='../public/index.html' className="logo-container">
            <img className="logo" src={logo} alt="" />
        </a>
        <nav className="navbar-container">
                <a href='#Main' className="selected-nav navBar-elements">Home</a>
                <a href='#About' className="navBar-elements">About</a>
                <a href='#Services' className="navBar-elements">services</a>
                <a href='#Portfolio' className="navBar-elements">portfolio</a>
                <a href='#' className="navBar-elements">contact</a>
        </nav>
      </div>
    </header>
  )
}