import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

// Создание store оборачиваем функцией. Чтобы потом переиспользовать создание стейта в jest и сторибук
export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
