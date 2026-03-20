import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //if we need to edit the state based on the previous state, we should use the functional form of the state updater function. This is because the state updates are asynchronous and may be batched together, so we cannot rely on the current state value when updating it. By using the functional form, we can ensure that we are working with the most up-to-date state value when updating it.
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
