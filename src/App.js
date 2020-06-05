import React from 'react';
import './css/app.css';
import Artistas from './components/artistas';
import Ticket from './components/ticket';
function App() {
  return (
    <div className="App">
      <Artistas className="art" />
      <Ticket />
    </div>
  );
}

export default App;
