export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      {/*in the form element, the method="dialog" attribute allows the dialog to be closed when the button is clicked*/}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
