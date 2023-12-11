import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    // we are managing this as objects
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, // this to make sure that we dont lose old project state
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined, // setting this to undefined to set ui back to NoselectedProject page
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectsState);
  // now we will be passing this projects to sidebar to display them

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id != SelectedProjectForSelectedProject
        
        ),
      };
    });
  }
  let SelectedProjectForSelectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  // this find method is used here to find the element by id
  console.log(SelectedProjectForSelectedProject);
  let content = <SelectedProject project={SelectedProjectForSelectedProject} onDelete={handleDeleteProject}/>;
  // setting it to default
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
