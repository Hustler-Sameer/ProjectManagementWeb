import Button from "./Button";
export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  /* {projects.map(project => {
        <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
        </li>

        here we are accepting projects in the function then we are using map method to iterate through every project itme and hence we will now return a list item
        */

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase  mb-8 font-bold md:text-xl text-stone-200">
        {" "}
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>Add Project +</Button>
      </div>
      <ul>
        {projects.map((project) => {
            let cssClasses ="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" ;
            if(project.id === selectedProjectId) {
                cssClasses  += "bg-stone-800 text-stone-400 "
            }
            else {
                cssClasses += "text-stone-400"
            }
          return (
            <li key={project.id}>
              <button
                className= {cssClasses} 
                onClick= {
                    () => {
                        onSelectProject(project.id)
                        // doing this to pass the id of project to the app
                    }
                }
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}
