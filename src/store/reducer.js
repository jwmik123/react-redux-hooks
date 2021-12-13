import * as actionTypes from "./actionTypes";

const initialState = {
  projects: [
    { id: 1, title: "project 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "project 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      const newProject = {
        id: Math.random(),
        title: action.project.title,
        body: action.project.body,
      };
      return {
        ...state,
        projects: state.projects.concat(newProject),
      };
    default:
      return state;
  }
};

export default reducer;
