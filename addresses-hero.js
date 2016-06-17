const $ = require('jquery');
const React = require('react');
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
      <div>
        <section class="row m-b-md">
            <div class="col-sm-12">
              <h2><span class='glyphicon glyphicon-qrcode' aria-hidden='true'></span> Bitcoin <strong>Address</strong></h2>
              <ul class='breadcrumb'>
                <li><Link to={"/"}>Home</Link></li>
                <li class='active'>Address {this.state.address}</li>
              </ul>
            </div>
        </section>
        <section class="row m-b-md">
            <div class="col-sm-12">
              <section class="panel panel-default">
                  <div class="table-responsive">
                      <table class="table table-striped">
                          <tbody>
                              <tr>
                                  <td><span class='glyphicon glyphicon-qrcode' aria-hidden='true'></span> Address</td>
                                  <td>{this.state.address}</td>
                              </tr>
                              <tr>
                                  <td><span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Balance</td>
                                  <td>{this.state.balance}</td>
                              </tr>
                              <tr>
                                  <td><span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Received</td>
                                  <td>{this.state.totalreceived}</td>
                              </tr>
                              <tr>
                                  <td><span class='glyphicon glyphicon-transfer' aria-hidden='true'></span> Transactions</td>
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
