const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const BlocksTransactionVin = React.createClass({
  render: function() {
    return ( 
      <table class="table table-striped">
        <tbody>
          {
            this.props.data.map(function(item, index) {
              return <tr>
                <td><span class='glyphicon glyphicon-qrcode' aria-hidden='true'></span> <a href="#">{item.address}</a> </td>
                <td class='text-danger'>
                  <span class='btc' title='{item.amount}'><span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> {item.amount}</span>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
});
module.exports = BlocksTransactionVin;
