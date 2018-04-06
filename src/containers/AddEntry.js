import { connect } from 'react-redux';
import { addEntry, updateResult, updateExpression } from '../actions/index';
import EntryForm from '../components/EntryForm';

const mapStateToProps = (state) => {
  return {
    result: state.lastResult,
    expression: state.lastExpression
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (value) => {
      dispatch(addEntry(value));
    },

    updateResult: (value) => {
      dispatch(updateResult(value));
    },

    updateExpression: (value) => {
      dispatch(updateExpression(value));
    }
  }
}

const AddEntry = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryForm);

export default AddEntry;
