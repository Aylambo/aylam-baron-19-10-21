import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from "./store/store.js";
import {ContextProvider} from './services/Context'




import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


