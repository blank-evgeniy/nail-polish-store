import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import Contacts from './pages/Contacts.tsx';
import Categories from './pages/Categories.tsx';

import './scss/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
