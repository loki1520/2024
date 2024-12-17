import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotfoundPage.module.scss';

interface NotfoundPageProps {
    className?: string;
}

export const NotfoundPage = ({ className }: NotfoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotfoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
