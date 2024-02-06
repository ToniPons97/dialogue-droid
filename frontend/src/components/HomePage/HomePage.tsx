'use client'

import RippleButton from '../RippleButton/RippleButton'
import styles from './HomePage.module.scss'
import Blob from '../Blob/Blob'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const router = useRouter()

    return (
        <section className={styles.home}>
            <Blob />
            <div className={styles.banner}>
                <h1>
                    AI-Driven
                    <br className={styles.lineBreak1} /> Conversations
                    <br className={styles.lineBreak2} />
                    Unleashed
                </h1>
            </div>
            <RippleButton onClick={() => router.push('/chat')}>Get Started</RippleButton>
        </section>
    )
}

export default HomePage