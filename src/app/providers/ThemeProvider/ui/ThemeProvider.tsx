import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

// LocalStorage всегда возвращает строку поэтому приводим типы к Theme либо по умолчанию выставляем Theme.LIGHT
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Если Передаем объект и по сути при каждом рендеринге в провайдере будет каждый раз
    // создаваться новый объект, поэтому мемоизируем его и вынесем его наружу
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        // провайдер нам нужен Чтобы иметь глобальный доступ с любого компонента к темам
        // Так как в провайдер мы будем передавать другой реакт компонент, мы должны его передать туда с помощью пропсов
        <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
