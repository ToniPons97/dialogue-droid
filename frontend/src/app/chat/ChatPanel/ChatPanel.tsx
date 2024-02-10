'use client'
import styles from './ChatPanel.module.scss'
import { useEffect, useRef } from 'react'
import MessagePair from '../MessagePair/MessagePair'
import { useAppSelector } from '@/lib/hooks'
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
            <div className={styles.blob}>
                <Blob left='0' transform='rotate(90deg)' />
            </div>
                {
                    chats.map((message) => (
                        <MessagePair
                            key={message.id}
                            id={message.id}
                            userPrompt={message.userPrompt}
                            response={message.response}
                            date={message.createdAt}
                        />
                    ))
                }
                {
                    chats.length === 0 && <h2 className={styles.noChatsMessage}>No chats found</h2>
                }
                {loadingState.loading && <CircularProgress sx={{ color: 'white' }} />}
            </div>
            <InputArea />
        </section>
    )
}

export default ChatPanel