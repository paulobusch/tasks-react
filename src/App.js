import React from 'react';

import Login from './auth/login';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Login />
    </Provider>
  );
}

export default App;
