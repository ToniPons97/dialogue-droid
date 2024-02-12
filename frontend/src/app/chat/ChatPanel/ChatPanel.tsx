'use client'
import styles from './ChatPanel.module.scss'
import { useEffect, useRef } from 'react'
import MessagePair from '../MessagePair/MessagePair'
import { useAppSelector } from '@/store/hooks'
import InputArea from '../InputArea/InputArea'
import { CircularProgress } from '@mui/material'
import Blob from '@/components/Blob/Blob'

const ChatPanel = () => {
    const chatsState = useAppSelector(state => state.rootReducer.chats)
    const loadingState = useAppSelector(state => state.rootReducer.ui.loading);

    const { chats } = chatsState
    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [loadingState.loading])

    return (
        <section className={styles.chatPanel}>
            <div ref={chatContainerRef} className={styles.messages}>
                {
                    chats.map((message) => (
                        <MessagePair
                            key={message.id}
                            id={message.id}
                            userPrompt={message.userPrompt}
                            response={message.response}
                            createdAt={message.createdAt}
                            favorite={message.favorite}
                        />
                    ))
                }
                {
                    (chats.length === 0 && !loadingState.loading) &&
                    <h2 className={styles.noChatsMessage}>No chats found</h2>
                }
                {
                    (chats.length === 0 && loadingState.loading) &&
                    <h2 className={styles.noChatsMessage}>Loading Chats</h2>
                }
                {loadingState.loading && <CircularProgress sx={{ color: 'white', marginTop: '20px' }} />}
                <div className={styles.blob}>
                    <Blob left='0' bottom='100vh' transform='rotate(90deg)' />
                </div>
            </div>
            <InputArea />

        </section>
    )
}

export default ChatPanel