import { createSlice } from '@reduxjs/toolkit';
import * as settingsSelectors from './selectors';
import * as settingsSchemas from './schemas';

const settingsService = createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    getSettings: () => {},
    updateSettings: () => {},
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

const { actions, reducer } = settingsService;

export { reducer as settingsServiceReducer };
export { actions as settingsActions };
export { settingsSelectors };
export { settingsSchemas };
