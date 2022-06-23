import {GET_NEWS_FEED, RESET_SEARCH_RESULTS, SEARCH_NEWS, SET_LANGUAGE} from './actions';

const initialState = {
  newsFeed: [],
  searchResults: [],
  selectedLanguage: 'en'
};
const feedReducer = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return {...state, newsFeed: action.payload};
    case SEARCH_NEWS:
      return {...state, searchResults: action.payload};
    case RESET_SEARCH_RESULTS:
      return {...state, searchResults: []};
    case SET_LANGUAGE:
      return {...state, selectedLanguage: action.payload}
    default:
      return state;
  }
};
export default feedReducer;