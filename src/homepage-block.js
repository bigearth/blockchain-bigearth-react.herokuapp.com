import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router'
class HomepageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return ( 
      <tbody>
        {
          this.props.data.map(function(item, index) {
            return <tr key={item.nb}>
              <td><Link to={`/blocks/${item.nb}`}>{item.nb}</Link></td>
              <td>{item.time_utc}</td>
              <td>{item.nb_txs}</td>
              <td>{item.fee}</td>
              <td>{item.size}</td>
              <td>{item.days_destroyed}</td>
            </tr>
          })
        }
      </tbody>
    );
  }
}

export default HomepageBlock;
