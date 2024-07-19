import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>ErrorPage</div>,
        children: [
            {
                index: true,
                element: <div>HomePage</div>,
            },
            {
                path: '/сategories',
                element: <div>CategoriesPage</div>,

                children: [
                    {
                        path: '/:category',
                        element: <div>CatalogPage</div>,
                    },
                ],
            },
            {
                path: '/contacts',
                element: <div>ContactsPage</div>,
            },
            {
                path: '/product/:id',
                element: <div>ProductPage</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
