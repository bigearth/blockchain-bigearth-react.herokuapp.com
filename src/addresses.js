const $ = require('jquery');
const React = require('react');
const AddressesHero = require('./addresses-hero.js');
const AddressesSub = require('./addresses-sub.js');
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
