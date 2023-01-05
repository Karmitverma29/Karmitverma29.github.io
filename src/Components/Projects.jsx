import React from "react";
import "./projects.css"
function Projects(){
    return <div className="projects" style={{width:"60%",height:"1100px",margin:"auto",marginTop:"20px"}}>

<div  className="child" style={{border:"3px solid #ffb301",borderRadius:"10px"}}>
<img className="image" style={{height:"50%",width:"100%",borderRadius:"10px"}} src={`${process.env.PUBLIC_URL}/booking.png`} alt="img"/>
<h1 className="heading" style={{fontSize:"24px",fontWeight:"600",textAlign:"center",marginTop:"10px",color:"#ffb301"}}>Replica of Booking.com</h1>
<p style={{textAlign:"center",fontSize:"16px"}}>
Booking.com BV (“Booking.com”) provides online reservation services. 
</p>
<h2 style={{textAlign:"center",fontSize:"16px"}}><span style={{color:"#ffb301",fontWeight:"600"}}>Tech Stack:</span>
HTML | CSS | JavaScript

</h2>
<div className="btns" style={{height:"60px",width:"250px",margin:"auto",marginTop:"10px"}}>
    <a href="https://elastic-afterthought-7316.vercel.app/index.html" rel="noreferrer" target="_blank">
<button className="live_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Live</button></a>
<a href="https://github.com/Karmitverma29/elastic-afterthought-7316" rel="noreferrer" target="_blank">

<button className="code_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Souce code</button>
</a>
</div>


</div>
<div className="child" style={{border:"3px solid #ffb301",borderRadius:"10px"}}>

<img className="image"  style={{height:"50%",width:"100%",borderRadius:"10px"}} src={`${process.env.PUBLIC_URL}/nordstorm.png`} alt="img"/>
<h1 className="heading" style={{fontSize:"24px",fontWeight:"600",textAlign:"center",marginTop:"10px",color:"#ffb301"}}>Replica of NordStorm (E-commerce)</h1>
<p style={{textAlign:"center",fontSize:"16px"}}>
Nordstrom is an American luxury department store that offers a wide variety of things. 

</p>
<h2 style={{textAlign:"center",fontSize:"16px"}}><span style={{color:"#ffb301",fontWeight:"600"}}>Tech Stack:</span>
HTML | CSS | JavaScript
</h2>

<div className="btns" style={{height:"60px",width:"250px",margin:"auto",marginTop:"10px"}}>
    <a href="https://skincare-delta.vercel.app/index.html" rel="noreferrer" target="_blank">
<button className="live_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Live</button></a>
<a href="https://github.com/srock2580/red-sail-4113" rel="noreferrer" target="_blank">

<button className="code_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Souce code</button>
</a>
</div>

</div>
<div className="child" style={{border:"3px solid #ffb301",borderRadius:"10px"}}>
<img className="image"  style={{height:"50%",width:"100%",borderRadius:"10px"}} src={`${process.env.PUBLIC_URL}/mailtrap.png`} alt="img"/>
<h1 className="heading" style={{fontSize:"24px",fontWeight:"600",textAlign:"center",marginTop:"10px",color:"#ffb301"}}>Replica of Mailtrap</h1>
<p style={{textAlign:"center",fontSize:"16px"}}>
Mailtrap is a fake SMTP server designed to test, view, and share emails.
</p>
<h2 style={{textAlign:"center",fontSize:"16px"}}><span style={{color:"#ffb301",fontWeight:"600"}}>Tech Stack:</span>
React.js | HTML | CSS | Javascript
</h2>
<div className="btns" style={{height:"60px",width:"250px",margin:"auto",marginTop:"10px"}}>
    <a href="https://equal-part-8697-ps35.vercel.app/" rel="noreferrer" target="_blank">
<button className="live_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Live</button>
</a>
<a href="https://github.com/Karmitverma29/equal-part-8697" rel="noreferrer" target="_blank">

<button className="code_btn" style={{height:"30px",width:"100px",border:"3px solid #ffb301",borderRadius:"10px",fontWeight:"600"}}>Souce code</button>
</a>
</div>
</div>
<div className="child" style={{border:"3px solid #ffb301",borderRadius:"10px"}}>
{/* <img src={`${process.env.PUBLIC_URL}/karmitverma2.jpg`} alt="img"/> */}

</div>
        </div>

}

export {Projects};