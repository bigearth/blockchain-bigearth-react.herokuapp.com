import React from 'react';
import { Link } from 'react-router'
class AddressesHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      address: '',
      balance: 0,
      totalreceived: 0,
      nb_txs: 0
    };
  }
  componentDidMount() {
    fetch(this.props.url)
    .then((response) => response.text())
    .then((responseText) => {
      let data = JSON.parse(responseText);
      this.setState({
        data: data.data,
        address: data.data.address,
        balance: data.data.balance,
        totalreceived: data.data.totalreceived,
        nb_txs: data.data.nb_txs
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  render() {
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
}

export default AddressesHero;
