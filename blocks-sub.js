const $ = require('jquery');
const React = require('react');
const BlocksSub = React.createClass({
  getInitialState: function() {
    return { };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        // this.setState({
        //   data: data.data,
        //   value: data.data.markets.coinbase.value,
        //   all: data.data.volume.all,
        //   current: data.data.volume.current,
        //   perc: data.data.volume.perc,
        //   market_cap: data.data.markets.coinbase.value * data.data.volume.current,
        //   difficulty: data.data.last_block.difficulty,
        //   next_difficulty: data.data.next_difficulty.difficulty,
        //   next_difficulty_perc: data.data.next_difficulty.perc,
        //   retarget_in: data.data.next_difficulty.retarget_in
        // });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return ( 
      <div class='hero'>
        Blockssub
      </div>
    );
  }
});
module.exports = BlocksSub;
