import React from "react";
import "./Projects.css";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiApachemaven,
  SiRedux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

export const Projects = () => {
  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={project1} alt="StoryBook" />
              </div>
            </div>
            <div className="project_information">
              <h2>StoryBook App</h2>
              <p>
                Presenting StoryBook, a unique storytelling app. Dive into a
                community of creativity where users can read and write
                captivating stories.
                <br />
                <br />
                An exceptional StoryBook app project, meticulously crafted by me
                in a single day.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
                <SiReact />
              </div>
              <div>
                <a
                  href="https://create-story-book.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dhruva8878/Story_Book"
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
                <img id="newsetimg" src={project2} alt="Chappan" />
              </div>
            </div>
            <div className="project_information">
              <h2>Chappan</h2>
              <p>
                This is a entirely new website called Chappan. It is famous food
                area in Indore city, where you can eat 56 types of delicious
                meals at one place on affordable prices with great taste. <br />
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
                <img id="newsetimg" src={project3} alt="Sephora" />
              </div>
            </div>
            <div className="project_information">
              <h2>Sephora Clone</h2>
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
                <img id="newsetimg" src={project4} alt="Covid-19" />
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
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a> */}
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
                <img id="newsetimg" src={project5} alt="Weather" />
              </div>
            </div>
            <div className="project_information">
              <h2>Weather App</h2>
              <p>
                Introducing a weather app. It's your go-to destination for
                accurate weather forecasts, offering detailed information for
                weather-tracking experience.
                <br />
                <br />A distinctive Weather app project, expertly developed by
                me within a swift 6-hour timeframe.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://livewheatherapp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dhruva8878/Weather-app"
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
                <img id="newsetimg" src={project6} alt="Translator" />
              </div>
            </div>
            <div className="project_information">
              <h2>Translator App</h2>
              <p>
                Introducing a fresh app named "Translator App." It's a renowned
                language hub, offering a variety of languages for translation.
                <br />
                <br />
                An innovative Translator app project, meticulously crafted by me
                in a mere 6 hours,
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://livetranslaterapp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dhruva8878/Translator-app"
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
  );
};
