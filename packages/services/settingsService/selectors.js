import { createSelector } from '@reduxjs/toolkit';

const settings = (state) => state.settingsServiceReducer.settings;

export const settingsSelector = createSelector(settings, (items) => items);

export const settingsByIdSelector = createSelector([settings], (res) => (id) =>
  res.filter((e) => e.id === id),
);
