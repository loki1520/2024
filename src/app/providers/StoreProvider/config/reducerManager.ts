// берем пример отсюда, и типизируем
// https://redux.js.org/usage/code-splitting
import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

// Функция для создания менеджера редьюсеров
export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>, // Начальные редьюсеры
): ReducerManager {
    // Копируем начальные редьюсеры в объект
    const reducers = { ...initialReducers };

    // Создаем комбинированный редьюсер с начальными редьюсерами
    let combinedReducer = combineReducers(reducers);

    // Массив для хранения ключей редьюсеров, которые нужно удалить
    let keysToRemove: StateSchemaKey[] = [];

    return {
        // Функция для получения текущей карты редьюсеров
        getReducerMap: () => reducers,

        // Основной редьюсер, который обрабатывает состояние и действия
        reduce: (state: StateSchema, action: AnyAction) => {
            // Если есть ключи для удаления, создаем новый объект состояния
            // и удаляем соответствующие ключи
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                // Очищаем массив ключей, которые нужно удалить
                keysToRemove = [];
            }
            // Возвращаем новое состояние, обработанное комбинированным редьюсером
            return combinedReducer(state, action);
        },

        // Функция для добавления нового редьюсера
        add: (key: StateSchemaKey, reducer: Reducer) => {
            // Проверка: если ключ уже существует или некорректен, ничего не делаем
            if (!key || reducers[key]) {
                return;
            }
            // Добавляем новый редьюсер в объект редьюсеров
            reducers[key] = reducer;

            // Пересоздаем комбинированный редьюсер с новыми редьюсерами
            combinedReducer = combineReducers(reducers);
        },

        // Функция для удаления редьюсера
        remove: (key: StateSchemaKey) => {
            // Проверка: если ключ некорректен или редьюсер отсутствует, ничего не делаем
            if (!key || !reducers[key]) {
                return;
            }
            // Удаляем редьюсер из объекта редьюсеров
            delete reducers[key];
            // Добавляем ключ в список на удаление
            keysToRemove.push(key);
            // Пересоздаем комбинированный редьюсер с обновленным набором редьюсеров
            combinedReducer = combineReducers(reducers);
        },
    };
}
