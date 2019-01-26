import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import GlobalStyle from './style';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

import store from './store';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <HashRouter>
            <div>
              <Route path='/' exact component={Home} />
              <Route path='/detail' exact component={Detail} />
              <Route path='/login' exact component={Login} />
            </div>
          </HashRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
