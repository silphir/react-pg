import React from 'react';
import './app.scss';
import Header from './components/header';
import Routes from './router/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes></Routes>
    </Router>
  );
}

export default App;
