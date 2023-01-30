import React from "react";
import Intro from "./Intro";
import AvatarWithRipple from "./Avatar";
import { Button } from '@chakra-ui/react';
function Home(){
    let change=(e)=>{

        e.target.style.background = '#ffffff';
        e.target.style.border='1px solid #ffb301 '

    }
    let OnLeave=(e)=>{
        e.target.style.background = '#ffb301';

    }
    return <div >
        <div style={{height:"550px",width:"100%",textAlign:"center"}}>
        
<h1 style={{textAlign:"center",fontSize:"35px",fontWeight:"600",marginTop:"70px",color:"black"}}>Hi, I am Karmit Verma,</h1>
<h2 style={{textAlign:"center",fontSize:"35px",fontWeight:"600",marginTop:"20px",color:"#ffb301"}}>{<Intro/>}</h2>
<p  style={{textAlign:"center",fontSize:"18px",fontWeight:"600",color:"#black",marginTop:"10px"}}>Passionate full-stack web developer with strong technical and <br /> non-technical skills and a commitment to building useful, <br /> interactive web applications.</p>
<AvatarWithRipple/>
<a href="https://drive.google.com/uc?export=download&id=1vltTnwRyXTRXc4L7nuANgQXYJqkiVHGP"  rel="noreferrer" target="_blank" > <Button onMouseLeave={OnLeave}    onMouseEnter={change} style={{backgroundColor:"#ffb301",marginTop:"15px"}}  >Resume ⮞</Button></a>
</div>




</div>
}

export {Home};