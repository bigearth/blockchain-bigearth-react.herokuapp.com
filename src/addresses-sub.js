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
    fetch(this.props.url)
    .then((response) => response.text())
    .then((responseText) => {
      let data = JSON.parse(responseText);
      this.setState({
        data: data.data,
        txs: data.data.txs
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  render() {
    return ( 
      <AddressesTransaction txs={this.state.txs} />
    );
  }
}

export default AddressesSub;
