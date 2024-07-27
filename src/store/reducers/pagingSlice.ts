import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PagingState {
    currentPage: number;
}

const initialState: PagingState = {
    currentPage: 1,
};

export const pagingSlice = createSlice({
    name: 'paging',
    initialState,
    reducers: {
        setPrevPage(state) {
            state.currentPage -= 1;
        },
        setNextPage(state) {
            state.currentPage += 1;
        },
        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
});

export default pagingSlice.reducer;
