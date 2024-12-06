import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  changeTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
  // с помощью useContext получаем доступ к ThemeContext:
const { theme, setTheme } = useContext(ThemeContext);

const changeTheme = () => {
  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  setTheme(newTheme);
  // сохраняем в localStorage чтобы при перезагрузке страницы тема не сбрасывалась
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        changeTheme,
    }
}
