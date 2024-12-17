import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    changeTheme: () => void;
}

export function useTheme(): UseThemeResult {
    // с помощью useContext получаем доступ к ThemeContext:
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        // сохраняем в localStorage чтобы при перезагрузке страницы тема не сбрасывалась
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        changeTheme,
    };
}
