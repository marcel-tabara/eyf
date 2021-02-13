import { createSlice } from '@reduxjs/toolkit';
import * as alertSelectors from './selectors';

const alertService = createSlice({
  name: 'alert',
  initialState: {},
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

const { actions, reducer } = alertService;

export { reducer as alertServiceReducer };
export { actions as alertActions };
export { alertSelectors };
