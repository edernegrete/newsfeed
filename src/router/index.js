import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { history } from '../store/configureStore';
import { Home, Detail } from '../pages';
import Nav from '../components/common/nav';
import Footer from '../components/common/footer';
function Routes() {
  return (
    <ConnectedRouter history={history}>
        <Nav/>
        <Route
          path='/'
          exact
          component={Home}
        />
        <Route
          path='/detail/:id'
          exact
          component={Detail}
        />
        <Footer/>
    </ConnectedRouter>
  );
}

export default Routes;
