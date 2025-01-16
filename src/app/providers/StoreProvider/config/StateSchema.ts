import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { CombinedState } from 'redux';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;
// Можно вернуть массив ключей которые являются названиями редюсеров
// const keyofthema: StateSchemaKey = 'loginForm';

// создаем, копируя типы из reducerManager
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

// const something: StateSchema = {
//     counter: {
//         value: 10,
//     },
//     user: {
//          authData: {
//              id: '1',
//              username: 'admin',
//          }
//      },
//     loginForm: {
//          username: string;
//          password: string;
//          error?: string;
//          isLoading: boolean;
//     }
// };
