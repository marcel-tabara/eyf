import { createSlice } from '@reduxjs/toolkit';
import * as searchSelectors from './selectors';

const searchService = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const { actions, reducer } = searchService;

export { reducer as searchServiceReducer };
export { actions as searchActions };
export { searchSelectors };
