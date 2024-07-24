import React from "react";
import "./Techstacks.css";
import { FaReact, FaJava, FaBitbucket, FaJira } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiMui,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiPrettier,
  SiHtml5,
  SiMysql,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiTailwindcss,
  SiJquery,
  SiPhp
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";

export const Techstacks = () => {
  return (
    <div className="section" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <SiRedux />
          <h5>Redux</h5>
        </div>
        <div>
          <SiJavascript />
          <h5>Javascript</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS</h5>
        </div>
        <div>
          <VscGithub />
          <h5>Github</h5>
        </div>
        <div>
          <FaBitbucket />
          <h5>Bitbucket</h5>
        </div>
        <div>
          <FaJira />
          <h5>Jira</h5>
        </div>
        <div>
          <SiMui />
          <h5>MaterialUi</h5>
        </div>
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <SiTailwindcss />
          <h5>Tailwind</h5>
        </div>
        <div>
          <FaJava />
          <h5>Java</h5>
        </div>
        <div>
          <SiJquery />
          <h5>JQuery</h5>
        </div>
        <div>
          <SiPhp  />
          <h5>PHP</h5>
        </div>
        <div>
          <SiMysql />
          <h5>MySQL</h5>
        </div>
        <div>
          <SiSpring />
          <h5>Spring</h5>
        </div>
        <div>
          <SiSpringboot />
          <h5>Spring-Boot</h5>
        </div>
        <div>
          <SiPostman />
          <h5>Postman</h5>
        </div>
        <div>
          <SiHibernate />
          <h5>Hibernate</h5>
        </div>
        <div>
          <BiLogoNetlify />
          <h5>Netlify</h5>
        </div>
        <div>
          <SiPrettier />
          <h5>Prettier</h5>
        </div>
      </div>
    </div>
  );
};
