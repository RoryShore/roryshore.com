import React from "react";

const projects = [
  {
    title: "Professional-Grade Audio Visual",
    desc:
      "Designed and deployed an AV setup with professional lighting and audio. Lights are controlled via DMX, projectors are driven using Resolume Arena, and audio runs through a custom sound system tuned for the space.",
    tags: ["av", "dmx", "resolume", "systems"]
  },
  {
    title: "DoIT Internal Tools + QA + Deployment",
    desc:
      "Team lead at UW–Madison Division of Information Technology (DoIT) with a focus on internal application development, ongoing training, quality assurance, and OS deployment workflows.",
    tags: ["leadership", "internal-tools", "qa", "deployment"]
  },
  {
    title: "Chapter Website + Server Deployment",
    desc:
      "Deployed and maintained the server hosting the chapter website, and built the pipeline to develop and deploy this site (roryshore.com) using Git + Docker on a Linux host.",
    tags: ["linux", "docker", "ops", "web"]
  },
  {
    title: "3D Printing + Prusa MK4 Build",
    desc:
      "Assembled and tuned an Original Prusa MK4 and use it for iterative prototyping. Work includes calibration, slicing workflow refinement, and printing functional parts for ongoing projects.",
    tags: ["3d-printing", "hardware", "prototype"]
  },
  {
    title: "HO Scale Model Railroad",
    desc:
      "Built and upgraded an HO scale layout equipped with DCC and operated via JMRI. Work includes wiring track power districts/circuits, speed calibration, programming signals, and continuing expansion.",
    tags: ["dcc", "jmri", "electronics", "controls"]
  }
];

export default function Projects() {
  return (
    <div className="container">
      <section className="pageHeader">
        <h1 className="pageTitle">Projects</h1>
        <p className="pageSubtitle">
          Highlights across infrastructure, software, AV systems, and hands-on builds.
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
          </article>
        ))}
      </section>
    </div>
  );
}
