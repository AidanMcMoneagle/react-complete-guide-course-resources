import Field from './Field';
import { useRef } from 'react';
import ErrorModal from './ErrorModal.jsx';

export default function NewProject({ onCancel, onAddProject }) {
  //when the submit button is clicked, we get the values from the form and pass back to parent component.

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  //we will handle forms later on in React. This is most likely bad practice.
  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    console.log({ title, description, dueDate });

    if (!title.trim() || !description.trim() || !dueDate.trim()) {
      showModal();
      return;
    }

    const id = crypto.randomUUID();

    onAddProject({ id, title, description, dueDate, tasks: [] });
  }

  function showModal() {
    modalRef.current.open();
  }

  return (
    <>
      <ErrorModal ref={modalRef} message="Please fill in all fields." />
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-[35rem] max-w-full rounded-xl bg-stone-100 p-6 shadow-sm"
      >
        <div className="mb-8 flex items-center justify-end gap-4">
          <button
            className="rounded-md px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-stone-800 px-6 py-2 text-sm font-semibold text-stone-50 shadow-sm transition-colors hover:bg-stone-950"
            type="submit"
          >
            Save
          </button>
        </div>
        <Field label="Title" id="title" type="text" ref={titleRef} />
        <Field
          label="Description"
          id="description"
          textarea
          rows="5"
          ref={descriptionRef}
        />
        <Field
          label="Due Date"
          id="due-date"
          type="date"
          className="mb-0"
          ref={dueDateRef}
        />
      </form>
    </>
  );
}
