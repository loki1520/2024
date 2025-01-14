// Импортируем необходимые функции и объекты
import { createAsyncThunk } from '@reduxjs/toolkit'; // Функция для создания асинхронных экшенов
import axios from 'axios'; // Библиотека для отправки HTTP-запросов
import { User, userActions } from 'entities/User'; // Импортируем тип User и экшены из сущности User
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'; // Импортируем ключ для локального хранилища

// Определяем интерфейс для данных авторизации
interface LoginByUsernameProps {
    username: string; // Логин пользователя
    password: string; // Пароль пользователя
}

// Создаем асинхронный экшен для логина
export const loginByUsername = createAsyncThunk<
    User, // Тип данных, которые будут возвращены, если запрос успешен (в данном случае это объект User).
    LoginByUsernameProps, // Тип данных, которые мы передаем в экшен (логин и пароль).
    { rejectValue: string } // Тип данных для ошибки, если запрос не удался (строка с сообщением об ошибке).
>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        // Отправляем POST-запрос на сервер для авторизации
        const response = await axios.post<User>(
            'http://localhost:8000/login', // URL для запроса на авторизацию
            authData, // Данные для авторизации, переданные в экшен (логин и пароль)
        );

        // Если сервер вернул пустой ответ, генерируем ошибку
        if (!response.data) {
            throw new Error();
        }

        // Если авторизация успешна, сохраняем данные пользователя в локальное хранилище
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY, // Ключ для сохранения данных в localStorage. т.к. данные там хранятся строками
            JSON.stringify(response.data), // Сериализуем объект данных пользователя в строку
        );

        // // Диспатчим экшен для обновления состояния пользователя в Redux Store
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        // Возвращаем данные пользователя, которые будут переданы в редьюсер
        return response.data;
    } catch (e) {
        // Если произошла ошибка (например, неверные данные для логина), выводим ошибку в консоль
        console.log(e);

        // Возвращаем ошибку с помощью rejectWithValue, чтобы передать информацию об ошибке в редьюсер
        return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверные данные'));
    }
});
