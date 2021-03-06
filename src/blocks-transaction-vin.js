import React from 'react';
import { Link } from 'react-router'
class BlocksTransactionVin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <table className="table table-striped">
        <tbody>
          {
            this.props.data.map(function(item, index) {
              return <tr key={index}>
                                
                <td><span className='glyphicon glyphicon-qrcode' aria-hidden='true'></span> <Link to={`/addresses/${item.address}`}>{item.address}</Link></td>
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
}

export default BlocksTransactionVin;
