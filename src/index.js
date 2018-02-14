import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/RootContainer';
import './index.scss';

const render = Component => {
  ReactDOM.render(
    <Component />,
    // eslint-disable-next-line
    document.getElementById('app')
  );
};

render(Root);
