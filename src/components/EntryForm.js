import React, { PropTypes } from 'react';
import PubSub from 'pubsub-js';

const EntryForm = React.createClass({
  componentWillMount() {
    this.pubsub_token = PubSub.subscribe('entry', (topic, value) => {
      this.input.value = value;
      this.handleChange();
    });
  },

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsub_token);
  },

  handleChange() {
    let value;
    try {
      value = this.input.value !== '' ? eval(this.input.value) : 0;
      this.props.change(value);
    } catch (e) {
       // statements to handle any exceptions
    }
  },

  render() {
    return (
      <div className="row">
        <h3>Recalculator</h3>
        <h1>{this.props.result} <button className="btn btn-success" type="button" onClick={(e) => {
          this.input.value = this.props.result;
        }}><span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></button></h1>
        <form className="form-inline" onSubmit={(e) => {
          e.preventDefault();
          this.props.submit(this.input.value);
          this.input.value = '';
        }}>
          <div className="form-group">
            <input className="form-control" type="text" ref={node => {
              this.input = node
            }} onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
});

EntryForm.propTypes = {
  result: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
}

export default EntryForm;
