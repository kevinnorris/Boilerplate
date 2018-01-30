import React from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectClicks } from "./selectors";
import reactReduxLogo from '../../assets/react-redux-logo.png';
import { incrementClick as incrementClickAction } from './actions';

import styles from './home.css';

const HomePage = ({ clicks, incrementClick }) => (
  <div>
    <img src={reactReduxLogo} width="150px" alt="react-redux logo" />
    <h2>Clicks: {clicks}</h2>

    <button className={styles.button} onClick={incrementClick}>
      Click Me!
    </button>
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
