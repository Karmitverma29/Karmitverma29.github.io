import React,{useContext} from "react";
import "../Styles/Contact.css"
import { ThemeContext } from "../Pages/Theme";

import ContactFormWithSocialButtons from "./Contact-part1";
function Contact(){
    const{darkMode}=useContext(ThemeContext);

    return <div  className={darkMode?"dark-mode-Contact":"Contact"} id="contact">
        <ContactFormWithSocialButtons style={{height:"auto"}}/>
    </div>
}

export {Contact};