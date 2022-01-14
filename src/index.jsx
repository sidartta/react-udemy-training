// External imports
import React from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

// Local imports
import 'normalize.css/normalize.css';
import { store } from '@store/store';
import App from '@app/App.jsx';

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
