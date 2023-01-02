import React from "react";
import "./aboutme.css";
function About(){
    return <div className="aboutme" style={{height:"500px",width:"100%"}}>


<div className="aboutme1" style={{border:"2px solid #ffb301",display:"flex",alignItems:"center",justifyContent:"center"}}>
<img className="img1"  style={{height:"70%",width:"70%"}} src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-6882.jpg?size=626&ext=jpg&uid=R88823940&ga=GA1.2.1403092943.1672220215&semt=ais" alt="Aboutme"/>
</div>
<div className="aboutme2"  style={{border:"2px solid #ffb301"}}>
    <div className="innerAboutme2" style={{height:"70%",width:"70%",margin:"auto",border:"2px solid #ffb301",marginTop:"5%",borderRadius:"10px"}}>
    <h1  style={{fontSize:"28px",fontWeight:"700",color:"black",textAlign:"center",textDecoration:"underline",textDecorationColor:"#ffb301",marginTop:"50px"}}>About me</h1>
<p style={{textAlign:"center",fontSize:"18px"}}>
Full-Stack Web Developer with the ability to learn and collaborate in <br /> rapidly
changing environments and compositions. <br />
  Worked through 1200+ hours of learning HTML, CSS, JavaScript, React.js, Redux and, etc.
</p>
<div style={{height:"90px",width:"90px",margin:"auto"}}>

</div>
    </div>
    
</div>
    </div>
}

export {About};