import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router'
const BlocksTransactionVin = require('./blocks-transaction-vin.js');
const BlocksTransactionVout = require('./blocks-transaction-vout.js');
const BlocksTransaction = React.createClass({
  render: function() {
    return ( 
      <div>
      {
        this.props.data.map(function(item, index) {
          return <div key={index} className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-transfer" aria-hidden="true"></span> 
                <Link to={`/transactions/${item.tx}`}>{item.tx}</Link>
              </h3>
            </div>
            <div className="panel-body">
              <section className="row m-b-md">
                <div className="col-sm-6">
                  <h4>Input Address(es)</h4>
                  <section className="panel panel-default">
                    <div className="table-responsive">
                      <BlocksTransactionVin data={item.trade.vins} />
                    </div>
                  </section>
                </div>
                <div className="col-sm-6">
                  <h4>Output Address(es)</h4>
                  <section className="panel panel-default">
                    <div className="table-responsive">
                      <BlocksTransactionVin data={item.trade.vouts} />
                    </div>
                  </section>
                </div>
              </section>
            </div>
            <div className="panel-footer">
              <section className="row m-b-md">
                <div className="col-sm-6">
                  <p><span className='glyphicon glyphicon-remove' aria-hidden='true'></span> Days Destroyed: {item.days_destroyed}</p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <span className='btc'>
                      <span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                      Fee: 
                      <span title='{item.fee}'>{item.fee}</span>
                    </span>
                  </p>
                  <p className='currency'>
                    <span className='btc'>
                      <span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
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
