import React from 'react';
import './css/app.css';
// import Test from './components/test'
import Artistas from './components/artistas';
import Ticket from './components/ticket';
function App() {
  return (
    <div className="App">
      <Artistas className="art" />
      <Ticket />
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
