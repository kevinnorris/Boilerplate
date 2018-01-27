import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer, {NAME as homeName} from '../containers/Home/reducer';

const rootReducer = combineReducers({
  [homeName]: homeReducer,
  router: routerReducer,
});

export default rootReducer;