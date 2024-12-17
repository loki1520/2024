import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/RouteConfig/RouteConfig';
import { PageLoader } from '@/pages/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
);

export { AppRouter };
