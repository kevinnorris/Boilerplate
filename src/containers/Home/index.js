import React from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectClicks } from "./selectors";
import reactReduxLogo from '../../assets/react-redux-logo.png';
import { incrementClick as incrementClickAction } from './actions';

import styles from './home.scss';

const HomePage = ({ clicks, incrementClick }) => (
  <div>
    <div className={styles.logoWrapper}>
      <img src={reactReduxLogo} height={`${clicks%200}px`} alt="react-redux logo" />
    </div>
    <h2>Clicks: {clicks}</h2>

    <button className={styles.button} onClick={incrementClick}>
      Click Me!
    </button>

    {clicks > 400 && <Link to="/easterEgg" className={styles.easterEggLink}>What's this?</Link>}
  </div>
);

HomePage.propTypes = {
  clicks: PropTypes.number.isRequired,
  incrementClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  clicks: selectClicks(state),
});

const mapDispatchToProps = dispatch => ({
  incrementClick: bindActionCreators(incrementClickAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
