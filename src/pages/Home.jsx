import React from "react";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="heroLeft">
          <p className="kicker">Welcome</p>
          <h1 className="headline">
            I build reliable systems and data-driven tools.
          </h1>
          <p className="subhead">
            This is my home base for projects, experiments, and writeups. The layout is designed to
            support “nice graphics” (SVGs, diagrams, screenshots, even WebGL/canvas sections).
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

        <div className="heroRight">
          {/* Graphics-friendly panel: drop in an SVG, illustration, chart, or canvas later */}
          <div className="graphicPanel" role="img" aria-label="Decorative graphic panel">
            <div className="gridGlow" />
            <div className="graphicContent">
              <div className="chip">graphics-ready</div>
              <div className="graphicTitle">Drop in visuals</div>
              <div className="graphicText">
                Add SVGs, screenshots, diagrams, or a canvas/Three.js scene here when you’re ready.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionText">
          Add your preferred contact method here (email, form, etc.). This is a placeholder section.
        </p>

        <div className="contactRow">
          <div className="card">
            <div className="cardTitle">Email</div>
            <div className="cardBody">you@example.com</div>
          </div>
          <div className="card">
            <div className="cardTitle">Location</div>
            <div className="cardBody">Madison, WI</div>
          </div>
          <div className="card">
            <div className="cardTitle">Links</div>
            <div className="cardBody">GitHub • LinkedIn • Resume PDF</div>
          </div>
        </div>
      </section>
    </div>
  );
}
