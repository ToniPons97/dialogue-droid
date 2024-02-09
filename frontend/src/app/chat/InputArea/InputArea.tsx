import { ChangeEvent, useState } from 'react'
import styles from './InputArea.module.scss'
import { useDispatch } from 'react-redux'
import Button from '@/components/Button/Button'
import { createChat } from '@/lib/chats/chats.slice'

const InputArea = ({ }) => {
    const [userInput, setUserInput] = useState('')

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserInput(ev.target.value)
    }

    const sendPrompt: any = async (prompt: string) => {
        try {
            setUserInput('')
            dispatch(createChat(prompt, '/chat'))
        } catch (e) {
            console.error(e)
        }
    }

    const handleClick = () => {
        if (userInput) {
            sendPrompt(userInput)
        }
    }

    const dispatch = useDispatch()

    return (
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
    )
}

export default InputArea