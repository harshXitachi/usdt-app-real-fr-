import React, { useState, useRef, useEffect } from 'react';
import { generateSupportResponse } from '../services/gemini';
import { IconHeadset, IconChevronRight } from '../components/Icons';

interface SupportScreenProps {
  onClose: () => void;
}

const SupportScreen: React.FC<SupportScreenProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'Hello! I am your UMONEY AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const response = await generateSupportResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center gap-3">
        <button onClick={onClose} className="p-1">
          <IconChevronRight className="w-6 h-6 rotate-180 text-gray-600" />
        </button>
        <div className="flex-1">
           <h1 className="font-bold text-gray-800 flex items-center gap-2">
             <IconHeadset className="w-5 h-5 text-blue-600" />
             Support Center
           </h1>
           <span className="text-xs text-green-500 font-medium">Online • AI Powered</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 p-3 rounded-2xl rounded-tl-none animate-pulse text-gray-500 text-xs">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white p-4 border-t border-gray-200 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button 
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );
};

export default SupportScreen;