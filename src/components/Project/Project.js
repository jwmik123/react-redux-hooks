import "./Project.css";

const project = ({ project }) => (
  <div className="project">
    <h1>{project.title}</h1>
    <p>{project.body}</p>
  </div>
);

export default project;
