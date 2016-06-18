import $ from 'jquery';
import React from 'react';
const Link = require('react-router').Link
const BlocksTransactionVout = React.createClass({
  render: function() {
    return ( 
      <table className="table table-striped">
        <tbody>
          {
            this.props.data.map(function(item, index) {
              return <tr key={index}>
                <td><span className='glyphicon glyphicon-qrcode' aria-hidden='true'></span> <a href="#">{item.address}</a> </td>
                <td className='text-danger'>
                  <span className='btc' title='{item.amount}'><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> {item.amount}</span>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
});
module.exports = BlocksTransactionVout;
