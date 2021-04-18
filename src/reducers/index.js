import { combineReducers } from 'redux';
import projects from "../projects";

const projectsReducer = (projects = [], action ) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return action.payload;
    default:
      return projects;
  }
}

const projectReducer = (project = projects[0], action) => {
  switch (action.type) {
    case "SET_PROJECT":
      return action.payload;
    default:
      return project;
  }
}

export default combineReducers( {
  projects: projectsReducer,
  project: projectReducer
})