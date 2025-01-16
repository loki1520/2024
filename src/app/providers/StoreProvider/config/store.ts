import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

// Создание store оборачиваем функцией. Чтобы потом переиспользовать создание стейта в jest и сторибук
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        // loginForm: loginReducer, // удалим, т.к. сделали его асинхронным
    };

    const reducerManager = createReducerManager(rootReducers); // https://redux.js.org/usage/code-splitting#:~:text=const%20reducerManager%20%3D%20createReducerManager(staticReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // eslint-disable-next-line
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
