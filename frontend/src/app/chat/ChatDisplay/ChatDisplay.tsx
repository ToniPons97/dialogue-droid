'use client'

import styles from './ChatDisplay.module.scss'
import Button from '@/components/Button/Button';
import apiClient from '@/clients/api-client';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import MessagePair from '../MessageBox/MessagePair';

type Chat = {
    id: string
    createdAt: string
    userPrompt: string
    response: string
}

type ApiResponse = {
    status: 'success' | 'processing' | 'failed'
    results: number
    chats: Chat[]
}

const ChatDisplay = () => {
    const [messages, setMessages] = useState<Chat[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Get chats
    useEffect(() => {
        const getMessages = async () => await apiClient.get<ApiResponse>('/chat');
        getMessages().then(res => setMessages(res.data.chats));
    }, []);

    useEffect(() => {
        console.log(messages);
    }, [messages]);


    // Handling user events and managing state
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserInput(ev.target.value);
    }

    const sendPrompt = async (prompt: string) => {
        try {
            setUserInput('');
            const response = await apiClient.post('/chat', { prompt });
            setMessages(prev => [...prev, response.data]);
        } catch (e) {
            console.error(e);
        }
    }

    const handleClick = () => {
        if (userInput) {
            // console.log('send', userInput);
            sendPrompt(userInput);
        }
    }

    return (
        <section className={styles.chatDisplay}>
            <div ref={chatContainerRef} className={styles.messages}>
                {
                    messages.map(m => (
                        <MessagePair
                            key={m.id}
                            userPrompt={m.userPrompt}
                            response={m.response}
                            date={m.createdAt}
                        />
                    ))
                }
                {
                    messages.length === 0 && <h2 className={styles.noChatsMessage}>No chats found</h2>
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