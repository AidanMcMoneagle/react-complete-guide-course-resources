import {useState, useRef} from 'react';

// export default function Player() {

//   const [name, setName] = useState('');

//   const [savedName, setSavedName] = useState('');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleSaveName() {
//     setSavedName(name);
//   }

//   return (
//     <section id="player">
//       {/* this will return the first truthy value. It is the logical OR operator */}
//       <h2>Welcome {savedName || 'unknown entity'}</h2>
//       <p>
//         <input type="text" value={name} onChange={handleNameChange} />
//         <button onClick={handleSaveName}>Set Name</button>
//       </p>
//     </section>
//   );

// }

export default function Player() {

  //use ref is used to reference a DOM element. It can also be used to store a value that doesn't cause a re render when it changes.

  //I can use useRef to store the value of the input field without causing a re render.
  //we only need to useState when we need to trigger a re render of our component for associated UI Changes. If we just need a value from an input on a click of a button with can use a ref. 

  const [savedName, setSavedName] = useState('');

  const nameInputRef = useRef();

  function handleSaveName() {
    setSavedName(nameInputRef.current.value);
    nameInputRef.current.value = ''; //this is imprerative not declarative and in general we want to be declarative with react. This use case is fine though. 
  }

  return (
    <section id="player">
      {/* this will return the first truthy value. It is the logical OR operator */}
      <h2>Welcome {savedName || 'unknown entity'}</h2>
      <p>
        <input ref={nameInputRef} type="text"/>
        <button onClick={handleSaveName}>Set Name</button>
      </p>
    </section>
  );
}