// External imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// Local imports
import 'normalize.css/normalize.css';
import { store } from '@store/store';
import App from '@app/App.jsx';

// Constants definition
const MOUNT_NODE = document.getElementById('root');

// Rendering the APP
render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  MOUNT_NODE
);
