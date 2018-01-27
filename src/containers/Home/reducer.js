import { INCREMENT_CLICKS, DECREMENT_CLICKS, RESTE_CLICKS } from "./actions";

const initialState = {
  clicks: 0
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_CLICKS:
      return { ...state, clicks: state.clicks + 1 };
    case DECREMENT_CLICKS:
      return { ...state, clicks: state.clicks - 1 };
    case RESTE_CLICKS:
      return { ...state, clicks: 0 };
    default:
      return state;
  }
}

export default homeReducer;

export const NAME = 'home';
