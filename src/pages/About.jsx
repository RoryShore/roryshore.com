import React from "react";
//import rowingPhoto from "../assets/IMG_2735.jpeg";

export default function About() {
  return (
    <div className="container">
      <section className="pageHeader">
        <h1 className="pageTitle">About</h1>
        <p className="pageSubtitle">
          Systems-minded builder focused on reliable infrastructure, clean software, and documentation.
        </p>
      </section>

      <section className="aboutGrid">
        
        <div className="card">
          <div className="cardTitle">Education</div>
          <div className="cardBody">
            UW–Madison — B.S. Computer Science and Data Science (2028)
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Work</div>
          <div className="cardBody">
            Team lead at UW–Madison Division of Information Technology (DoIT), focused on internal
            application development, ongoing training, quality assurance, and OS deployment.
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Interests</div>
          <div className="cardBody">
            Networking (VLANs/VPN), Linux + Docker, data visualization, embedded/hardware projects, and AV systems.
          </div>
        </div>

        <div className="card wide">
          <div className="cardTitle">What you’ll find here</div>
          <div className="cardBody">
            Project writeups, diagrams, deployment notes, and a growing portfolio of systems work — from
            servers and networks to software tools and physical builds.
          </div>
        </div>
      </section>
    </div>
  );
}
