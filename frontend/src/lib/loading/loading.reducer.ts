import { createReducer } from '@reduxjs/toolkit';
import { loadingState } from './loading.slice';

export interface LoadingState {
    loading: boolean;
}

const initialState: LoadingState = {
    loading: false,
};

export const loadingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadingState.actions.start, (state) => {
            state.loading = true;
        })
        .addCase(loadingState.actions.end, (state) => {
            state.loading = false;
        });
});
