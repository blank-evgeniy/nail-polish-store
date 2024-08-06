import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAppDispatch } from './redux';
import { authSlice } from '../store/reducers/authSlice';
import { useState } from 'react';

//Аутентификация для админа
export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { setUser } = authSlice.actions;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = (email: string, password: string) => {
        setLoading(true);
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(
                    setUser({
                        email: email,
                        password: password,
                    })
                );
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError('Данные аккаунта введены неверно');
            });
    };

    return { login, loading, error };
};
