import React from 'react';

interface ErrorPageProps {
    message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
    message = 'Страница, которую вы ищете, не существует',
}) => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3">
                    {' '}
                    <span className="text-danger">Усп!</span> Страница не
                    найдена {':*('}
                </p>
                <p className="lead">{message}</p>
                <a href="/" className="btn btn-secondary">
                    На главную
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
