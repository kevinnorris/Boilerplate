import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";

import configureStore from "../../store/configureStore";
import App from "../../components/App";

const store = configureStore();
const history = createBrowserHistory();

const RootContainer = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default RootContainer;
