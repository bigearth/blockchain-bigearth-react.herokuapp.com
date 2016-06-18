const $ = require('jquery');
const React = require('react');
const Link = require('react-router').Link
const BlocksHero = React.createClass({
  getInitialState: function() {
    return { };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          nb: data.data.nb,
          time_utc: data.data.time_utc,
          vout_sum: data.data.vout_sum,
          nb_txs: data.data.nb_txs,
          difficulty: data.data.difficulty,
          fee: data.data.fee,
          hash: data.data.hash,
          version: data.data.version,
          confirmations: data.data.confirmations,
          merkleroot: data.data.merkleroot,
          next_block_hash: data.data.next_block_hash,
          prev_block_hash: data.data.prev_block_hash,
          size: data.data.size,
          days_destroyed: data.data.days_destroyed
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div>
        <h2><span className='glyphicon glyphicon-th-large' aria-hidden='true'></span> Bitcoin <strong>Block</strong></h2>
        <ul className='breadcrumb'>
          <li><Link to={"/"}>Home</Link></li>
          <li className='active'>Block {this.state.nb}</li>
        </ul>
        <section className='panel panel-default'>
          <div className='table-responsive'>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <th><span className='glyphicon glyphicon-equalizer' aria-hidden='true'></span> Height</th>
                  <td>{this.state.nb}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-calendar' aria-hidden='true'></span> Created</th>
                  <td>{this.state.time_utc}</td>
                </tr>
                <tr>
                  <th className='btc'><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Trades Sum</th>
                  <td>{this.state.vout_sum}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-transfer' aria-hidden='true'></span> Transactions</th>
                  <td>{this.state.nb_txs}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-link' aria-hidden='true'></span> Difficulty</th>
                  <td>{this.state.difficulty}</td>
                </tr>
                <tr>
                  <th className='btc'><span className='glyphicon glyphicon-bitcoin' aria-hidden='true'></span> Fee</th>
                  <td>{this.state.fee}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-random' aria-hidden='true'></span> Hash</th>
                  <td>{this.state.hash}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-align-justify' aria-hidden='true'></span> Version</th>
                  <td>{this.state.version}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-equalizer' aria-hidden='true'></span> Confirmations</th>
                  <td>{this.state.confirmations}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-tree-conifer' aria-hidden='true'></span> Merkle Root</th>
                  <td>{this.state.merkleroot}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-menu-right' aria-hidden='true'></span> Next Block Hash</th>
                  <td><Link to={`/blocks/${this.state.next_block_hash}`}>{this.state.next_block_hash}</Link></td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-menu-left' aria-hidden='true'></span> Prev Block Hash</th>
                  <td><Link to={`/blocks/${this.state.next_block_hash}`}>{this.state.prev_block_hash}</Link></td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-scale' aria-hidden='true'></span> Size</th>
                  <td>{this.state.size}</td>
                </tr>
                <tr>
                  <th><span className='glyphicon glyphicon-remove' aria-hidden='true'></span> Days Destroyed</th>
                  <td>{this.state.days_destroyed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = BlocksHero;
