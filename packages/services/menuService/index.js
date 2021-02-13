import { createSlice } from '@reduxjs/toolkit';

const menuService = createSlice({
  name: 'menus',
  initialState: {},
  reducers: {
    getHistory: () => {},
    setHistory: (state, action) => {
      state[action.payload.type] = action.payload.data;
    },
    createItem: (state, action) => {
      state.collections = action.payload;
    },
    deleteItem: (state, action) => {
      state.collections = action.payload;
    },
  },
});

const { actions, reducer } = menuService;

export { reducer as menuServiceReducer };
export { actions as menuActions };
