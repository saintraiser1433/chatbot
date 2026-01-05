import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
export function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState('');
  function sendMessage() {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ]);

    const response = Chatbot.getResponse(inputText);

    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);

    setInputText('');
  }
  return (
    <div className='chat-input-container'>
      <input
        placeholder='Type your message...'
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        size='30'
        className='chat-input'
      />

      <button className='send-button' onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
