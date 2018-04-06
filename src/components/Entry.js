import React, { PropTypes } from 'react';
import PubSub from 'pubsub-js';

const Entry = React.createClass({
  render() {
    return (
      <li className="list-group-item">
        <div>{this.props.result}</div>
        <div>{this.props.expression}</div>
        <button className="btn btn-warning btn-xs" type="button" onClick={() => {
          PubSub.publish('entry', this.props.result);
        }}>Use Result</button>
        <button className="btn btn-warning btn-xs" type="button" onClick={() => {
          PubSub.publish('entry', this.props.expression);
        }}>Use Expression</button>
        <button className="btn btn-danger btn-xs" type="button" onClick={this.props.remove}>Remove</button>
      </li>
    )
  }
});

Entry.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
}

export default Entry;
