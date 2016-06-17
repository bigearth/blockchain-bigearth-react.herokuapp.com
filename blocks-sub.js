const $ = require('jquery');
const React = require('react');
const BlocksTransaction = require('./blocks-transaction.js');
const BlocksSub = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      nb: 0 
    };
  },
  componentDidMount: function() {
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
  },
  render: function() {
    return ( 
      <div class='sub'>
        <section class='container'>
          <section class="row m-b-md">
            <div class="col-sm-12">
              <h3><span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> Transactions (for <strong>Block</strong> {this.state.nb})</h3>
              <BlocksTransaction data={this.state.data} />
            </div>
          </section>
        </section>
      </div>
    );
  }
});
module.exports = BlocksSub;
