import React, { useState, useEffect, useRef } from 'react';
import Header from './Header'
import { watchFile } from 'fs';

function Hooks() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banane');

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

  

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h2>useState</h2>
          <p>Vous avez cliqué {count} fois</p>
          <button onClick={() => setCount(count + 1)}>
          {count}
          </button>
        </div>

        <div>
          <h2>useEffect</h2>
          <p>Le fruit est {fruit}</p>
          <button onClick={() => setFruit('orange')}>
          {fruit}
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Hooks