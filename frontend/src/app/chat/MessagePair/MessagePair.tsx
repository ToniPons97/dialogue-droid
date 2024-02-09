import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { format } from 'date-fns'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite';

type MessagePairProps = {
  userPrompt: string
  response: string
  date: string
  id: string
}

const MessagePair = ({ id, userPrompt, response, date }: MessagePairProps) => {
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
        {/* <MoreHorizIcon /> */}
        <div className={styles.messaBoxIcons}>
          <div onClick={() => console.log('Favorite')} role='button'>
            <FavoriteIcon />
          </div>
          <div onClick={() => console.log(`deleting ${id}`)} role='button'>
            <DeleteIcon sx={{ color: '#FF7F7F' }} />
          </div>
        </div>
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