import React from "react";

const About = () => {
  return (
<section className="about" id="about">
  <div className="container">

    {/* Centered header block */}
    <div className="about-header">
      <span className="about-eyebrow">Who I Am</span>
      <h2 className="section-title">
        Turning Data into{" "}
        <span className="about-title-accent">Decisions</span>
      </h2>
    </div>
        {/* Two-column layout */}
        <div className="about-content">

          {/* Left – bio text */}
          <div className="about-text">
            <p>
              I'm <strong>Arnav Tomar</strong>, a Computer Science (Data Science)
              undergraduate at <strong>SRMIST, Delhi NCR</strong>.
            </p>

            <p>
              I work on turning data into practical systems — from analysis to
              machine learning models and full-stack deployments.
            </p>

            <p>
              Experience includes working as a Data Analyst at Ashna AI and
              building ML-driven projects using Python, FastAPI, and modern tools.
            </p>

            <p>
              Currently focused on real-world problem solving, scalable ML systems,
              and continuous learning.
            </p>
          </div>

          {/* Right – code card */}
          <div className="about-code-card">
            {/* macOS-style window chrome */}
            <div className="code-card-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-card-filename">arnav.config.js</span>
            </div>

            {/* Syntax-highlighted pseudo-code */}
            <div className="code-card-body">

              <div className="code-line">
                <span className="code-keyword">const </span>
                <span className="code-var">arnav</span>
                <span className="code-punct"> = {"{"}</span>
              </div>

              {/* name */}
              <div className="code-line code-line--indent">
                <span className="code-key">name</span>
                <span className="code-punct">: </span>
                <span className="code-val--str">"Arnav Tomar"</span>
                <span className="code-punct">,</span>
              </div>

              {/* role */}
              <div className="code-line code-line--indent">
                <span className="code-key">role</span>
                <span className="code-punct">: </span>
                <span className="code-val--str">"Data Analyst &amp; ML Engineer"</span>
                <span className="code-punct">,</span>
              </div>

              {/* location */}
              <div className="code-line code-line--indent">
                <span className="code-key">location</span>
                <span className="code-punct">: </span>
                <span className="code-val--str">"Modinagar, India 🇮🇳"</span>
                <span className="code-punct">,</span>
              </div>

              {/* education */}
              <div className="code-line code-line--indent">
                <span className="code-key">education</span>
                <span className="code-punct">: </span>
                <span className="code-val--str">"SRMIST — B.Tech CS (DS)"</span>
                <span className="code-punct">,</span>
              </div>

              {/* cgpa */}
              <div className="code-line code-line--indent">
                <span className="code-key">cgpa</span>
                <span className="code-punct">: </span>
                <span className="code-val--arr">9.3</span>
                <span className="code-punct">,</span>
              </div>
              {/* status */}
              <div className="code-line code-line--indent">
                <span className="code-key">status</span>
                <span className="code-punct">: </span>
                <span className="code-val--str">"Open to opportunities 🚀"</span>
              </div>

              <div className="code-line">
                <span className="code-punct">{"}"}</span>
                <span className="code-punct">;</span>
              </div>

            </div>
          </div>
          {/* end code card */}

        </div>
        {/* end about-content */}
      </div>
    </section>
  );
};

export default About;