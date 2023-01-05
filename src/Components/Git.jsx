import React from "react";
import GitHubCalender from "react-github-calendar";
function Git(){
    return <div >
<GitHubCalender style={{margin:"auto",marginTop:"20px"}} username="Karmitverma29"/>
<div style={{width:"60%",margin:"auto",marginTop:"30px"}}>
    <img style={{margin:"auto",border:"2px solid #ffb301",borderRadius:"10px"}} src="https://github-readme-streak-stats.herokuapp.com?user=Karmitverma29" alt="alt_img"/>
    <img style={{margin:"auto",marginTop:"20px",border:"2px solid #ffb301",borderRadius:"10px"}} src="https://github-readme-stats.vercel.app/api?username=Karmitverma29&count_private=true&show_icons=true" alt="alt_img"/>
</div>

    </div>
}

export default Git;