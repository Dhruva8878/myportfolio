import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaJava } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiApachemaven,
} from "react-icons/si";
import { DiCss3, DiReact } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project2} alt="Pluralsight" />
                </div>
              </div>
              <div className="project_information">
                <h2>Chappan</h2>
                <p>
                  This is a entirely new website called Chappan. It is famous
                  food area in Indore city, where you can eat 56 types of
                  delicious meals at one place on affordable prices with great
                  taste. <br />
                  <br />A project built by me, in 2 days.{" "}
                </p>

                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <DiReact />
                  <SiRedux />
                </div>
                <div>
                  <a
                    href="https://chappan.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dhruva8878/Chappan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project4} alt="myshopoffood" />
                </div>
              </div>
              <div className="project_information">
                <h2>Covid-19 Application</h2>
                <p>
                  A RESTful API web-service for a Covid-19 Application. This API
                  performs all the fundamental CRUD operations of Covid-19
                  Application.
                  <br />
                  <br />A collaborative project, built in 6 days by a team of 5
                  developers.
                </p>
                <div>
                  <FaJava />
                  <SiSpring />
                  <SiSpringboot />
                  <SiHibernate />
                  <SiMysql />
                  <SiApachemaven />
                </div>
                <div>
                  <a
                    href="https://github.com/Dhruva8878/Covid_19_webApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project3} alt="Sephora" />
                </div>
              </div>
              <div className="project_information">
                <h2>Sephora clone</h2>
                <p>
                  Sephora is a French multinational retailer of famous beauty
                  brand that has captured the hearts of millions of beauty
                  shoppers worldwide.
                  <br />
                  <br />A collaborative project, built in 5 days by a team of 6
                  developers.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://cloneshephora.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/skismile/team-Sephora_project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div id="newset">
                  <img id="newsetimg" src={project1} alt="Bangood" />
                </div>
              </div>
              <div className="project_information">
                <h2>Bangood clone</h2>
                <p>
                  Banggood is a chinese E-commerce legitimate online shopping
                  website, offering a wide range of products at very cheap
                  prices.
                  <br />
                  <br />A collaborative project, built in 6 days by a team of 5
                  developers.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://onlinebanggood.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dhruva8878/onlinebanggood"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
