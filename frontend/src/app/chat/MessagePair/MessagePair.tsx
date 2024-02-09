import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { format } from 'date-fns'
import Image from 'next/image'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

type MessagePairProps = {
  userPrompt: string
  response: string
  date: string
}

const MessagePair = ({ userPrompt, response, date }: MessagePairProps) => {
  const formatedDate = format(new Date(date), "MMM dd, yyyy 'at' HH:mm")

  return (
    <>
      <p style={{ color: 'white' }}>{formatedDate}</p>
      <div className={styles.messageBox}>
        <PersonIcon
          fontSize='medium'
          sx={{
            color: 'grey',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
        <MoreHorizIcon />
        <p>{userPrompt}</p>
      </div>
      <div className={styles.messageBox}>
        <Image src='/droid.png' width={30} height={30} alt='droid icon' />
        <p>{response}</p>
      </div>
    </>
  )
}

export default MessagePair