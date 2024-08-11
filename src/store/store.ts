import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import cartSlice from './reducers/cartSlice';
import authSlice from './reducers/authSlice';

// Redux Toolkit в качестве стей-менеджера
// Стор включает в себя три слайса для управления:
// -фильтрами(поиск, селекторы, также пагинация) | TODO: в будущем интегрировать URLSearchParams
// -товарами в корзине | также сохраняются в sessionStorage
// -данными пользователя(админа) | также сохраняются в sessionStorage

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
