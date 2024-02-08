// chats.reducer.ts
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '@/types/chatTypes';
import { populate } from './chats.slice';

export interface ChatsState {
    chats: Chat[];
}

const initialState: ChatsState = {
    chats: [],
};

export const chatsReducer = createReducer(initialState, (builder) => {
    builder.addCase(populate, (state, action: PayloadAction<Chat[]>) => {
        state.chats = action.payload;
    });
});
