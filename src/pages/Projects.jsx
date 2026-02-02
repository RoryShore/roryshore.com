import React from "react";

const projects = [
  {
    title: "House Network + VPN",
    desc: "Redundant ISP, VLAN segmentation, WireGuard access, and internal services.",
    tags: ["networking", "security", "infra"]
  },
  {
    title: "Battery BMS One-Wire (Rust)",
    desc: "Async One-Wire driver experiments for embedded battery management workflows.",
    tags: ["rust", "embedded", "hardware"]
  },
  {
    title: "Transit UI / Bus Tracker",
    desc: "Aggregated stop display for better nearby departure information.",
    tags: ["web", "data", "ux"]
  }
];

export default function Projects() {
  return (
    <div className="container">
      <section className="pageHeader">
        <h1 className="pageTitle">Projects</h1>
        <p className="pageSubtitle">
          A few highlights. Each card can expand into a detail page later (or link to GitHub).
        </p>
      </section>

      <section className="projectGrid">
        {projects.map((p) => (
          <article key={p.title} className="projectCard">
            <div className="projectTop">
              <h2 className="projectTitle">{p.title}</h2>
              <div className="tagRow">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="projectDesc">{p.desc}</p>

            <div className="projectActions">
              <button className="btnTertiary" type="button">
                Details (soon)
              </button>
              <button className="btnTertiary" type="button">
                GitHub (soon)
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <h2 className="sectionTitle">Graphics-friendly layout</h2>
        <p className="sectionText">
          Add diagrams, architecture images, screenshots, and embedded interactive demos. The grid/cards
          spacing is designed for visuals.
        </p>
      </section>
    </div>
  );
}
