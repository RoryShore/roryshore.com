import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerTitle">Rory Shore</div>
          <div className="footerSub">Built with React + Vite • Deployed with Docker</div>
        </div>

        <div className="footerRight">
          <a className="footerLink" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="footerLink" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="footerCopy">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
