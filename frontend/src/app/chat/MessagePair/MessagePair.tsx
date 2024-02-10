'use client'
import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { format } from 'date-fns'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch } from 'react-redux'
import { deleteChat } from '@/lib/chats/chatsState'
import { useState } from 'react'
import { MessagePairProps } from '@/types/chatTypes'
import ReadMore from '../ReadMore/ReadMore'

const MessagePair = ({ id, userPrompt, response, date }: MessagePairProps) => {
  const formatedDate = format(new Date(date), "MMM dd, yyyy 'at' HH:mm")
  const dispatch = useDispatch()

  const [like, setLike] = useState(false)


  const removeChat = async (id: string) => {
    try {
      dispatch(deleteChat(id, '/chat'))
    } catch (e) {
      console.error(e)
    }
  }

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
        <div className={styles.messaBoxIcons}>
          <div onClick={() => setLike(!like)} role='button'>
            <FavoriteIcon style={{ color: like ? '#1FAE55' : 'white' }} />
          </div>
          <div onClick={() => removeChat(id)} role='button'>
            <DeleteIcon sx={{ color: '#FF7F7F' }} />
          </div>
        </div>
        <p>{userPrompt}</p>
      </div>
      <div className={styles.messageBox}>
        <Image style={{marginBottom: '10px'}} src='/droid.png' width={30} height={30} alt='droid icon' />

        <ReadMore>
          {response}
        </ReadMore>
      </div>
    </>
  )
}

export default MessagePair