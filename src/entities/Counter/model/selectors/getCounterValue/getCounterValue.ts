import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// https://github.com/reduxjs/reselect
// мемоизации и вычислений тут нет, используем для практики
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
//
