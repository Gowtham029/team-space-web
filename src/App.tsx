import React, { FC } from 'react';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App: FC = () => (
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </React.StrictMode>
);

export default App;
