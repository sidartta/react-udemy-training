// External imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import App from './App.jsx';
import 'normalize.css/normalize.css';
import { store } from './store/store';

// Constants definition
const MOUNT_NODE = document.getElementById('root');
const jsx = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Rendering the APP
render(jsx, MOUNT_NODE);
