import React, { useState, useEffect ,useContext} from "react";
import Footer from './Components/Footer/footer';
import Nav from './Components/Navbar/nav';
import {About} from "./Components/About";
import {Skills} from './Components/Skills';
import { Projects } from './Components/Projects';
import { Home } from './Components/Home';
import {Git} from './Components/Git';
import { Contact } from './Components/Contact';
import Loader from './Components/Loader';
import { ThemeContext } from "./Components/Theme";
import "./App.css"
function App() {
  const [loading, setLoading] = useState(true);
  const{darkMode}=useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.title = 'Karmit Verma'; 
      
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode?"dark-mode-app":"app"}>
      {loading ? <Loader /> :
      <>
        <Nav />
        <Home />
        <About/>
        <Skills />
        <Projects />
        <Git />
        <Contact />
        <Footer />
      </>
      }
    </div>
  );
  
}
export default App;
