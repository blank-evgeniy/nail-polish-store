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
        searchValueUpdate(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        volumeFilterUpdate(state, action: PayloadAction<string>) {
            state.volumeFilter = action.payload;
        },
        colorFilterUpdate(state, action: PayloadAction<string>) {
            state.colorFilter = action.payload;
        },
    },
});

export default filterSlice.reducer;
