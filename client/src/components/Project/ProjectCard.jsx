import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ pdata }) {
  const [project, setProject] = useState(pdata);
  

  return (
    <div className="pr_card_container">
      <div className="pr_card_body">
        <h5 className="pr_card_title">
          Title:{" "}
          <span className="prCard_styling">{project && project.title}</span>
        </h5>
        <h5>The founder is <span className="prCard_styling">{project && project.founder.firstName}</span>.</h5>
        <p>
          This is a{" "}
          <span className="prCard_textStyling">
            {project && project.size_of_project}
          </span>{" "}
          project and can be referred to{" "}
          <span className="prCard_styling">
            {project && project.type_of_project}
          </span>
          . Project now is{" "}
          <span className="prCard_styling">
            {project && project.stage_of_project}
          </span>
          .<span className="prCard_styling"><a target="_blanc" href={`${project&&project.add_link}`}> Click here</a></span>{" "}
          to see a github page of the project. In the Project{" "}
          <span className="prCard_styling">
            {project && project.technologies}
          </span>{" "}
          technologies are used. Here are a few words about it:{" "}
          <span className="prCard_styling">{project && project.few_words}</span>
          In the project{" "}
          <span className="prCard_styling">
            {project && project.participants}
          </span>{" "}
          take participation.
        </p>
      </div>
    </div>
  );
}
