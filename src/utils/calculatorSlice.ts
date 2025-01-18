import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculateAppState, Item } from '../types';

const initialState: CalculateAppState = {
  items: [],
  lastResult: 0,
  lastExpression: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<string>) => {
      const newItem: Item = {
        id:
          state.items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
        expression: action.payload,
        result: eval(action.payload), // Note: Using eval is generally not recommended due to security risks
      };
      state.items.unshift(newItem);
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    updateResult: (state, action: PayloadAction<number>) => {
      state.lastResult = action.payload;
    },
    updateExpression: (state, action: PayloadAction<string>) => {
      state.lastExpression = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEntry, removeEntry, updateResult, updateExpression } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
