import React from 'react';
import styled from "styled-components";

import Header from './Header';
import Timeline from './Timeline';
import About from './About';
import Typewriter from "typewriter-effect";
import './App.css';
import Imageandtyping from './Imageandtyping';
import Skills from './Skills';
import Footer from './Footer';
import Projects from './Projects';
import ScrollButton from './ScrollButton';
import Combineheadertypin from './Combineheadertypin';

function App() {
  return (
  
    
   <>
   
  <Combineheadertypin/>
   <About></About>
   <Timeline/>
   <Skills/>
   <Projects/>

   <Footer/>
   <ScrollButton/>
   </>
 


  );
}
  
export default App;