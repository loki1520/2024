import './styles/index.scss'; // добавляем стили !!!
import { Suspense } from 'react'; // обертка для i18n
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames'; // можно использовать и библиотеку classnames, но сделал свою, for training)
import { AppRouter } from '@/app/providers/router/index';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

// App стал пропсом children для провайдера
function App() {
    // создали отдельный хук
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
