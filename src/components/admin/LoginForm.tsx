import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserType } from '../../store/reducers/authSlice';

const LoginForm = () => {
    const { login, error, loading } = useAuth();

    const email = useRef<null | HTMLInputElement>(null);
    const passsword = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            const userData = JSON.parse(
                sessionStorage.getItem('user')!
            ) as UserType;
            login(userData.email, userData.password);
        }
    }, []);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email.current && passsword.current) {
            login(email.current.value, passsword.current.value);
        }
    };

    return (
        <div className="container-sm pt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                        Почта:
                    </label>
                    <input
                        ref={email}
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">
                        Пароль
                    </label>
                    <input
                        ref={passsword}
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        autoComplete="on"
                    />
                </div>
                {loading && (
                    <div
                        className="spinner-border d-block container-fluid text-primary text-center"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
