import React from 'react';
import './app.scss';
import Header from './components/header/header';
import Routes from './router/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { userReducer } from './store/app.action';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({ 
  reducer: userReducer
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