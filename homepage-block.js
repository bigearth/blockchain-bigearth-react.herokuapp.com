const $ = require('jquery');
const React = require('react');
const HomepageBlock = React.createClass({
  render: function() {
    return ( 
      <tr>
        <td><a href='#'>{this.state.nb}</a></td>
        <td>{this.state.time_utc}</td>
        <td>{this.state.nb_txs}</td>
        <td>{this.state.fee}</td>
        <td>{this.state.size}</td>
        <td>{this.state.days_destroyed}</td>
      </tr>
    );
  }
});
module.exports = HomepageBlock;
