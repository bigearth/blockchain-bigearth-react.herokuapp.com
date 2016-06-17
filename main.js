const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link
const Homepage = require('./homepage.js');
const Blocks = require('./blocks.js');
const BlockchainBigEarth = React.createClass({
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
  </Router>,
  document.getElementById('container')
);
