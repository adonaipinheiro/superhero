import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Heroes from '../pages/Heroes';
import PageNotFound from '../pages/PageNotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/heroes/:id" exact component={Heroes} />
    {/* <Route component={PageNotFound} /> */}
  </Switch>
);

export default Routes;
