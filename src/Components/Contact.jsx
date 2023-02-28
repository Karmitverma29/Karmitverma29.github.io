import React from "react";
import "./Contact.css"
import ContactFormWithSocialButtons from "./Contact-part1";
function Contact(){
    return <div  className="Contact" id="contact">
        <ContactFormWithSocialButtons  style={{height:"auto"}}/>
    </div>
}

export {Contact};