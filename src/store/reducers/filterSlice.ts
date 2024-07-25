import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterState {
    searchValue: string;
    volumeFilter: number | null;
    colorFilter: string;
}

const initialState: FilterState = {
    searchValue: '',
    volumeFilter: null,
    colorFilter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchValueUpdate(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        volumeFilterUpdate(state, action: PayloadAction<number | null>) {
            state.volumeFilter = action.payload;
        },
        colorFilterUpdate(state, action: PayloadAction<string>) {
            state.colorFilter = action.payload;
        },
    },
});

export default filterSlice.reducer;
