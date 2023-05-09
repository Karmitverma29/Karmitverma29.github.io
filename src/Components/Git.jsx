import React ,{useContext}from "react";
import GitHubCalender from "react-github-calendar";
import { ThemeContext } from "../Components/Theme";

import "./Git.css"; 

function Git() {
  const{darkMode}=useContext(ThemeContext);

  return (
    <div style={{padding:"30px"}} id={darkMode?"dark-mode-git":"git"}>
                  <h1 className={darkMode?"git-title-dark":"git-title"} style={{fontSize: "3rem",textAlign: "center", marginTop: "50px",fontWeight:"700"}}>GitHub Statistics</h1>

      <GitHubCalender username="Karmitverma29" style={{margin:"auto",marginTop:"40px"}} />
      <div className="github-stats">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Karmitverma29"
          alt="alt_img"
        />
        <img
          style={{ marginTop: "20px" }}
          src="https://github-readme-stats.vercel.app/api?username=Karmitverma29&count_private=true&show_icons=true"
          alt="alt_img"
        />
      </div>
    </div>
  );
}

export {Git};

