const $ = require('jquery');
const React = require('react');
const HomepageHero = require('./homepage-hero.js');
const HomepageBlocks = require('./homepage-blocks.js');
const Homepage = React.createClass({
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
