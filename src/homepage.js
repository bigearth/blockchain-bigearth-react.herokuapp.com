import $ from 'jquery';
import React from 'react';
import HomepageHero from './homepage-hero.js';
import HomepageBlocks from './homepage-blocks.js';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div>
        <HomepageHero url="https://stageblockchain.bigearth.io/coin.json" />
        <HomepageBlocks url="https://stageblockchain.bigearth.io/blocks/416614,416613,416612,416611,416610,416609,416608,416607,416606,416605,416604,416603,416602,416601,416600,416599,416598,416597,416596,416595.json" />
      </div>
    );
  }
}

export default Homepage;
