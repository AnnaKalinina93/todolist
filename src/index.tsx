import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { fetchDataAction } from './store/api-action';
import { redirect } from './store/middlewares/redirect';
import { configureStore } from '@reduxjs/toolkit';
import browserHistory from './browser-history';
import { Router as BrowserRouter } from 'react-router-dom';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchDataAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
