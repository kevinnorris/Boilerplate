import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import EasterEgg from '../../containers/EasterEgg';
import NoMatch from '../NoMatch';

import styles from './body.css';

export default () => (
  <div className={styles.bodyWrapper}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact paht="/easterEgg" component={EasterEgg} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);
