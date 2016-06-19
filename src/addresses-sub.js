import $ from 'jquery';
import React from 'react';
import AddressesTransaction from './addresses-transaction.js';
class AddressesSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      txs: []
    };
  }
  componentDidMount() {
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
  }
  render() {
    return ( 
      <AddressesTransaction txs={this.state.txs} />
    );
  }
}

export default AddressesSub;
