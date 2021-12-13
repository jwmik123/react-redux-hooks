import { useState } from "react";
import "./AddProject.css";

const AddProject = ({ saveProject }) => {
  const [project, setProject] = useState();

  const handleProjectData = (e) => {
    setProject({
      ...project,
      [e.target.id]: e.target.value,
    });
  };

  const addNewProject = (e) => {
    e.preventDefault();
    saveProject(project);
  };

  return (
    <form onSubmit={addNewProject} className="add-project">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleProjectData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleProjectData}
      />
      <button>Add Project</button>
    </form>
  );
};

export default AddProject;
