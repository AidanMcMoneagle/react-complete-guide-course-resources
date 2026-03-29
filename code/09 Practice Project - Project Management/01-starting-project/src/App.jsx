import Sidebar from './components/Sidebar';
import Home from './components/Home';
import NewProject from './components/NewProject';
import ViewProject from './components/ViewProject';
import { useState } from 'react';

function App() {
  //need to hold some state for the click of the add project button.
  //Once this button is  clicked, we should not show the home component but instead show the new NewProject Component.

  const [createNewProject, setCreateNewProject] = useState(false);

  //originally an empty array.
  const [projects, setProjects] = useState([]);

  //we hold the selectedProjectId here.
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  //this is re-evaulated on every render. We could optimize this with useMemo but it is not necessary at this point.
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;

  const shouldShowHome =
    !createNewProject &&
    (projects.length === 0 || selectedProjectId === null || !selectedProject);

  function handleAddProjectClick() {
    setCreateNewProject(true);
  }

  function handleCancelNewProject() {
    setCreateNewProject(false);
  }

  function handleNewProject(newProject) {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
    setCreateNewProject(false);
  }

  function handleViewProjectClick(projectId) {
    setCreateNewProject(false);
    setSelectedProjectId(projectId);
  }

  function handleAddProjectTask(projectId, task) {
    setProjects((prevProjects) => {
      return prevProjects.map((p) => {
        if (p.id !== projectId) {
          return p;
        } else {
          return {
            ...p, //copy all object properties of the project.
            tasks: [...p.tasks, task], //overwrite the tasks property with a new array. Copy all existing tasks and add the new task to the end of the array.
          };
        }
      });
    });
  }

  function handleDeleteProjectTask(projectId, taskId) {
    //when we update state of a reference type we should never mutate the existing state.
    //We should always create a new copy of the state and then update that copy and return it.
    //This is because react relies on reference equality to determine if the state has changed. If we mutate the existing state, react will not detect the change and will not re render the component.
    setProjects((prevProjects) => {
      return prevProjects.map((p) => {
        if (p.id !== projectId) {
          return p;
        } else {
          return {
            ...p,
            tasks: p.tasks.filter((t) => t.id !== taskId),
          };
        }
      });
    });
  }

  //TODO. check if this is okay. filter creates a new array so should be fine.
  function handleDeleteProject(projectId) {
    setProjects((prevProjects) => {
      return prevProjects.filter((p) => p.id !== projectId);
    });

    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    }

    //want to show home screen once we delete a project.
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onAddProjectClick={handleAddProjectClick}
          projects={projects}
          onViewProjectClick={handleViewProjectClick}
        />
        {createNewProject ? (
          <NewProject
            onCancel={handleCancelNewProject}
            onAddProject={handleNewProject}
          />
        ) : shouldShowHome ? (
          <Home />
        ) : (
          <ViewProject
            project={selectedProject}
            handleAddTask={handleAddProjectTask}
            handleDeleteTask={handleDeleteProjectTask}
            handleDeleteProject={handleDeleteProject}
          />
        )}
      </main>
    </>
  );
}

export default App;
