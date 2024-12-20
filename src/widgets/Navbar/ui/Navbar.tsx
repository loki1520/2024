import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    // доп классы передаем через пропсы в additional
    const { t: aboutTranslation } = useTranslation('about'); // для перевода в пространстве "about"
    const { t: homeTranslation } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {homeTranslation('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {aboutTranslation('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
