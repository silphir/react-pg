import React from 'react';
import './app.scss';
import Header from './components/header/header';
import Routes from './router/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const store = configureStore({ 
  reducer
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

export default App;