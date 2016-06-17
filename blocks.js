const $ = require('jquery');
const React = require('react');
const BlocksHero = require('./blocks-hero.js');
const BlocksSubs = require('./blocks-sub.js');
const Blocks = React.createClass({
  render: function() {
    return ( 
      <div>
        <div class='hero'>
          <section class='container'>
            <section class='row m-b-md'>
              <div class='col-sm-12'>
                <BlocksHero url="https://stageblockchain.bigearth.io/blocks/416568.json" />
              </div>
            </section>
          </section>
        </div>
        <div class='sub'>
          <section class='container'>
            <section class="row m-b-md">
              <div class="col-sm-12">
                <BlocksSubs url="https://stageblockchain.bigearth.io/blocks/transactions/416568.json" />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
});
module.exports = Blocks;
