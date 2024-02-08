import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

type MessagePairProps = {
    userPrompt: string
    response: string
}

const MessagePair = ({userPrompt, response}: MessagePairProps) => {
  return (
    <>
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
          <p>{userPrompt}</p>
        </div>
      </div>
      <div className={styles.messageBox}>
        <Image src='/droid.png' width={30} height={30} alt='droid icon' />
        <p>{response}</p>
      </div>
    </>
  )
}

export default MessagePair