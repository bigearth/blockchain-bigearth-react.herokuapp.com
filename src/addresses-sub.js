const $ = require('jquery');
const React = require('react');
const AddressesTransaction = require('./addresses-transaction.js');
const AddressesSub = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      txs: []
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data.data,
          txs: data.data.txs
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <AddressesTransaction txs={this.state.txs} />
    );
  }
});
module.exports = AddressesSub;
