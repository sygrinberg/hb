import React, { useReducer, useEffect } from 'react';
import './App.scss';
import { Store } from './store/store';
import Main from './Main/Main';

function App() {
  return (
    <Store>
      <Main />
    </Store>
  );
}

export default App;
