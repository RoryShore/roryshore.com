import React from "react";

export default function About() {
  return (
    <div className="container">
      <section className="pageHeader">
        <h1 className="pageTitle">About</h1>
        <p className="pageSubtitle">
          A quick overview. Replace this with your story, skills, and what you’re building next.
        </p>
      </section>

      <section className="aboutGrid">
        <div className="card">
          <div className="cardTitle">What I do</div>
          <div className="cardBody">
            I’m interested in systems, networking, and data science — building tools that are practical,
            reliable, and well-documented.
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Current focus</div>
          <div className="cardBody">
            Infrastructure + automation, analytics projects, and software that improves day-to-day workflows.
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Skills</div>
          <div className="cardBody">
            Python, Java, R, Rust • Linux • Docker • networking (VLANs/VPN) • data viz
          </div>
        </div>

        <div className="card wide">
          <div className="cardTitle">Add a “hero graphic”</div>
          <div className="cardBody">
            This page is a good spot for an illustration, headshot, or a clean diagram of your current
            stack — the spacing is built for it.
          </div>
        </div>
      </section>
    </div>
  );
}
