'use client'

import styles from './ChatDisplay.module.scss'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import Button from '@/components/Button/Button';

const ChatDisplay = () => {
    return (
        <section className={styles.chatDisplay}>
            <div className={styles.messages}>
                <div className={styles.messageBox}>
                    <PersonIcon
                        fontSize='medium'
                        sx={{
                            color: 'grey',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                        }}
                    />
                    <div>
                        <p>who wins between Fischer and Karpov?</p>
                    </div>
                </div>
                <div className={styles.messageBox}>
                    <Image src='/logo.png' width={70} height={70} alt='droid icon' />
                    <p>
                        In historical chess matches, there were no direct encounters between Bobby Fischer and Anatoly Karpov. However, they both faced different opponents in multiple World Chess Championship matches. Fischer won the World Chess Championship in 1972, defeating Boris Spassky. Karpov won the title in 1975 and defended it successfully until 1984 when he lost against Garry Kasparov.
                        Therefore, it is difficult to determine who would have won
                        if Fischer and Karpov had played against each other directly.
                    </p>
                </div>
            </div>
            <div className={styles.inputArea}>
                <input type='text' />
                <Button width='150px' height='50px' fontSize='21px' onClick={() => console.log('click')}>Send</Button>
            </div>
        </section>
    )
}

export default ChatDisplay