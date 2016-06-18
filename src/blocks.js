const $ = require('jquery');
const React = require('react');
const BlocksHero = require('./blocks-hero.js');
const BlocksSub = require('./blocks-sub.js');
const Blocks = React.createClass({
  render: function() {
    return ( 
      <div>
        <div className='hero'>
          <section className='container'>
            <section className='row m-b-md'>
              <div className='col-sm-12'>
                <BlocksHero url={"https://stageblockchain.bigearth.io/blocks/" + this.props.params.id + ".json"} />
              </div>
            </section>
          </section>
        </div>
        <div className='sub'>
          <section className='container'>
            <section className="row m-b-md">
              <div className="col-sm-12">
                <BlocksSub url={"https://stageblockchain.bigearth.io/blocks/transactions/" + this.props.params.id + ".json"} />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
});
module.exports = Blocks;
