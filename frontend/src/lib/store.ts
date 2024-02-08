import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "./chats/chats.reducer";
import { loadingReducer } from "./loading/loading.reducer";

const rootReducer = combineReducers({
    chats: chatsReducer,
    ui: combineReducers({
        loading: loadingReducer,
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