import { createSlice } from '@reduxjs/toolkit';
import * as menuUtils from './utils';
import * as menuSchemas from './schemas';

const menuService = createSlice({
  name: 'menus',
  initialState: {},
  reducers: {
    updateHistory: () => {},
    getHistory: () => {},
    setHistory: (state, action) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

const { actions, reducer } = menuService;

export { reducer as menuServiceReducer };
export { actions as menuActions };
export { menuUtils };
export { menuSchemas };
