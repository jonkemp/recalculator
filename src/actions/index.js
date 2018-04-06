/*
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY';

export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export const UPDATE_RESULT = 'UPDATE_RESULT';

export const UPDATE_EXPRESSION = 'UPDATE_EXPRESSION';

/*
 * action creators
 */

export function addEntry(text) {
  return { type: ADD_ENTRY, text };
}

export function removeEntry(index) {
  return { type: REMOVE_ENTRY, index };
}

export function updateResult(result) {
  return { type: UPDATE_RESULT, result };
}

export function updateExpression(expression) {
  return { type: UPDATE_EXPRESSION, expression };
}