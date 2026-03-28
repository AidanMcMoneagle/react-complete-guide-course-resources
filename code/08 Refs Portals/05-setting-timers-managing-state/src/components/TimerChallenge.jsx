import { useState } from 'react';

//VERY IMPORTANT!!!!!
//any values defined outside of the component function will be shared across all instances of the component. This is because the component function is called multiple times to create multiple instances of the component, but the code outside of the component function is only executed once when the module is loaded. This can lead to unexpected behavior if we are not careful. For example, if we define a variable outside of the component function and then modify it inside the component function, that modification will affect all instances of the component that use that variable.

export default function TimerChallenge({ title, targetTime }) {

  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {

    //setTimeout returns a timer ID that can be used to clear the timeout later. We can store this timer ID in a ref so that we can access it later when we want to clear the timeout.
    timer.current =setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
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
  );
}
