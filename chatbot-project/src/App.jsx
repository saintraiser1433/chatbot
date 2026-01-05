import { useState } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import { ChatMessages } from './components/ChatMessages.jsx';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello ChatBot',
      sender: 'user',
      id: 1,
    },
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 2,
    },
    {
      message: 'can you get me todays date?',
      sender: 'user',
      id: 3,
    },
    {
      message: 'Today is September 27',
      sender: 'robot',
      id: 4,
    },
  ]);
  return (
    <div className='app-container'>
      <ChatMessages messages={messages} />
      <ChatInput setChatMessages={setMessages} />
    </div>
  );
}

export default App;
