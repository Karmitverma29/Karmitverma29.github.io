import React from "react";
import GitHubCalender from "react-github-calendar";

import "./Git.css"; 

function Git() {
  return (
    <div>
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
