import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Pobieramy dane z serwera Flask po załadowaniu komponentu
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Pusty array [] oznacza, że hook useEffect wykona się tylko raz po załadowaniu komponentu

  return (
    <div>
      <h1>Invoice App</h1>
      {data ? (
        <div>
          <h2>Client Data:</h2>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
