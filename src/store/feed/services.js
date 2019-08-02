import 'isomorphic-fetch'
import { ajax } from 'rxjs/observable/dom/ajax';

const API_KEY = '2df47d38d91f4aa8994e0355bf61308a'
function fetchFeed(country) {
  return ajax.getJSON(`https://newsapi.org/v2/top-headlines?country=${country || 'us'}&apiKey=${API_KEY}`) 
}

export {
  fetchFeed,
}
