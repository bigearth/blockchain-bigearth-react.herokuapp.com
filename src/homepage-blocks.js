import $ from 'jquery';
import React from 'react';
import HomepageBlock from './homepage-block.js';
class HomepageBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return ( 
      <div className='sub'>
        <div className='container'>
          <h3><span className="glyphicon glyphicon-th" aria-hidden="true"></span> Last 20 <strong>Bitcoin</strong> Blocks</h3>
          <section className="panel panel-default">
              <div className="table-responsive">
                  <table className="table table-striped">
                      <thead>
                          <tr>
                              <th><span className="glyphicon glyphicon-equalizer" aria-hidden="true"></span> Height</th>
                              <th><span className="glyphicon glyphicon-object-align-vertical" aria-hidden="true"></span> Created</th>
                              <th><span className="glyphicon glyphicon-transfer" aria-hidden="true"></span> Transactions</th>
                              <th> <span className="btc glyphicon glyphicon-bitcoin" aria-hidden="true"></span> Fee </th>
                              <th><span className="glyphicon glyphicon-scale" aria-hidden="true"></span> Size</th>
                              <th><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Days Destroyed</th>
                          </tr>
                      </thead>
                      <HomepageBlock data={this.state.data} />
                  </table>
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomepageBlocks;
