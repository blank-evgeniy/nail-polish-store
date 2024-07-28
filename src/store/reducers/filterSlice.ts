import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterState {
    currentPage: number;
    searchValue: string;
    volumeFilter: string;
    colorFilter: string;
}

const initialState: FilterState = {
    currentPage: 1,
    searchValue: '',
    volumeFilter: 'DEFAULT',
    colorFilter: 'DEFAULT',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateSearchValue(state, action: PayloadAction<string>) {
            state.currentPage = 1;
            state.searchValue = action.payload;
        },
        updateVolumeFilter(state, action: PayloadAction<string>) {
            state.currentPage = 1;
            state.volumeFilter = action.payload;
        },
        updateColorFilter(state, action: PayloadAction<string>) {
            state.currentPage = 1;
            state.colorFilter = action.payload;
        },
        setPrevPage(state) {
            state.currentPage -= 1;
        },
        setNextPage(state) {
            state.currentPage += 1;
        },
        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        resetFilters: () => initialState,
    },
});

export default filterSlice.reducer;
