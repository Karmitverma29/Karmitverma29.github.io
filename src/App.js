import './App.css';
import React from "react";
import AllRoutes from "./Components/Allroutes"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/footer';
function App() {
  return <div className='app'>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
  </div>
}

export default App;
