import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

type NavbarProps = {
    className?: string;
};
export function Navbar({ className }: NavbarProps) {
    // доп классы передаем через пропсы в additional
    const { t: aboutTranslation } = useTranslation('about'); // для перевода в пространстве "about"
    const { t: homeTranslation } = useTranslation('main'); // для перевода в пространстве "home"

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to="/about">
                    {aboutTranslation('О сайте')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {homeTranslation('Главная страница')}
                </AppLink>
            </div>
        </div>
    );
}

// здесь создал кастомный компонент AppLink, который является измененным от
// дефолтного Link из react-router-dom
// мпоненты без асинх чанка экспортируем именнованными, а не по дефолту
