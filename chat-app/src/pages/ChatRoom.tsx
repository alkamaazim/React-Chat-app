import React from 'react'
import ChatBox from '../components/ChatBox'
import SendMessage from '../components/SendMessage'

type Props = {}

const ChatRoom = (props: Props) => {
  return (
    <React.Fragment>
      <ChatBox />
      <SendMessage />
    </React.Fragment>
  )
}

export default ChatRoom