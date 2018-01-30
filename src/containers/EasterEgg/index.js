import React from 'react';

import ReactLogo from '../../assets/react-logo.png';
import ReduxLogo from '../../assets/redux-logo.png';
import ReactReduxLogo from '../../assets/react-redux-logo.png';

import styles from './easterEgg.scss';

export default () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={ReactLogo} alt="React" />
    <p>+</p>
    <img className={styles.logo} src={ReduxLogo} alt="Redux" />
    <p>=</p>
    <img className={styles.logo} src={ReactReduxLogo} alt="React-Redux" />
  </div>
);