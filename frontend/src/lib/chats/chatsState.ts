import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { loadingState } from '../loading/loadingState';
import apiClient from '@/clients/api-client';
import { Chat, ChatResponse } from '@/types/chatTypes';
import errorState from '../error/errorState';

type ChatsState = {
    chats: Chat[];
}

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
        },
        deleteChat: (state, action: PayloadAction<Chat>) => {
            const index = state.chats.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.chats.splice(index, 1);
            }
        }
    },
});

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
                dispatch(chatsState.actions.addChat(data as Chat));
            }
        } catch (e) {
            dispatch(errorState.actions.addError('Axios error'));
        } finally {
            dispatch(loadingState.actions.end());
        }
    }
}

export const deleteChat = (id: string, endpoint: string): any => {
    return async (dispatch: AppDispatch) => {
        try {
            const abortController = new AbortController();
            const response = await apiClient.delete<ChatResponse>(endpoint, {
                signal: abortController.signal,
                data: {
                    id
                }
            });
        
            const chat = response.data.data as Chat;
            dispatch(chatsState.actions.deleteChat(chat));
        } catch (e) {
            dispatch(errorState.actions.addError('Axios error'));
        }
    }
}