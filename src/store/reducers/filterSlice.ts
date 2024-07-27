import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterState {
    searchValue: string;
    volumeFilter: string;
    colorFilter: string;
}

const initialState: FilterState = {
    searchValue: '',
    volumeFilter: 'DEFAULT',
    colorFilter: 'DEFAULT',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        updateVolumeFilter(state, action: PayloadAction<string>) {
            state.volumeFilter = action.payload;
        },
        updateColorFilter(state, action: PayloadAction<string>) {
            state.colorFilter = action.payload;
        },
        resetFilters: () => initialState,
    },
});

export default filterSlice.reducer;
