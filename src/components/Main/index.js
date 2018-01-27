import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../containers/Home";
import NoMatch from "../NoMatch";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NoMatch} />
  </Switch>
);
