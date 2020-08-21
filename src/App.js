import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Introduction from './components/Introduction/Introduction'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experiences/Experiences'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
