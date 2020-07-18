import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {CharityPage} from './CharityPage';
import {HeaderBar} from './HeaderBar';
import {AllCharityPage} from './AllCharityPage';
import {AllShopsPage} from './AllShopsPage';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderBar />
      </div>

      <div>
        <AllShopsPage />
      </div>
    </div>
  );
}

export default App;
