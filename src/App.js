import React, { useState, useEffect ,useContext} from "react";
import Footer from './Components/Footer/footer';
import Nav from './Components/Navbar/nav';
import {About} from "./Components/Pages/About";
import {Skills} from './Components/Pages/Skills';
import { Projects } from './Components/Pages/Projects';
import { Home } from './Components/Pages/Home';
import {Git} from './Components/Navbar/Git';
import { Contact } from './Components/Navbar/Contact';
import Loader from './Components/Pages/Loader';
import { ThemeContext } from "./Components/Pages/Theme";
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
