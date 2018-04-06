import React from 'react';
import PropTypes from 'prop-types';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.updateResult = this.updateResult.bind(this);
    this.updateExpression = this.updateExpression.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.expression !== prevProps.expression) {
      this.updateResult(this.props.expression);
    }
  }

  updateResult(expression) {
    let value;
    try {
      // eslint-disable-next-line
      value = expression !== '' ? eval(expression) : 0;
      this.props.updateResult(value);
    } catch (err) {
      // statements to handle any exceptions
    }
  }

  updateExpression() {
    this.props.updateExpression(String(this.props.result));
  }

  handleChange(event) {
    this.props.updateExpression(event.target.value);
    this.updateResult(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.props.expression);
    this.props.updateExpression('');
  }

  render() {
    return (
      <div className="row">
        <h3>Recalculator</h3>
        <h1>{this.props.result} <button className="btn btn-success" type="button" onClick={this.updateExpression}><span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></button></h1>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" value={this.props.expression} onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

EntryForm.propTypes = {
  result: PropTypes.number.isRequired,
  expression: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  updateResult: PropTypes.func.isRequired,
  updateExpression: PropTypes.func.isRequired
}

export default EntryForm;
