'use client'

import styles from './ChatDisplay.module.scss'
import Button from '@/components/Button/Button';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import MessagePair from '../MessageBox/MessagePair';
import { useAppSelector } from '@/lib/hooks';
import { useDispatch } from 'react-redux';
import { createChat } from '@/lib/chats/chats.slice';


const ChatDisplay = () => {
    const [userInput, setUserInput] = useState('')

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserInput(ev.target.value)
    }

    const dispatch = useDispatch()
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

    const sendPrompt: any = async (prompt: string) => {
        try {
            setUserInput('')
            dispatch(createChat(prompt, '/chat', chats))
        } catch (e) {
            console.error(e)
        } finally {
            console.log(chats)
        }
    }

    const handleClick = () => {
        if (userInput) {
            sendPrompt(userInput)
        }
    }

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
            <div className={styles.inputArea}>
                <input value={userInput} onChange={handleInputChange} type='text' />
                <Button
                    width='150px'
                    height='50px'
                    fontSize='21px'
                    onClick={handleClick}
                    disabled={!userInput}
                >
                    Send
                </Button>
            </div>
        </section>
    )
}

export default ChatDisplay