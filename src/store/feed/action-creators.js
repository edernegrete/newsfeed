import {
  FETCH_FEED,
  FETCH_COUNTRY_FEED,
  GET_ARTICLE,
  SET_ARTICLE_DETAIL,
  SET_NEWS,
  SET_NEWS_COUNTRY
} from './actions';

const fetchFeed = () => ({
  type: FETCH_FEED
});
const fetchCountryFeed = payload => ({
  type: FETCH_COUNTRY_FEED,
  payload
});
const setNews = payload => ({
  type: SET_NEWS,
  payload
});
const setNewsCountry = payload => ({
  type: SET_NEWS_COUNTRY,
  payload
});
const setArticleDetail = payload => ({
  type: SET_ARTICLE_DETAIL,
  payload
});

const getArticle = payload => ({
  type: GET_ARTICLE,
  payload
})

export {
  fetchFeed,
  fetchCountryFeed,
  setArticleDetail,
  setNews,
  setNewsCountry,
  getArticle
};
