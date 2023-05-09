import React,{useContext} from "react";
import "./aboutme.css";
import { ThemeContext } from "../Components/Theme";


function About() {
    const{darkMode}=useContext(ThemeContext);

    return (
        <div className={darkMode?"dark-mode-about":"aboutme"}id="about">
           
                <div className="innerAboutme2">
                    <h1 className="aboutme-title">About me</h1>
                    <p className={darkMode?"dark-mode-aboutme-text":"aboutme-text"}>
                        Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1200+ hours of learning HTML, CSS, JavaScript, React.js, Redux, etc.
                    </p>
                </div>
        </div>
    );
}

export {About};
