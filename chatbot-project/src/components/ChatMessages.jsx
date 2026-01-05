import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css';
export function ChatMessages({ messages }) {
  const chatMessagesRef = useRef('.chat-messages-container');
  useEffect(() => {
    const constElem = chatMessagesRef.current;
    if (constElem) {
      constElem.scrollTop = constElem.scrollHeight;
    }
  }, [messages]);
  return (
    <div className='chat-messages-container' ref={chatMessagesRef}>
      {messages.map((chat) => (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
        />
      ))}
    </div>
  );
}
