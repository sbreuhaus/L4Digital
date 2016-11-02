import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import About from 'About';
import Weather from 'Weather';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About}></Route>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
