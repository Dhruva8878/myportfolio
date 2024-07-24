import React from "react";
import "./Introduction.css";
import { Type } from "../Type/Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Dhruv_Resume from "../../assets/resume/Dhruv_Resume.pdf";

export const Introduction = () => {
  return (
    <div className="introduction center">
      <h1 data-aos="fade-right" className="mobileHead">
        Hello, I am <span className="introduction__name">Dhruv Gupta</span>
      </h1>
      <Type />
      <p className="introduction__desc" data-aos="fade-right">
        Passionate and creative Full Stack Developer having problem-solving
        ability and proficiency in React.js and Java Stack. A good learner &
        always excited to learn new technologies.
      </p>
      <div className="introduction__contact center">
        <a
          href="https://github.com/Dhruva8878"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:dhruvagupta722@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className="link link--icon"
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+918878763116"
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className="link link--icon"
        >
          <PhoneIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/dhruv-gupta-9605ba243/"
          aria-label="linkedin"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <button
        className="btnResume"
        onClick={() => {
          window.open(Dhruv_Resume);
        }}
      >
        Resume
      </button>
    </div>
  );
};
