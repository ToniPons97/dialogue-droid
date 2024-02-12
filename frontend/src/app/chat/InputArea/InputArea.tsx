'use client'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './InputArea.module.scss'
import Button from '@/components/Button/Button'
import { createChat } from '@/store/chats/chatsState'
import { useAppDispatch } from '@/store/hooks'

const InputArea = ({ }) => {
    const [userInput, setUserInput] = useState('')
    const dispatch = useAppDispatch()

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserInput(ev.target.value)
    }

    const sendPrompt = (prompt: string) => {
        try {
            setUserInput('')
            dispatch(createChat(prompt, '/chats/create'))
        } catch (e) {
            console.error(e)
        }
    }

    const handleClick = () => {
        if (userInput) {
            sendPrompt(userInput)
        }
    }

    const handleKeyPress = (ev: KeyboardEvent) => {
        if (ev.key === 'Enter' && userInput) {
            sendPrompt(userInput)
        }
    }

    return (
        <div className={styles.inputArea}>
            <input
                type='text'
                value={userInput}
                placeholder='Chat with DialogueDroid'
                autoFocus
                onKeyDown={handleKeyPress}
                onChange={handleInputChange}                
            />
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
    )
}

export default InputArea