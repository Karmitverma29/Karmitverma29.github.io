import React from "react";
import Footer from './Components/Footer/footer';
import Nav from './Components/Navbar/nav';
import {About} from "./Components/About";
import {Skills} from './Components/Skills';
import { Projects } from './Components/Projects';
import { Home } from './Components/Home';
import {Git} from './Components/Git';
import { Contact } from './Components/Contact';

function App() {
 

  return (
    <div className='app'>
      <Nav />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Git />
      <Contact />
      <Footer />
    </div>
  );
  
}
export default App;