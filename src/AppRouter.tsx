import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App';
const Cart = lazy(() => import('./pages/Cart'));
const Home = lazy(() => import('./pages/Home'));
const Categories = lazy(() => import('./pages/Categories'));
const Contacts = lazy(() => import('./pages/Contacts'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>ErrorPage</div>,
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
                path: '/product/:id',
                element: <div>ProductPage</div>,
            },
            {
                path: '/basket',
                element: <Cart />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
