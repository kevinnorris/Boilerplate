import React from "react";
import { Route, Link } from "react-router-dom";

import styles from "./header.scss";

const LinkToHome = () => <Link to="/" className={styles.navlink}>Home</Link>;

export default () => (
  <div className={styles.header}>
    <h1 className={styles.title}>React Redux Boilerplate</h1>
    <Route path="/:any" component={LinkToHome} />
  </div>
);
