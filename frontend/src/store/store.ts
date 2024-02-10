import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { chatsState } from "./chats/chatsState";
import { loadingState } from "./loading/loadingState";
import errorState from "./error/errorState";

const rootReducer = combineReducers({
    chats: chatsState.reducer,
    ui: combineReducers({
        loading: loadingState.reducer,
        error: errorState.reducer
    })
});

export const makeStore = () => {
    return configureStore({
        reducer: { rootReducer },
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];