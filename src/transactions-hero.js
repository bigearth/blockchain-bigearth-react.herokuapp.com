import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router'
const TransactionVin = require('./transaction-vin.js');
const TransactionVout = require('./transaction-vout.js');
const TransactionsHero = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      vins: [],
      vouts: []
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data.data,
          vins: data.data.trade.vins,
          vouts: data.data.trade.vouts
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div className="col-sm-12">
        <h2><span className='glyphicon glyphicon-transfer' aria-hidden='true'></span> Bitcoin <strong>Transaction</strong></h2>
        <ul className='breadcrumb'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={`/blocks/${this.state.data.block}`}>{this.state.data.block}</Link></li>
          <li className="active">Transaction {this.state.data.tx}</li>
        </ul>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <span className='glyphicon glyphicon-transfer' aria-hidden='true'></span> 
              {this.state.data.tx}
            </h3>
          </div>
          <div className="panel-body">
            <section className="row m-b-md">
              <div className="col-sm-6">
                <h4>Input Address(es)</h4>
                <section className="panel panel-default">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <TransactionVin vins={this.state.vins} />
                    </table>
                  </div>
                </section>
              </div>
              <div className="col-sm-6">
                <h4>Output Address(es)</h4>
                <section className="panel panel-default">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <TransactionVout vouts={this.state.vouts} />
                    </table>
                  </div>
                </section>
              </div>
            </section>
          </div>
          <div className="panel-footer">
            <section className="row m-b-md">
              <div className="col-sm-6">
                <p><span className='glyphicon glyphicon-remove' aria-hidden='true'></span> Days Destroyed: {this.state.data.days_destroyed}</p>
              </div>
              <div className="col-sm-6">
                <p>
                  <span className='btc'>
                    <span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                    Fee: 
                    <span title='{this.state.data.fee}'>{this.state.data.fee}</span>
                  </span>
                </p>
                <p className='currency'>
                  <span className='btc'>
                    <span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                    Transaction Sum: 
                    <span title='{this.state.data.amount}'>{this.state.data.amount}</span>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = TransactionsHero;
