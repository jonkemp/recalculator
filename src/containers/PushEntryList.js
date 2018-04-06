import { connect } from 'react-redux';
import { removeEntry, updateExpression } from '../actions';
import EntryList from '../components/EntryList';

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (index) => {
      dispatch(removeEntry(index));
    },

    updateExpression: (value) => {
      dispatch(updateExpression(value));
    }
  }
}

const PushEntryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryList);

export default PushEntryList;
