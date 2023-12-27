import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';


export default function App() {
 
  return(
    <nav>
      <Header />
      <Main />
      <About />
      <Services />
      <Portfolio />
    </nav>
  )
}
