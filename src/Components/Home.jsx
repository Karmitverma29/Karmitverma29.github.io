import React from "react";
import Intro from "./Intro";
import AvatarWithRipple from "./Avatar";
import { Button } from "@chakra-ui/react";
import "./home.css";

function Home() {
  return (
    <div id="home">
      <div className="home-content">
       
        <div className="home-right">
          <h1 className="home-title">Hi, I am Karmit Verma,</h1>
          <h2 className="home-subtitle">
            <Intro />
          </h2>
          <p className="home-description">
            Passionate full-stack web developer with strong technical and
            non-technical skills and a commitment to building useful, interactive
            web applications.
          </p>
          <Button
            as="a"
            href="/fw20_0844-Karmit-Verma-Resume.pdf"
            download
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1vltTnwRyXTRXc4L7nuANgQXYJqkiVHGP/view?usp=sharing",
                "_blank"
              );
            }}
            className="home-button"
            sx={{ backgroundColor: "#ffb301 !important" }}
          >
            Resume ⮞
          </Button>
        </div>
        <div className="home-left">
          <AvatarWithRipple />
        </div>
      </div>
    </div>
  );
}

export { Home };
