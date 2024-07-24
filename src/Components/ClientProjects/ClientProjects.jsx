import React from "react";
import "./ClientProjects.css";
import { SiHtml5, SiReact, SiJquery, SiPrettier, SiPhp, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBitbucket, FaJira } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import meydan from "../../assets/meydan.png";
import routeship from "../../assets/routeship.png";

export const ClientProjects = () => {
  return (
    <div className="section">
      <h2 className="section__title different">Client Projects</h2>
      <div className="client_allProjects">
        <div className="client_projects_container" data-aos="fade-right">
          <div className="client_project">
            <div className="client_project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={meydan} alt="Meydan" />
              </div>
            </div>
            <div className="client_project_information">
              <h2>Meydan Free Zone Protal</h2>
              <p>
                Meydan Free Zone is the one of the most thriving commercial free
                zones in the UAE. Consequently, the Free Zone offers the freedom
                to tailor licenses to meet each company's specific requirements
                and adapt them as needed.
              </p>
              <div>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiReact />
                  <FaBitbucket />
                  <SiPrettier />
                  <VscGithub />
                  <FaJira />
                  <BsFiletypeScss />
                  <SiTailwindcss />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="client_projects_container" data-aos="fade-right">
          <div className="client_project">
            <div className="client_project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={routeship} alt="Routeship" />
              </div>
            </div>
            <div className="client_project_information">
              <h2>Route Ship Logistics</h2>
              <p>
                Route Ship is a supply chain marketplace that provides
                economical and unpretentious truckloads shipping with an
                ingenious, uninterrupted, and cost-effective approach. Route
                Ship always tries to meet service standards with flexibility and
                unconventional adaptability.
              </p>
              <div>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiPhp />
                  <IoLogoJavascript />
                  <SiPrettier />
                  <VscGithub />
                  <BsFiletypeScss />
                  <SiJquery />
                  <SiBootstrap />
                </div>
                {/* <a
                  href="https://www.mistral-data.com/product/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Description
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
