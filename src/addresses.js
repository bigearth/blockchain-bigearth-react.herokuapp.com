import $ from 'jquery';
import React from 'react';
import AddressesHero from './addresses-hero.js';
import AddressesSub from './addresses-sub.js';
const Addresses = React.createClass({
  render: function() {
    return ( 
      <div>
        <AddressesHero url={"https://stageblockchain.bigearth.io/addresses/" + this.props.params.id + ".json"} />
        <AddressesSub url={"https://btc.blockr.io/api/v1/address/txs/" + this.props.params.id + ".json"} />
      </div>
    );
  }
});
module.exports = Addresses;
