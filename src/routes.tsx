import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SchoolList from './pages/SchoolList';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={SchoolList} path='/school-list' />
    </BrowserRouter>
  );
};

export default Routes;
