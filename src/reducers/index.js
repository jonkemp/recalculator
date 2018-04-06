import { ADD_ENTRY, REMOVE_ENTRY, UPDATE_RESULT, UPDATE_EXPRESSION } from '../actions/index';

function calculateApp(state, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return Object.assign({}, state, {
        items: [
          {
            id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            expression: action.text,
            // eslint-disable-next-line
            result: eval(action.text)
          },
          ...state.items
        ]
      })
    case REMOVE_ENTRY:
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      })
    case UPDATE_RESULT:
      return Object.assign({}, state, {
        lastResult: action.result
      })
    case UPDATE_EXPRESSION:
      return Object.assign({}, state, {
        lastExpression: action.expression
      })
    default:
      return state
  }
}

export default calculateApp;
