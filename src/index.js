import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/pt-br';

import App from './App';

moment.locale('pt-br');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
