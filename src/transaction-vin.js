const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const TransactionVin = React.createClass({
  render: function() {
    return ( 
      <tbody>
        {
          this.props.vins.map(function(item, index) {
            return <tr key={index}>
              <td><span className='glyphicon glyphicon-qrcode' aria-hidden='true'></span> <Link to={`/addresses/${item.address}`}>{item.address}</Link></td>
              <td className='text-danger'>
                <span className='btc' title='{item.amount}'><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> {item.amount}</span>
              </td>
            </tr>
          })
        }
      </tbody>
    );
  }
});
module.exports = TransactionVin;