'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'
import { fetchChats } from '@/store/chats/chatsState'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(fetchChats('/chat'));
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}