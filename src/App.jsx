
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectsSideBar";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar></ProjectSideBar>
      <NewProject />
    </main>
  );
}

export default App;