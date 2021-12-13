import React from "react";
import { connect } from "react-redux";
import Project from "../components/Project/Project";
import AddProject from "../components/AddProject/AddProject";
import { simulateHttpRequest } from "../store/actionCreator";

const Projects = ({ projects, saveProject }) => {
  return (
    <div>
      <AddProject saveProject={saveProject} />
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveProject: (project) => dispatch(simulateHttpRequest(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
