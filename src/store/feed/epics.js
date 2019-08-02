import NProgress from 'nprogress'
import { FETCH_FEED, FETCH_COUNTRY_FEED, GET_ARTICLE }from './actions';
import { setNews, setArticleDetail } from './action-creators';
import { fetchFeed } from  './services'

const parseNews = (country) => {
  NProgress.start()
  return fetchFeed(country)
    .map(data => data.articles)
    .map(articles => articles.map( item => ({
      ...item,
      id: Math.random()
    })))
    .map(news => news.filter(article => !!article.urlToImage))
    .map(news => {
        NProgress.done()
        return setNews(news)
      }
    )
}
const getFeed = (action$) => {
  return action$.ofType(FETCH_FEED).switchMap(() => parseNews())
}
const getCountryFeed = (action$, store) => {
  return action$.ofType(FETCH_COUNTRY_FEED).switchMap(() => {
    const country = store.value.getIn(['feed', 'country'])
    return parseNews(country)
  })
}

const filterFeed = ($action, store) => {
  return $action.ofType(GET_ARTICLE).switchMap(action => {
    NProgress.start()
    const news = store.value.getIn(['feed', 'news'])
    const id = action.payload
    return news
    .filter(article => article.get('id') === Number(id))
    .map(filteredArticle => {
      NProgress.done()
      return setArticleDetail(filteredArticle)
    })

  })
}

export default [ getFeed, getCountryFeed, filterFeed]