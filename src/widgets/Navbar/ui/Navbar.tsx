import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

type NavbarProps = {
    className?: string;
};
export function Navbar({ className }: NavbarProps) {
    // доп классы передаем через пропсы в additional
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to="/about">
                    About
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    Main
                </AppLink>
            </div>
        </div>
    );
}

// здесь создал кастомный компонент AppLink, который является измененным от
// дефолтного Link из react-router-dom
// мпоненты без асинх чанка экспортируем именнованными, а не по дефолту
