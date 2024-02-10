import { createSlice } from '@reduxjs/toolkit';

type ErrorState = {
    error: any; // Modify type according to error handling needs
}

const initialState: ErrorState = {
    error: null,
};

const errorState = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { addError, clearError } = errorState.actions;

export default errorState;
