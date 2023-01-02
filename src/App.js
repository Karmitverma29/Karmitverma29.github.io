import './App.css';
import React from "react";
import Allroutes from "./Components/Allroutes";
import Navbar from './Components/Navbar/Navbar';
import SmallCentered from './Components/Footer/footer';
function App() {
  return <div>
      <Navbar/>
  <Allroutes/>
  <SmallCentered/>
  </div>
}

export default App;
