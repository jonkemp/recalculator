import { connect } from 'react-redux';
import { addEntry, updateResult } from '../actions/index';
import EntryForm from '../components/EntryForm';

const mapStateToProps = (state) => {
  return {
    result: state.lastResult
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (value) => {
      dispatch(addEntry(value));
    },

    change: (value) => {
      dispatch(updateResult(value));
    }
  }
}

const AddEntry = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryForm);

export default AddEntry;
