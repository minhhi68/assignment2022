import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Hello and welcome to our website, here's everything about us you might need to know</p>
      <br />
      <p color="red">
      Movies company from HCMC, Vietnam
      </p>
      <br />
      <p>
      An organization that produces or sells goods or services in order to make a profit
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vba9e_hSvro"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gpv7ayf_tyE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HhesaQXLuRY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
