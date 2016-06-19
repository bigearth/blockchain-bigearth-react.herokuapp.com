import $ from 'jquery';
import React from 'react';
import BlocksTransaction from './blocks-transaction.js';
class BlocksSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      nb: 0 
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data.data.txs,
          nb: data.data.nb
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return ( 
      <div className='sub'>
        <section className='container'>
          <section className="row m-b-md">
            <div className="col-sm-12">
              <h3><span className="glyphicon glyphicon-transfer" aria-hidden="true"></span> Transactions (for <strong>Block</strong> {this.state.nb})</h3>
              <BlocksTransaction data={this.state.data} />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default BlocksSub;
