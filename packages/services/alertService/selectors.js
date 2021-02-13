import { createSelector } from '@reduxjs/toolkit';

const alert = (state) => state.alertServiceReducer.alert;

export const alertSelector = createSelector(alert, (items) => items);
