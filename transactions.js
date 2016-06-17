const $ = require('jquery');
const React = require('react');
const TransactionsHero = require('./transactions-hero.js');
const Transactions = React.createClass({
  render: function() {
    return ( 
      <div class='hero'>
        <section class='container'>
          <section class="row m-b-md">
            <TransactionsHero url={"https://stageblockchain.bigearth.io/transactions/" + this.props.params.id + ".json"} />
          </section>
        </section>
      </div>
    );
  }
});
module.exports = Transactions;
