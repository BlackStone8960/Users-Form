import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import UserList from '../component/UserList';
import EditInfo from '../component/EditInfo';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={UserList} exact={true} />
        <Route path="/edit/:id" component={EditInfo} />
      </Switch>
    </div>
  </Router>
);

export { history, AppRouter as default };