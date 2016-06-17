const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const TransactionVout = React.createClass({
  render: function() {
    return ( 
      <tbody>
        {
          this.props.vouts.map(function(item, index) {
            return <tr key={index}>
              <td><span class='glyphicon glyphicon-qrcode' aria-hidden='true'></span> <Link to={`/addresses/${item.address}`}>{item.address}</Link></td>
              <td class='text-danger'>
                <span class='btc' title='{item.amount}'><span class='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> {item.amount}</span>
              </td>
            </tr>
          })
        }
      </tbody>
    );
  }
});
module.exports = TransactionVout;
