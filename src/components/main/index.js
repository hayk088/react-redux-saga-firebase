import React from "react";
import { Route, Switch } from "react-router";
import {routes} from '../../routes/router';
const Main = () => {
  return (
    <div className={'main-container'}>
      <Switch>
        {
          routes.map(({path, component}) => (
            <Route key={path} exact path={path} component={component} />
          ))
        }
      </Switch>
      
    </div>
  );
};

export default Main;