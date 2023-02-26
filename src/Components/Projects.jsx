import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div>
            <h1 style={{fontSize: "3rem",color: "black",textAlign: "center", marginTop: "50px",fontWeight:"700"}}>Projects</h1>

    <div className="projects-container" id="projects">

      <div className="project-card">
        <img
          className="project-image"
          src={`${process.env.PUBLIC_URL}/buylance.png`}
          alt="Buylance project"
        />
        <h1 className="project-title">Buylance</h1>
        <p className="project-description">
          An online one-stop fashion portal for apparel, footwear and
          accessories.
        </p>
        <h2 className="project-tech-stack">
          <span className="project-tech-stack-title">Tech Stack:</span>
          React.js | TypeScript | Redux | Chakra UI
        </h2>
        <div className="project-buttons">
          <a
            href="https://buylance.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-live-btn">Live</button>
          </a>
          <a
            href="https://github.com/faizal-siddiqui/murky-rate-2238"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-code-btn">Source code</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img
          className="project-image"
          src={`${process.env.PUBLIC_URL}/booking.png`}
          alt="Replica of Booking.com project"
        />
        <h1 className="project-title">Replica of Booking.com</h1>
        <p className="project-description">
          Booking.com BV provides online reservation services.
        </p>
        <h2 className="project-tech-stack">
          <span className="project-tech-stack-title">Tech Stack:</span>
          HTML | CSS | JavaScript
        </h2>
        <div className="project-buttons">
          <a
            href="https://elastic-afterthought-7316.vercel.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-live-btn">Live</button>
          </a>
          <a
            href="https://github.com/Karmitverma29/elastic-afterthought-7316"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-code-btn">Source code</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img
          className="project-image"
          src={`${process.env.PUBLIC_URL}/nordstorm.png`}
          alt="Replica of NordStorm project"
        />
        <h1 className="project-title">Replica of NordStorm (E-commerce)</h1>
        <p className="project-description">
          Nordstrom is an American luxury department store that offers a wide
          variety of things.
        </p>
        <h2 className="project-tech-stack">
          <span className="project-tech-stack-title">Tech Stack:</span>
          HTML | CSS | JavaScript
        </h2>
        <div className="project-buttons">
          <a
            href="https://elastic-afterthought-7316.vercel.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-live-btn">Live</button>
          </a>
          <a
            href="https://github.com/Karmitverma29/elastic-afterthought-7316"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-code-btn">Source code</button>
          </a>
        </div>
      </div>
      <div className="project-card">
        <img
          className="project-image"
          src={`${process.env.PUBLIC_URL}/mailtrap.png`}
          alt="Replica of NordStorm project"
        />
        <h1 className="project-title">Replica of Mailtrap</h1>
        <p className="project-description">
        Mailtrap is a fake SMTP server designed to test, view, and share emails.

        </p>
        <h2 className="project-tech-stack">
          <span className="project-tech-stack-title">Tech Stack:</span>
          React.js | HTML | CSS | Javascript

        </h2>
        <div className="project-buttons">
          <a
            href="https://equal-part-8697-ps35.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-live-btn">Live</button>
          </a>
          <a
            href="https://github.com/Karmitverma29/equal-part-8697"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-code-btn">Source code</button>
          </a>
        </div>
      </div>
      
      <div className="project-card">
        <img
          className="project-image"
          src={`${process.env.PUBLIC_URL}/rodan.png`}
          alt="Replica of NordStorm project"
        />
        <h1 className="project-title">Replica of Rodan & Fields</h1>
        <p className="project-description">
        Rodan&Fields is an American multi-level marketing company of skincare products.

        </p>
        <h2 className="project-tech-stack">
          <span className="project-tech-stack-title">Tech Stack:</span>
          HTML | CSS | Javascript

        </h2>
        <div className="project-buttons">
          <a
            href="https://creative-moxie-5738eb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-live-btn">Live</button>
          </a>
          <a
            href="https://github.com/tarunas033/wholesale-sky-2474"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-code-btn">Source code</button>
          </a>
        </div>
      </div>
      
      </div>
      </div>
        
);
}

export {Projects};