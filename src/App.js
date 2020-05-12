import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
