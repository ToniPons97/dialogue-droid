import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
    loading: boolean
}

const initialState: LoadingState = {
    loading: false,
};

export const loadingState = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        start: (state) => {
            state.loading = true;
        },
        end: (state) => {
            state.loading = false;
        },
    },
});

export const { start, end } = loadingState.actions;