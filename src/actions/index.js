import projects from "../projects";
export const fetchProjets = () => {
  return {
    type: "FETCH_PROJECTS",
    payload: projects
  };
};

export const setProject = (project) => {
  return {
    type: "SET_PROJECT",
    payload: project
  }
}