import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // расширяем чтобы были доступны все стандартные свойства кнопки
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
