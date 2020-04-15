import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MySum from './App/MySum';
import {Provider} from 'react-redux'
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <Suspense fallback={'...loading'}>
          <MySum />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
