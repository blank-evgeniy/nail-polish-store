import { configureStore, Store } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import pagingSlice from './reducers/pagingSlice';

const store: Store = configureStore({
    reducer: {
        filter: filterSlice,
        paging: pagingSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
