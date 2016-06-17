const $ = require('jquery');
const React = require('react');
const HomepageBlock = React.createClass({
  render: function() {
    return ( 
      <tbody>
        {
          this.props.data.map(function(item, index) {
            return <tr key={item.nb}>
              <td><a href='#'>{item.nb}</a></td>
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
});
module.exports = HomepageBlock;
