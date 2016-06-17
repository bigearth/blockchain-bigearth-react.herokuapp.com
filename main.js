const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link
const Homepage = require('./homepage.js');
const BlockchainBigEarth = React.createClass({
  render: function() {
    return ( 
      <Homepage />
    );
  }
});

ReactDOM.render( 
  <BlockchainBigEarth />,
  document.getElementById('container')
);
