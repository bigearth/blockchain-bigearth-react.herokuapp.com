/* @flow */

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Homepage from './homepage.js';
import Blocks from './blocks.js';
import Transactions from './transactions.js';
import Addresses from './addresses.js';
const BlockchainBigEarth: any = React.createClass({
  render: function() {
    return ( 
      <Homepage />
    );
  }
});

ReactDOM.render( 
  <Router>
    <Route path="/" component={BlockchainBigEarth} />
    <Route path="/blocks/:id" component={Blocks} />
    <Route path="/transactions/:id" component={Transactions} />
    <Route path="/addresses/:id" component={Addresses} />
  </Router>,
  document.getElementById('container')
);
