import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
    email: string;
    password: string;
}

export interface AuthState {
    user: UserType | null;
}

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserType>) {
            state.user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(action.payload));
        },
    },
});

export default authSlice.reducer;
