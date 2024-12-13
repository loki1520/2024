import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import LigthIcon from '@/shared/assets/icons/theme-light.svg'; // чтобы компилятор не ругался на несуществующий файл, добавим в глобальную декларацию типов global.d.ts
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeTheme}
        >
            {theme === Theme.LIGHT ? <LigthIcon /> : <DarkIcon />}
        </Button>
    );
}
