import React from 'react';
import './App.css';

import {CharityPage} from './CharityPage';
import {HeaderBar} from './HeaderBar';
import {AllCharityPage} from './AllCharityPage';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderBar />
      </div>

      <div>
        <AllCharityPage />
      </div>
    </div>
  );
}

export default App;
