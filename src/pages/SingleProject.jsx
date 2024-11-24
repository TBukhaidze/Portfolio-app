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
          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={project.imgBig}
              alt=""
              className="project-details__cover"
            />
          </a>

          <BtnGitHub link={project.gitHubLink} appLink={project.link}/>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
