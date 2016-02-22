import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from 'components';
import HomeComponent, { reducer as homeReducer } from 'components/home';
import Route2Component, { reducer as route2Reducer, asyncEnter as route2asyncEnter } from 'components/route-2';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={HomeComponent} reducer={homeReducer} />
    <Route path="/route-2" component={Route2Component} reducer={route2Reducer} asyncEnter={route2asyncEnter} />
  </Route>
);
