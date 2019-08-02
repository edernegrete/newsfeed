import { Provider } from 'react-redux';
import React from 'react';
import BaseStyles from './utils/base-styles';
import storeInit from './store/configureStore';
import Router from './router';

const store = storeInit();
function App() {
  return (
    <div>
      <BaseStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}
export default App;
