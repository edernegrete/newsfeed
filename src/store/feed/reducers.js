import { fromJS } from 'immutable';
import {
  GET_NEWS,
  SET_NEWS,
  SET_NEWS_COUNTRY,
  SET_ARTICLE_DETAIL,
} from './actions';

const initialState = fromJS({
  news: [],
  country: 'us',
  detail: {}
});
const feed = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return state.get('news');
    case SET_NEWS:
      return state.set('news', fromJS(action.payload));
    case SET_NEWS_COUNTRY:
      return state.set('country', fromJS(action.payload));
    case SET_ARTICLE_DETAIL:
      return state.set('detail', fromJS(action.payload));
    default: return state;
  }
};

export default feed;
