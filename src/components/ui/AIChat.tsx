import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SparklesIcon, ArrowRightIcon, CloseIcon } from '../icons';

// ============================================
// SYSTEM INSTRUCTIONS - PASTE YOUR RESUME HERE
// ============================================
const SYSTEM_INSTRUCTIONS = `
Role & Identity You are the AI Assistant for Younes Hammou, a Full Stack Developer. You represent him to potential recruiters looking for a PFE (End of Studies) intern. You are professional, tech-savvy, and ambitious.

Core Knowledge (The Resume Facts)

Education: Currently pursuing a Bachelor in Engineering of Information Systems and Web Technologies at EST Sidi Bennour (2025–2026).

Professional Goal: Seeking a PFE internship with the possibility of a pre-hiring contract.

Technical Stack: Expert in Java (Spring Boot), PHP (Laravel), and TypeScript (Angular, React).

Database & DevOps: Proficient in Oracle and MySQL, as well as Docker, GitLab CI/CD, and Ansible.

Work Experience:

Palace Agency: Built a delivery management web app using Laravel and MySQL.

Commune Dcheira: Designed a digitalization platform for civil status documents.

Behavioral Guidelines

Response Style: Keep answers very concise (1–3 sentences) to fit a chat bubble.

Language: You are fluent in Arabic, French, and English. Always reply in the same language the user uses.

Tone: Confident and focused on innovation.

Guardrails: If asked about personal topics or anything non-career related, say: "I am here to discuss Younes's professional profile and how his skills in Spring Boot and React can benefit your project. Would you like to see his projects?"`;

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'model',
          parts: [{ text: "Hi! 👋 I'm Younes's AI assistant. Feel free to ask me about his skills, projects, experience, or anything else you'd like to know!" }],
        },
      ]);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      parts: [{ text: inputValue.trim() }],
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // Initialize the Gemini API
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found.');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        systemInstruction: SYSTEM_INSTRUCTIONS,
      });

      // Build conversation history for context (exclude the initial welcome message)
      // Gemini requires history to start with a 'user' role
      const history = messages
        .slice(1) // Skip the initial welcome message
        .filter((_, index) => index < messages.length - 2) // Exclude current message (already being sent)
        .map((msg) => ({
          role: msg.role,
          parts: msg.parts,
        }));

      // Start a chat session (only include history if it starts with user)
      const chat = model.startChat({
        history: history.length > 0 && history[0].role === 'user' ? history : [],
      });

      // Send the message and get response
      const result = await chat.sendMessage(inputValue.trim());
      const response = await result.response;
      const text = response.text();

      const modelMessage: Message = {
        role: 'model',
        parts: [{ text }],
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response');
      
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          parts: [{ text: "I'm sorry, I encountered an error. Please try again or contact Younes directly via email." }],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What are Younes's main skills?",
    "Tell me about his projects",
    "What's his experience?",
    "Is he available for work?",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Container */}
      <div
        className="
          relative w-full max-w-lg
          bg-[var(--background)] border border-[var(--card-border)]
          rounded-2xl shadow-2xl
          flex flex-col
          max-h-[80vh] overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]">
              <SparklesIcon size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">AI Assistant</h3>
              <p className="text-xs text-[var(--muted)]">Ask me about Younes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[85%] px-4 py-3 rounded-2xl
                  ${message.role === 'user'
                    ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white'
                    : 'bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)]'
                  }
                `}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.parts[0].text}
                </p>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[var(--card)] border border-[var(--card-border)] px-4 py-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-sm text-[var(--muted)]">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          {/* Error display */}
          {error && (
            <div className="text-center">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions (show only when few messages) */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-[var(--muted)] mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(question);
                    inputRef.current?.focus();
                  }}
                  className="
                    px-3 py-1.5 text-xs
                    bg-[var(--card)] border border-[var(--card-border)]
                    text-[var(--muted)] hover:text-[var(--foreground)]
                    rounded-full
                    hover:border-[var(--accent)]
                    transition-all duration-200
                  "
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-[var(--card-border)]">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="
                flex-1 px-4 py-3
                bg-[var(--card)] border border-[var(--card-border)]
                text-[var(--foreground)] placeholder-[var(--muted)]
                rounded-xl
                focus:outline-none focus:border-[var(--accent)]
                transition-colors duration-200
                disabled:opacity-50
              "
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="
                p-3 rounded-xl
                bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
                text-white
                hover:opacity-90
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
