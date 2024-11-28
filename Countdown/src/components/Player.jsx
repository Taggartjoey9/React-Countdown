import { useState, useRef } from 'react';

export default function Player() {

  const [ typedName, setTypedName ] = useState(null);

  const updatedName = useRef();

  function handleName() {
    setTypedName(updatedName.current.value)
  }

    return (
      <section id="player">
        <h2>Welcome {typedName ?? 'Unknown User'}</h2>
        <p>
          <input ref={updatedName} type="text" />
          <button onClick={handleName}>Set Name</button>
        </p>
      </section>
    );
  }