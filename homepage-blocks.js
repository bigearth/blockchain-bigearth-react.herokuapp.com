const $ = require('jquery');
const React = require('react');
const HomepageBlock = require('./homepage-block.js');
const HomepageBlocks = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
        // console.log(this.state.data);
        // blocks: {
        //   nb: data.data.nb,
        //   time_utc: data.data.time_utc,
        //   nb_txs: data.data.nb_txs,
        //   fee: data.data.fee,
        //   size: data.data.size,
        //   days_destroyed: data.data.days_destroyed
        //}
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div>
        <h3><span class="glyphicon glyphicon-th" aria-hidden="true"></span> Last 20 <strong>Bitcoin</strong> Blocks</h3>
        <section class="panel panel-default">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th><span class="glyphicon glyphicon-equalizer" aria-hidden="true"></span> Height</th>
                            <th><span class="glyphicon glyphicon-object-align-vertical" aria-hidden="true"></span> Created</th>
                            <th><span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> Transactions</th>
                            <th> <span class="btc glyphicon glyphicon-bitcoin" aria-hidden="true"></span> Fee </th>
                            <th><span class="glyphicon glyphicon-scale" aria-hidden="true"></span> Size</th>
                            <th><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Days Destroyed</th>
                        </tr>
                    </thead>
                    <HomepageBlock data={this.state.data} />
                </table>
            </div>
        </section>
      </div>
    );
  }
});
module.exports = HomepageBlocks;
