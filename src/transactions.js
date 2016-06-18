import $ from 'jquery';
import React from 'react';
const TransactionsHero = require('./transactions-hero.js');
const Transactions = React.createClass({
  render: function() {
    return ( 
      <div className='hero'>
        <section className='container'>
          <section className="row m-b-md">
            <TransactionsHero url={"https://stageblockchain.bigearth.io/transactions/" + this.props.params.id + ".json"} />
          </section>
        </section>
      </div>
    );
  }
});
module.exports = Transactions;
