import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
// import { counterReducer } from 'entities/Counter';
// import { StateSchema } from './StateSchema';

// прокинем создание стора в функцию, чтобы потом переиспоьзовать его при пересоздании в тестах

// export function createReduxStore(initialState?: StateSchema) {
export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        // preloadedState: initialState,
    });
}
