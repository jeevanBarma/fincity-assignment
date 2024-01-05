import "./index.css";
const ProjectCard = ({ project }) => {
  const { title, description, link, url } = project;

  return (
    <li className="li">
      <div className="li-hw-container">
        <div className="div">
          <h2>{title}</h2>
          <p className="p">{description}</p>
          <a
            style={{ textDecoration: "none" }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="view-btn" type="button">
              View Project
            </button>
          </a>
        </div>
      </div>
      <div>
        <img src={url} alt="img" className="project-logo" />
      </div>
    </li>
  );
};

export default ProjectCard;
