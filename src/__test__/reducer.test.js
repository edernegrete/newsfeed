import { fromJS } from 'immutable';
import { reducer } from '../store/feed'
import { actions } from '../store/feed'
const initialState = fromJS({
  news: [],
  country: 'us',
  detail: {}
});

describe('feed reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_NEWS_COUNTRY', () => {
    expect(
      reducer(initialState, {
        type: actions.SET_NEWS_COUNTRY,
        payload: 'mx'
      })
    ).toEqual(fromJS(
      {
        news: [],
        country: 'mx',
        detail: {}
      }
    ))
  })
})