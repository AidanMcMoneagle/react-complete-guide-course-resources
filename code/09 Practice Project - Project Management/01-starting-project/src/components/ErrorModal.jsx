import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ErrorModal({ ref, message, onClose }) {
  const dialogRef = useRef();

  //useImperativeHandle is used to expose a custom API that the parent component can call on a ref.
  useImperativeHandle(ref, () => {
    return {
      open() {
        //call browser API to open the modal
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="error-modal" ref={dialogRef}>
      <h2>Error</h2>
      <p>{message}</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}
