import { actionsCreators } from '../store/feed'
import { actions } from '../store/feed'

describe('actions', () => {
  it('should create an action to change the country', () => {
    const expectedAction = {
      type: actions.SET_NEWS_COUNTRY,
      payload: "mx"
    }
    expect(actionsCreators.setNewsCountry('mx')).toEqual(expectedAction)
  })
})