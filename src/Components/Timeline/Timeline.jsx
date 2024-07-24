import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeContext } from "../../Context/Theme";

export const Timeline = () => {
  const [{ themename }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <div className="section mainsection">
      <h2 className="section__title" data-aos="fade-right">
        My <span className="different">Timeline 💫</span>
      </h2>
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
          date={"June 2023 - Present"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Software Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Abacus Consultancy Services Pvt. Ltd, Indore(Office).
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Currently, I play a pivotal role as the react developer, actively
            steering and managing client projects.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date={"March 2022 - Feb 2023"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Full Stack Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Masai School, Bengaluru, Karnataka(Remote)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Joined as a software trainee, Build web applications on react.js,
            node.js, and practice data structures & algorithms.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"July 2024 - July 2026"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student [M.C.A. (ML & AI)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Amity University, Noida
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Studying Machine Learning and Aritificial Intelligence which consists
            of all the subjects across Related Computer Science stream.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"July 2021 - July 2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student [B.Sc. (Computer Science)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            DAVV University, Indore(M.P.)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Studied Computer Science which consists of all the subjects accross
            Related Computer Science stream.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"June 2020 - June 2021"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student [12th (Science)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Gayatri Siksha Niketan, Khargone(M.P.)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Studied Mathematics, Physics and Chemistry.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<StarRateIcon />}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
