import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
