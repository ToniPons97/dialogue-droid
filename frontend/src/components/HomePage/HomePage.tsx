import RippleButton from '../RippleButton/RippleButton'
import styles from './HomePage.module.scss'
import Blob from '../Blob/Blob'

const HomePage = () => {
    return (
        <section className={styles.home}>
            <Blob />
            <div className={styles.banner}>
                <h1>AI-Driven Conversations <br /> Unleashed</h1>
            </div>
            <RippleButton>Get Started</RippleButton>
        </section>
    )
}

export default HomePage