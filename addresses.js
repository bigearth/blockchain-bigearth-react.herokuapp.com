const $ = require('jquery');
const React = require('react');
const AddressesHero = require('./addresses-hero.js');
const Addresses = React.createClass({
  render: function() {
    return ( 
      <AddressesHero url={"https://stageblockchain.bigearth.io/addresses/" + this.props.params.id + ".json"} />
    );
  }
});
module.exports = Addresses;
