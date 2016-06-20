import React from 'react';
import { Link } from 'react-router'
class AddressesTransaction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div className='sub'>
        <div className='container'>
          {
            this.props.txs.map(function(item, index) {
              return <section key={index} className="panel panel-default">
                  <div className="table-responsive">
                      <table className="table table-striped">
                          <tbody>
                              <tr>
                                  <td><span className='glyphicon glyphicon-transfer' aria-hidden='true'></span> Transaction</td>
                                  <td><Link to={`/transactions/${item.tx}`}>{item.tx}</Link></td>
                              </tr>
                              <tr>
                                  <td><span className='glyphicon glyphicon-calendar' aria-hidden='true'></span> Created</td>
                                  <td>{item.time_utc}</td>
                              </tr>
                              <tr>
                                  <td>
                                    <span className='btc'>
                                      Amount
                                      
                                    </span>
                                  </td>
                                  <td><span className='btc' title='{item.amount}'>{item.amount}</span></td>
                              </tr>
                              <tr>
                                  <td><span className='glyphicon glyphicon-equalizer' aria-hidden='true'></span> Confirmations</td>
                                  <td>{item.confirmations}</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>
            })
          }
        </div>
      </div>
    );
  }
}

export default AddressesTransaction;
