import { useState, useRef } from 'react';

import ResultModal from './ResultModal.jsx';

// let timer;

//we need to reach out to the ResutModal component from TimerChallenge to show the modal when the timer expires or the user stops the timer. 
//we need to programmatically control the visibility of the modal not using the openn attribute. 


export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const modalRef = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      modalRef.current.showModal(); //this is how we can programmatically control the visibility of the modal. We can call the showModal method on the dialog element to show the modal and the close method to hide the modal.
      //doing it this way means the modal will have an overlay behind it.
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={modalRef} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}





