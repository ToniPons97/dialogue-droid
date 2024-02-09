import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { loadingState } from '../loading/loading.slice';
import apiClient from '@/clients/api-client';
import { ChatsState } from './chats.reducer';
import { Chat, ChatResponse } from '@/types/chatTypes';
import errorState from '../error/errorState';

export const chatsState = createSlice({
    name: 'chats',
    initialState: {
        chats: [],
    } as ChatsState,
    reducers: {
        populate: (state, action: PayloadAction<Chat[]>) => {
            state.chats = action.payload;
        },
        addChat: (state, action: PayloadAction<Chat>) => {
            state.chats.push(action.payload);
        }
    },
});

export const { populate, addChat } = chatsState.actions;

export const createChat = (prompt: string, endpoint: string): any => {
    return async (dispatch: AppDispatch) => {
        try {
            if (prompt) {
                dispatch(loadingState.actions.start());
    
                const abortController = new AbortController();
                const response = await apiClient.post<ChatResponse>(endpoint, {
                    signal: abortController.signal,
                    prompt
                });

                const { data } = response.data;
                console.log(data);
                dispatch(chatsState.actions.addChat(data as Chat));
            }
        } catch (e) {
            dispatch(errorState.actions.addError('Axios error'));
        } finally {
            dispatch(loadingState.actions.end());
        }
    }
}

export const fetchChats = (endpoint: string): any => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loadingState.actions.start());

            const abortController = new AbortController();
            const response = await apiClient.get<ChatResponse>(endpoint, {
                signal: abortController.signal,
            });

            const { data } = response.data;
            dispatch(chatsState.actions.populate(data as Chat[]));
        } catch (e) {
            dispatch(errorState.actions.addError('Axios error'));
        } finally {
            dispatch(loadingState.actions.end());
        }
    }
}