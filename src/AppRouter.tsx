import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AdminPage from './pages/AdminPage';
import ErrorPage from './pages/ErrorPage';
const Cart = lazy(() => import('./pages/Cart'));
const Home = lazy(() => import('./pages/Home'));
const Categories = lazy(() => import('./pages/Categories'));
const Contacts = lazy(() => import('./pages/Contacts'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/categories',
                element: <Categories />,
            },
            {
                path: '/categories/:category',
                element: <CatalogPage />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
            {
                path: '/basket',
                element: <Cart />,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminPage />,
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
