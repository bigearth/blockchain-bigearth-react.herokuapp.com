import $ from 'jquery';
import React from 'react';
const Link = require('react-router').Link
const AddressesHero = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      address: '',
      balance: 0,
      totalreceived: 0,
      nb_txs: 0
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
          address: data.data.address,
          balance: data.data.balance,
          totalreceived: data.data.totalreceived,
          nb_txs: data.data.nb_txs
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div className="container">
        <section className="row m-b-md">
            <div className="col-sm-12">
              <h2><span className='glyphicon glyphicon-qrcode' aria-hidden='true'></span> Bitcoin <strong>Address</strong></h2>
              <ul className='breadcrumb'>
                <li><Link to={"/"}>Home</Link></li>
                <li className='active'>Address {this.state.address}</li>
              </ul>
            </div>
        </section>
        <section className="row m-b-md">
            <div className="col-sm-12">
              <section className="panel panel-default">
                  <div className="table-responsive">
                      <table className="table table-striped">
                          <tbody>
                              <tr>
                                  <td><span className='glyphicon glyphicon-qrcode' aria-hidden='true'></span> Address</td>
                                  <td>{this.state.address}</td>
                              </tr>
                              <tr>
                                  <td><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Balance</td>
                                  <td>{this.state.balance}</td>
                              </tr>
                              <tr>
                                  <td><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Received</td>
                                  <td>{this.state.totalreceived}</td>
                              </tr>
                              <tr>
                                  <td><span className='glyphicon glyphicon-transfer' aria-hidden='true'></span> Transactions</td>
                                  <td>{this.state.nb_txs}</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>
            </div>
        </section>
      </div>
    );
  }
});

module.exports = AddressesHero;
