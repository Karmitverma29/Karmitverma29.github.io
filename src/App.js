import './App.css';
import React from "react";
import AllRoutes from "./Components/Allroutes"
import Footer from './Components/Footer/footer';
// import Nav from './Components/Navbar/nav';
import Nav from './Components/Navbar/navi';
function App() {
  return <div className='app'>
      {/* <Navbar/> */}
      <Nav/>
      <AllRoutes/>
      <Footer/>
  </div>
}

export default App;
