const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const AddressesTransaction = React.createClass({
  render: function() {
    return ( 
      <div>
        {
          this.props.txs.map(function(item, index) {
            return <section class="panel panel-default">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td><span class='glyphicon glyphicon-transfer' aria-hidden='true'></span> Transaction</td>
                                <td><a href="#">{item.tx}</a></td>
                            </tr>
                            <tr>
                                <td><span class='glyphicon glyphicon-calendar' aria-hidden='true'></span> Created</td>
                                <td>{item.time_utc}</td>
                            </tr>
                            <tr>
                                <td>
                                  <span class='btc'>
                                    Amount
                                    <span class='btc' title='{item.amount}'>{item.amount}</span>
                                  </span>
                                </td>
                            </tr>
                            <tr>
                                <td><span class='glyphicon glyphicon-equalizer' aria-hidden='true'></span> Confirmations</td>
                                <td>{item.confirmations}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
          })
        }
      </div>
    );
  }
});
module.exports = AddressesTransaction;
