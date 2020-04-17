import React from 'react';
import Country from './components/country';
import {AppForm} from './components/appForm';

import './App.css';



function App() {
  return (
    <div>
          COVID-19 Tracker{<br/>}
          <AppForm />
          <Country />
    </div>
  );
}

export default App;
