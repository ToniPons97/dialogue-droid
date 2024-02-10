import { useEffect, useState } from "react";
import styles from './ReadMore.module.scss'

type ReadMoreProps = {
    children: string
}

const ReadMore = ({ children }: ReadMoreProps) => {
    const text = children
    const characterLimit = 400

    const [showReadMore, setShowReadMore] = useState(false)
    const [isReadMore, setIsReadMore] = useState(true)

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    console.log(text.slice(0, 100));
    console.log(text.slice(0, 100).length)

    useEffect(() => {
        text.length > 300 ? setShowReadMore(true) : setShowReadMore(false)
    }, [])


    return (
        <p className={styles.text}>
            {isReadMore ? text.slice(0, characterLimit) : text}

            {
                showReadMore &&
                <span
                    onClick={toggleReadMore}
                    className={styles.readOrHide}
                >
                    {isReadMore ? "...show more" : " show less"}
                </span>

            }
        </p>
    )
}

export default ReadMore