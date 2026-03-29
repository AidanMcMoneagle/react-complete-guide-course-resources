import { useState, useRef } from 'react';
import ErrorModal from './ErrorModal';

export default function ViewProject({
  project,
  handleAddTask,
  handleDeleteTask,
  handleDeleteProject,
}) {
  //need to define a function to handle the click of add task.
  //the function should add a task via a callback which modifies the project and the projects state.

  const taskInputRef = useRef();
  const modalRef = useRef();

  function addTask() {
    if (!taskInputRef.current.value) {
      modalRef.current.open();
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: taskInputRef.current.value,
    };

    //modifies the projects array, this is the single source of truth for all projects.
    handleAddTask(project.id, newTask);

    taskInputRef.current.value = '';
  }

  function deleteTask(taskId) {
    handleDeleteTask(project.id, taskId);
  }

  return (
    <>
      <ErrorModal ref={modalRef} message="Please populate the task" />
      <section className="max-w-full w-full rounded-xl bg-stone-100 p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-stone-700">{project.title}</h1>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="rounded-md px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-red-700"
          >
            Delete
          </button>
        </div>
        <p className="mb-2 text-sm text-stone-500">{project.dueDate}</p>
        <p className="whitespace-pre-wrap text-stone-700">
          {project.description}
        </p>
        <h2 className="mb-4 text-lg font-semibold text-stone-700">Tasks</h2>
        <div className="flex items-center gap-3">
          <input
            className="w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 text-stone-700 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-300"
            type="text"
            placeholder="Add a new task"
            ref={taskInputRef}
          />
          <button
            onClick={addTask}
            className="shrink-0 rounded-md bg-stone-800 px-4 py-2 text-sm font-semibold text-stone-50 transition-colors hover:bg-stone-950"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-md bg-stone-50 px-3 py-2"
            >
              <span className="text-stone-700">{task.title}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-sm font-medium text-stone-500 transition-colors hover:text-red-700"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
