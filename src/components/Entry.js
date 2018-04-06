import React from 'react';
import PropTypes from 'prop-types';


const Entry = ({ result, expression, remove, updateResult, updateExpression }) => (
  <li className="list-group-item">
    <div>{result}</div>
    <div>{expression}</div>
    <button className="btn btn-warning btn-xs" type="button" onClick={updateResult}>Use Result</button>
    <button className="btn btn-warning btn-xs" type="button" onClick={updateExpression}>Use Expression</button>
    <button className="btn btn-danger btn-xs" type="button" onClick={remove}>Remove</button>
  </li>
)

Entry.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
  updateResult: PropTypes.func.isRequired,
  updateExpression: PropTypes.func.isRequired
}

export default Entry;
