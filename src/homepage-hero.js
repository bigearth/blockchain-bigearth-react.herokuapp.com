import React from 'react';
class HomepageHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      all: 21000000,
      current: 0,
      perc: 0,
      difficulty: 0,
      next_difficulty: 0,
      next_difficulty_perc: 0,
      retarget_in: 0
    };
  }
  componentDidMount() {
    fetch(this.props.url)
    .then((response) => response.text())
    .then((responseText) => {
      let data = JSON.parse(responseText);
      this.setState({
        data: data.data,
        value: data.data.markets.coinbase.value,
        all: data.data.volume.all,
        current: data.data.volume.current,
        perc: data.data.volume.perc,
        market_cap: data.data.markets.coinbase.value * data.data.volume.current,
        difficulty: data.data.last_block.difficulty,
        next_difficulty: data.data.next_difficulty.difficulty,
        next_difficulty_perc: data.data.next_difficulty.perc,
        retarget_in: data.data.next_difficulty.retarget_in
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  render() {
    return ( 
      <div className='hero'>
        <section className='container'>
          <section className="row m-b-md">
            <div className="col-sm-4">
              <h2 className="m-b-xs"><span className="glyphicon glyphicon-bitcoin" aria-hidden="true"></span> Bitcoin <strong>Markets</strong></h2> 
              <p>Market Value: ${this.state.value} per coin</p>
              <p>{this.state.current} / {this.state.all} coins mined</p>
              <p>%{this.state.perc} of total coins</p>
              <p>Market Cap ${this.state.market_cap}</p>
            </div>
            <div className="col-sm-4">
              <h2 className="m-b-xs"><span className="glyphicon glyphicon-link" aria-hidden="true"></span> Bitcoin <strong>Difficulty</strong></h2>
              <p>{this.state.difficulty}</p>
              <p>Difficulty is a measure of how difficult it is to find a new block below a given target.</p>
            </div>
            <div className="col-sm-4">
              <h2 className="m-b-xs"><span className="glyphicon glyphicon-signal" aria-hidden="true"></span> Next <strong>Difficulty</strong> <span className='small'>(estimate)</span></h2> <p>{this.state.next_difficulty}</p> <p>{this.state.next_difficulty_perc} change to current</p> <p>{this.state.retarget_in} blocks until difficulty changes</p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default HomepageHero;
