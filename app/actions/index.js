/*
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY';

export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export const UPDATE_RESULT = 'UPDATE_RESULT';

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
