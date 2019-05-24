import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';

export const getValues = () => createSelector(
  getFormValues('std-20'),
  values => values,
);
