import $ from 'jquery';
import React from 'react';
import TransactionsHero from './transactions-hero.js';
class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
}
module.exports = Transactions;
