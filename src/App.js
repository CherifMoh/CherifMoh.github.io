import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';


export default function App() {
 
  return(
    <nav>
      <Header />
      <Main />
      <About />
      <Services />
    </nav>
  )
}
