import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
