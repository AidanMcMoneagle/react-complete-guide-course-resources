import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();

  //here we are using the useImperativeHandle hook to expose a custom API to the parent component. The first argument is the ref that we want to expose the API on, and the second argument is a function that returns an object with the methods that we want to expose. 
  //In this case, we are exposing an open method that calls the showModal method on the dialog element to show the modal. We can also expose a close method that calls the close method on the dialog element to hide the modal.
  
  //this is good practice as we enscapsulate the implementation details for showing and hiding the modal within the ResultModal component and only expose the methods that we want the parent component to use. This way, if we want to change the implementation of how the modal is shown or hidden in the future, we can do so without affecting the parent component as long as we keep the same API.
 
  //first argument is the ref
  //second argument is a function that returns an object with the methods we want to expose to the parent component


  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;