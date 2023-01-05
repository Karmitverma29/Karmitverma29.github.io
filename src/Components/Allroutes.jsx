import React from "react";
import {Routes,Route} from "react-router-dom";
import {About} from "./About";
import {Contact} from "./Contact";
import {Skills} from "./Skills";
import {Home} from "./Home";
import Git from "./Git";
import {Projects} from "./Projects";
function AllRoutes(){
    return <div>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/gitStats" element={<Git/>}/>
            <Route path="/contact" element={<Contact/>}/>

        </Routes>

    </div>
}
export default AllRoutes;