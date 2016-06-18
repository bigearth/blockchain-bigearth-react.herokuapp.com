const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
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
      <div class="col-sm-12">
        <h2><span class='glyphicon glyphicon-transfer' aria-hidden='true'></span> Bitcoin <strong>Transaction</strong></h2>
        <ul class='breadcrumb'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={`/blocks/${this.state.data.block}`}>{this.state.data.block}</Link></li>
          <li class="active">Transaction {this.state.data.tx}</li>
        </ul>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              <span class='glyphicon glyphicon-transfer' aria-hidden='true'></span> 
              {this.state.data.tx}
            </h3>
          </div>
          <div class="panel-body">
            <section class="row m-b-md">
              <div class="col-sm-6">
                <h4>Input Address(es)</h4>
                <section class="panel panel-default">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <TransactionVin vins={this.state.vins} />
                    </table>
                  </div>
                </section>
              </div>
              <div class="col-sm-6">
                <h4>Output Address(es)</h4>
                <section class="panel panel-default">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <TransactionVout vouts={this.state.vouts} />
                    </table>
                  </div>
                </section>
              </div>
            </section>
          </div>
          <div class="panel-footer">
            <section class="row m-b-md">
              <div class="col-sm-6">
                <p><span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Days Destroyed: {this.state.data.days_destroyed}</p>
              </div>
              <div class="col-sm-6">
                <p>
                  <span class='btc'>
                    <span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
                    Fee: 
                    <span title='{this.state.data.fee}'>{this.state.data.fee}</span>
                  </span>
                </p>
                <p class='currency'>
                  <span class='btc'>
                    <span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span>
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
