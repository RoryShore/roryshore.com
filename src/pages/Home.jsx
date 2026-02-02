import React from "react";
import Slideshow from "../components/Slideshow.jsx";

// Slideshow images (rest)
import img1 from "../assets/IMG_8069.jpg";
import img2 from "../assets/IMG_8536.jpg";
import img3 from "../assets/IMG_6767.jpeg";
import img4 from "../assets/31DB5383-5C37-4732-89B0-3628B2DE6358.jpeg";
import img5 from "../assets/IMG_6322.jpeg";
import img6 from "../assets/IMG_6389.jpeg";
import img7 from "../assets/IMG_7078.jpg";
//import img8 from "../assets/IMG_6399.png";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="heroLeft">
          <p className="kicker">Welcome</p>
          <h1 className="headline">I build reliable systems and data-driven tools.</h1>
          <p className="subhead">
            Projects, experiments, and documentation — from infrastructure to software to hands-on builds.
          </p>

          <div className="heroButtons">
            <a className="btnPrimary" href="/projects">
              View Projects
            </a>
            <a className="btnSecondary" href="/about">
              About Me
            </a>
          </div>

          <div className="heroStats">
            <div className="statCard">
              <div className="statNumber">Networking</div>
              <div className="statLabel">VLANs • VPN • homelab</div>
            </div>
            <div className="statCard">
              <div className="statNumber">Software</div>
              <div className="statLabel">Python • Java • Rust</div>
            </div>
            <div className="statCard">
              <div className="statNumber">Data</div>
              <div className="statLabel">R • visualization • ML</div>
            </div>
          </div>
        </div>

      </section>
      <section className="section">
        <h2 className="sectionTitle">Highlights</h2>
        <p className="sectionText">
          A rotating snapshot of things I’ve been building and working on recently.
        </p>

        <div className="slideshowWrap">
          <Slideshow images={[img1, img2, img3, img4, img5, img6, img7]} intervalMs={4500} />
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionText">Reach out anytime.</p>

        <div className="contactRow">
          <div className="card">
            <div className="cardTitle">Email</div>
            <div className="cardBody">
              <a href="mailto:info@roryshore.com">info@roryshore.com</a>
            </div>
          </div>
          <div className="card">
            <div className="cardTitle">Location</div>
            <div className="cardBody">Madison, WI / Princeton, NJ</div>
          </div>
          <div className="card">
            <div className="cardTitle">Links</div>
            <div className="cardBody">
              <a href="https://github.com/RoryShore" target="_blank" rel="noreferrer">
                GitHub
              </a>
              {" • "}
              <a href="https://www.linkedin.com/in/roryshore" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
