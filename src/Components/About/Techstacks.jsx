import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaJava } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiMysql,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku, SiPostman } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
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
            <FaJava />
            <h5>Java</h5>
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
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
