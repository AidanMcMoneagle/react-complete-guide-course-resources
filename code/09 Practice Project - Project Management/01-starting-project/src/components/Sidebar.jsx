export default function Sidebar({
  onAddProjectClick,
  projects,
  onViewProjectClick,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2>YOUR PROJECTS</h2>
      <button
        onClick={onAddProjectClick}
        className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
      >
        Add Project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {/*Will be a button that will call a function with specific argument used to identify the project. Will then show the project.*/}
            <button onClick={() => onViewProjectClick(project.id)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
