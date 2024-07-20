import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';

import './scss/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home/Home.tsx';
import Contacts from './pages/Contacts/Contacts.tsx';

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
                element: <div>CategoriesPage</div>,
            },
            {
                path: '/categories/:category',
                element: <div>CatalogPage</div>,
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
                element: <div>BasketPage</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
