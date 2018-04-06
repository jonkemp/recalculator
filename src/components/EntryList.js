import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';


const EntryList = ({ items, remove, updateExpression }) => (
  <div className="row">
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <Entry 
            key={item.id} 
            {...item} 
            remove={() => remove(index)} 
            updateResult={() => updateExpression(String(item.result))}
            updateExpression={() => updateExpression(item.expression)} 
          />
        );
      })}
    </ul>
  </div>
)

EntryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    expression: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
  }).isRequired).isRequired,
  remove: PropTypes.func.isRequired,
  updateExpression: PropTypes.func.isRequired
}

export default EntryList;
