import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { projects } from "../helpers/projectsList";

const SingleProject = () => {
  const { id } = useParams();

  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={project.imgBig}
              alt=""
              className="project-details__cover"
            />
          </a>

          <div className="project-details__desc">
            <span style={{ color: "gray" }}>{project.description}</span>
            <p style={{ marginTop: "25px" }}>Used skills: {project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} appLink={project.link} />
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
