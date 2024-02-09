'use client'
import styles from './ChatPanel.module.scss'
import Button from '@/components/Button/Button'
import { ChangeEvent, useEffect, useState, useRef } from 'react'
import MessagePair from '../MessageBox/MessagePair'
import { useAppSelector } from '@/lib/hooks'
import { useDispatch } from 'react-redux'
import InputArea from '../InputArea/InputArea'

const ChatPanel = () => {
    const chatsState = useAppSelector(state => state.rootReducer.chats)
    const {chats} = chatsState
    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [chats])


    useEffect(() => {
        console.log(chats)
    }, [chats])

    return (
        <section className={styles.chatDisplay}>
            <div ref={chatContainerRef} className={styles.messages}>
                {
                    chats.map((message) => (
                        <MessagePair
                            key={message.id}
                            userPrompt={message.userPrompt}
                            response={message.response}
                            date={message.createdAt}
                        />
                    ))
                }
                {
                    chats.length === 0 && <h2 className={styles.noChatsMessage}>No chats found</h2>
                }
            </div>

            <InputArea />

        </section>
    )
}

export default ChatPanel