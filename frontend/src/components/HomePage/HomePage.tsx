import RippleButton from '../RippleButton/RippleButton'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <section className={styles.home}>
            <div className={styles.banner}>
                <h1>AI-Driven Conversations <br /> Unleashed</h1>
            </div>
            <RippleButton>Get Started</RippleButton>
        </section>
    )
}

export default HomePage