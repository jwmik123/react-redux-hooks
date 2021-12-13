import * as actionTypes from "./actionTypes";

export const addProject = (project) => {
  return {
    type: actionTypes.ADD_PROJECT,
    project,
  };
};

export const simulateHttpRequest = (project) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addProject(project));
    }, 3000);
  };
};
