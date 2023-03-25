import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div id="projects">
      <h1 className="project-heading">Projects</h1>

      <div className="projects-container">
        <div className="project-card">
          <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/buylance.png`}
            alt="Buylance project"
          />
          <h1 className="project-title">Buylance</h1>
          <p className="project-description">
            An online one-stop fashion portal for apparel, footwear and
            accessories. Aims at providing a hassle free and enjoyable shopping
            experience to shoppers across the country.
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
            Booking.com provides online reservation services.Booking.com,
            headquartered in Amsterdam, is one of the largest online travel
            agencies. It is a subsidiary of Booking Holdings.
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
          <h1 className="project-title">Replica of NordStorm </h1>
          <p className="project-description">
            Nordstrom, Inc. is an American luxury department store chain
            headquartered in Seattle, Washington, and founded by John W.
            Nordstrom and Carl F. Wallin in 1901.
          </p>
          <h2 className="project-tech-stack">
            <span className="project-tech-stack-title">Tech Stack:</span>
            HTML | CSS | JavaScript
          </h2>
          <div className="project-buttons">
            <a
              href="https://benevolent-sunshine-c2ea8d.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-live-btn">Live</button>
            </a>
            <a
              href="https://github.com/srock2580/red-sail-4113"
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
            Mailtrap Email Delivery Platform is an end-to-end sending solution
            for businesses and individuals to Test, Send, and Control emails in
            one place. You can inspect and debug emails in staging with Email
            Testing.
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
            Rodan & Fields, LLC, known as Rodan + Fields or R+F, is an American
            multi-level marketing company specializing in skincare products.
            Katie Rodan and Kathy A. Fields, creators of Proactive.{" "}
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

        <div className="project-card">
          <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/electroglad.png`}
            alt="Replica of NordStorm project"
          />
          <h1 className="project-title">Replica of ElectroGlad</h1>
          <p className="project-description">
            ElectroGlad Camera, Inc is a camera, electronics, and film equipment
            retailer launched in 1974. Apart from their online shopping
            websites. They have a large multi-floor Chelsea store.
          </p>
          <h2 className="project-tech-stack">
            <span className="project-tech-stack-title">Tech Stack:</span>
            React | Redux | Javascript | Chakra UI | Node.js | MongoDB
          </h2>
          <div className="project-buttons">
            <a
              href="https://elecroglad.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-live-btn">Live</button>
            </a>
            <a
              href="https://github.com/JyotiranjanGhibila/creepy-skin-4061"
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
            src={`${process.env.PUBLIC_URL}/shopunder669.png`}
            alt="Replica of NordStorm project"
          />
          <h1 className="project-title">Replica of SHOPUNDER669</h1>
          <p className="project-description">
          ShopUnder669 is an online shopping platform offering a wide range of products
at affordable prices, with a focus on items priced under ₹669.
          </p>
          <h2 className="project-tech-stack">
            <span className="project-tech-stack-title">Tech Stack:</span>
            HTML | CSS | Javascript | Bootstrap | Node.js | MongoDB
          </h2>
          <div className="project-buttons">
            <a
              href="https://shopunder669-alpha.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-live-btn">Live</button>
            </a>
            <a
              href="https://github.com/Karmitverma29/Shopunder669"
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

export { Projects };
