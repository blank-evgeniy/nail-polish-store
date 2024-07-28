import { configureStore, Store } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';

const store: Store = configureStore({
    reducer: {
        filter: filterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
