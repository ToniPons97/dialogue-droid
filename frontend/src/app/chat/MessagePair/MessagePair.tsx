'use client'
import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { format } from 'date-fns'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch } from 'react-redux'
import { deleteChat } from '@/store/chats/chatsState'
import { useState } from 'react'
import ReadMore from './ReadMore/ReadMore'
import { Tooltip } from '@mui/material'
import { Chat } from '@/types/chatTypes'


const MessagePair = ({ id, userPrompt, response, createdAt, favorite }: Chat) => {
  const formatedDate = format(new Date(createdAt), "MMM dd, yyyy 'at' HH:mm")
  const dispatch = useDispatch()


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
          <div onClick={() => console.log('adding to favorite')} role='button'>
            <Tooltip title='Add to favorites'>
              <FavoriteIcon style={{ color: favorite ? '#1FAE55' : 'white' }} />
            </Tooltip>
          </div>
          <div onClick={() => removeChat(id)} role='button'>
            <Tooltip title='Delete'>
              <DeleteIcon sx={{ color: '#FF7F7F' }} />
            </Tooltip>
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