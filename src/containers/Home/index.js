import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectClicks } from "./selectors";

const HomePage = ({ clicks }) => (
  <div>
    <h1>Home Page</h1>
    <h2>Clicks: {clicks}</h2>
  </div>
);

HomePage.propTypes = {
  clicks: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  clicks: selectClicks()
});

export default connect(mapStateToProps, null)(HomePage);
