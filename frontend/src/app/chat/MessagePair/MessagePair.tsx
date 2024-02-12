'use client'
import styles from './MessagePair.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import { format } from 'date-fns'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { deleteChat, toggleFavoriteThunk } from '@/store/chats/chatsState'
import ReadMore from './ReadMore/ReadMore'
import { Tooltip } from '@mui/material'
import { Chat } from '@/types/chatTypes'
import { useAppDispatch } from '@/store/hooks'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react'

const MessagePair = ({ id, userPrompt, response, createdAt, favorite }: Chat) => {
  const formatedDate = format(new Date(createdAt), "MMM dd, yyyy 'at' HH:mm")
  const dispatch = useAppDispatch()

  const onRemoveChat = (id: string) => {
    try {
      dispatch(deleteChat(id, '/chats/delete'))
    } catch (e) {
      console.error(e)
    }
  }

  const onToggleFavorite = () => {
    dispatch(toggleFavoriteThunk(id, !favorite, '/chats/favorite'))
  }

  const [ copied, setCopied ] = useState(false);


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
          <div onClick={() => onToggleFavorite()} role='button'>
            <Tooltip title='Add to favorites'>
              <FavoriteIcon style={{ color: favorite ? '#1FAE55' : 'white' }} />
            </Tooltip>
          </div>
          <div onClick={() => onRemoveChat(id)} role='button'>
            <Tooltip title='Delete'>
              <DeleteIcon sx={{ color: '#FF7F7F' }} />
            </Tooltip>
          </div>
        </div>
        <p>{userPrompt}</p>
      </div>
      <div className={styles.messageBox}>
        <Image
          style={{ marginBottom: '10px' }}
          src='/droid.png'
          width={30} height={30}
          alt='droid icon'
        />
        <div className={styles.messaBoxIcons}>
          <div role='button' onClick={() => setCopied(true)}>
            <CopyToClipboard text={response}>
              <Tooltip title='Copy to clipboard'>
                <AssignmentIcon />
              </Tooltip>
            </CopyToClipboard>
          </div>
          {copied && <span>Copied!</span>}
        </div>
        <ReadMore>
          {response}
        </ReadMore>
      </div>
    </>
  )
}

export default MessagePair