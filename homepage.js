const $ = require('jquery');
const React = require('react');
const HomepageHero = require('./homepage-hero.js');
const HomepageBlocks = require('./homepage-blocks.js');
const Homepage = React.createClass({
  getInitialState: function() {
    return {
      value: 0,
      all: 21000000,
      current: 0,
      perc: 0,
      difficulty: 0,
      next_difficulty: 0,
      next_difficulty_perc: 0,
      retarget_in: 0
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log(data.data);
        this.setState({
          data: data.data,
          value: data.data.markets.coinbase.value,
          all: data.data.volume.all,
          current: data.data.volume.current,
          perc: data.data.volume.perc,
          market_cap: data.data.markets.coinbase.value * data.data.volume.current,
          difficulty: data.data.last_block.difficulty,
          next_difficulty: data.data.next_difficulty.difficulty,
          next_difficulty_perc: data.data.next_difficulty.perc,
          retarget_in: data.data.next_difficulty.retarget_in
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div>
        <HomepageHero url="https://stageblockchain.bigearth.io/coin.json" />
        <HomepageBlocks url="https://stageblockchain.bigearth.io/blocks/416614,416613,416612,416611,416610,416609,416608,416607,416606,416605,416604,416603,416602,416601,416600,416599,416598,416597,416596,416595.json" />
      </div>
    );
  }
});
module.exports = Homepage;
