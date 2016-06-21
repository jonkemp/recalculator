import React, { PropTypes } from 'react';
import Entry from './Entry';


const EntryList = ({ items, remove }) => (
  <div className="row">
    <ul className="list-group">
      {items.map((item, index) => {
        return <Entry key={item.id} {...item} remove={() => remove(index)} />;
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
  remove: PropTypes.func.isRequired
}

export default EntryList;
