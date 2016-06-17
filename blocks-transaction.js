const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const BlocksTransactionVin = require('./blocks-transaction-vin.js');
const BlocksTransactionVout = require('./blocks-transaction-vout.js');
const BlocksTransaction = React.createClass({
  render: function() {
    return ( 
      <div>
      {
        this.props.data.map(function(item, index) {
          return <div key={index} class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> 
                <Link to={`/transactions/${item.tx}`}>{item.tx}</Link>
              </h3>
            </div>
            <div class="panel-body">
              <section class="row m-b-md">
                <div class="col-sm-6">
                  <h4>Input Address(es)</h4>
                  <section class="panel panel-default">
                    <div class="table-responsive">
                      <BlocksTransactionVin data={item.trade.vins} />
                    </div>
                  </section>
                </div>
                <div class="col-sm-6">
                  <h4>Output Address(es)</h4>
                  <section class="panel panel-default">
                    <div class="table-responsive">
                      <BlocksTransactionVin data={item.trade.vouts} />
                    </div>
                  </section>
                </div>
              </section>
            </div>
            <div class="panel-footer">
              <section class="row m-b-md">
                <div class="col-sm-6">
                  <p><span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Days Destroyed: {item.days_destroyed}</p>
                </div>
                <div class="col-sm-6">
                  <p>
                    <span class='btc'>
                      <span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                      Fee: 
                      <span title='{item.fee}'>{item.fee}</span>
                    </span>
                  </p>
                  <p class='currency'>
                    <span class='btc'>
                      <span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                      Transaction Sum: 
                      <span title='{item.amount}'>{item.vout_sum}</span>
                    </span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        })
      }
      </div>
    );
  }
});
module.exports = BlocksTransaction;
