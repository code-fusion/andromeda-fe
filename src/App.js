import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './utilComponents/PrivateRoute';
import routes from './pages/routes';

class App extends Component {

  routesList = routes.map((route,index) => {
    return (
      route.private ? (
        <PrivateRoute
        key={index}
        exact={route.exact}
        path={route.path}
        render={props => <route.component {...props} />}
        />
      ) : (
        <Route
        key={index}
        exact={route.exact}
        path={route.path}
        render={props => <route.component {...props} />}
        />
      )
    )
  });

  render() {
    return (
      <div className="App">
        <Switch>
        {this.routesList}
        </Switch>
      </div>
    );
  }
}

export default App;
