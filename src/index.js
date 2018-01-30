import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'

import Root from "./containers/RootContainer";
import "./index.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    // eslint-disable-next-line
    document.getElementById("app")
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    render(Root)
  })
}
