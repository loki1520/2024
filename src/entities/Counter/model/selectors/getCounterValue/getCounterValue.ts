import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
    getCounter, // селектор, который возвращает объект CounterSchema
    (counter: CounterSchema) => counter.value, // колбэк функция, которая возвращает значение счетчика из объекта CounterSchema
);
// тут мы  использует библиотеку Redux Toolkit reselect https://github.com/reduxjs/reselect
// для создания
// мемоизированного селектора. в данном примере он не критически необходим,
// т.к. по сути вычислений мытут не производим, и мемоизировать значение не столь критично
