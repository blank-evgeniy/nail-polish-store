import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAppDispatch } from './redux';
import { authSlice } from '../store/reducers/authSlice';

//Аутентификация для админа
export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { setUser } = authSlice.actions;

    const login = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(
                    setUser({
                        email: email,
                        password: password,
                    })
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return { login };
};
