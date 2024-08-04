import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import cartSlice from './reducers/cartSlice';
import authSlice from './reducers/authSlice';

const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
