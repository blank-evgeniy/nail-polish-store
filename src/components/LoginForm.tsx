import React, { useRef } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
    const { login } = useAuth();
    const email = useRef<null | HTMLInputElement>(null);
    const passsword = useRef<null | HTMLInputElement>(null);

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
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
