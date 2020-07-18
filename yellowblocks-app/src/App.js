import React from 'react';
import './App.css';

import {CharityPage} from './CharityPage';
import {HeaderBar} from './HeaderBar';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderBar />
      </div>

      <div>
        <CharityPage />
      </div>
    </div>
  );
}

export default App;
