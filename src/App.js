import './App.css';
import React from "react";
import AllRoutes from "./Components/Allroutes"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
import Nav from './Components/Navbar/nav';
function App() {
  return <div className='app'>
      {/* <Navbar/> */}
      <Nav/>
      <AllRoutes/>
      <Footer/>
  </div>
}

export default App;
