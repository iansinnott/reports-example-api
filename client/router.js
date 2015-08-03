import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './App/App.js';
import Create from './App/Create.js';
import List from './App/List.js';

const routes = (
  <Route path='/' handler={App}>
    <DefaultRoute name='reports' handler={List} />
    <Route name='new' handler={Create} />
  </Route>
);

export default routes;
