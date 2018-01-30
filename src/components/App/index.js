import React from 'react';

import Header from '../Header';
import Body from '../Body';

import styles from './app.css';

export default () => (
  <div className={styles.app}>
    <Header key="header" />
    <Body key="Body" />
  </div>
);
