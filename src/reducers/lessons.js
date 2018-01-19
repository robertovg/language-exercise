import * as constants from '../data/constants';

function lessons(state = {}, action) {
  switch (action.type) {
    case constants.fetchInit:
      return {
        ...state,
        isLoaded: false,
        items: [],
        error: '',
      };
    case `${constants.fetchInit}_SUCCEEDED`:
      return {
        ...state,
        isLoaded: true,
        items: [...action.lessons],
      };
    case constants.exception:
      return {
        ...state,
        isLoaded: false,
        error: action.message,
      };
    default:
      return state;
  }
}

export default lessons;
