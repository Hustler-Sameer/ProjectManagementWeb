import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectsSideBar";
function App() {
const [projectsState , setProjectsState]= useState( {
    selectedProjectId : undefined,
    projects: []
    // we are managing this as objects 
})

function handleStartAddProject () {
    setProjectsState( prevState => {
        return {
            ...prevState, // this to make sure that we dont lose old project state
            selectedProjectId : null ,

        }
    })
}
function handleAddProject(projectData) {
  setProjectsState(prevState=> {
    const projectId = Math.random();

    const newProject = {
      ...projectData ,
      id: projectId
    }
    return {
      ...prevState,
      selectedProjectId: undefined,   // setting this to undefined to set ui back to NoselectedProject page
      projects: [...prevState.projects , newProject ]
      
    }
  });
  
  }
  console.log(projectsState) ;
  // now we will be passing this projects to sidebar to display them

  let content ;
  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject = {handleStartAddProject}  projects={projectsState.projects}/>
      {content}
      
    </main>
  );
}

export default App;
