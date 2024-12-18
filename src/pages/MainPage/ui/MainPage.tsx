import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation();

    return (
        <>
            <div>{t('Главная страница')}</div>
            <BugButton />
        </>
    );
}

export default MainPage;
