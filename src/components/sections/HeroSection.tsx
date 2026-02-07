import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import GradientText from '../ui/GradientText';
import { ArrowRightIcon } from '../icons';

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

const HeroSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll within chat container only (not the page)
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      parts: [{ text }],
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        systemInstruction: SYSTEM_INSTRUCTIONS,
      });

      // Build conversation history
      const history = messages.map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      }));

      const chat = model.startChat({
        history: history.length > 0 && history[0].role === 'user' ? history : [],
      });

      const result = await chat.sendMessage(text);
      const response = await result.response;
      const responseText = response.text();

      const modelMessage: Message = {
        role: 'model',
        parts: [{ text: responseText }],
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      console.error('Error:', err);
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

  const quickActions = [
    { label: 'Work', query: 'Tell me about your recent projects and work experience' },
    { label: 'About me', query: 'Tell me about yourself and your background' },
    { label: 'Skills', query: 'What are your main technical skills?' },
    { label: 'Contact', query: 'How can I contact you for a project?' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--gradient-start) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, var(--gradient-end) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(var(--muted) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="section relative z-10 pt-28 md:pt-36 pb-8">
        <h1 className="text-center mb-12 text-3xl md:text-4xl font-bold">
          <span className="text-[var(--foreground)]">Hi, I'm </span>
          <GradientText as="span" shimmer>Hammou Younes</GradientText>
        </h1>
      </div>

      {/* Chat Container - Outside .section for full width control */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="
              rounded-3xl
              border border-[var(--card-border)]
              bg-[var(--card)]/20
              backdrop-blur-sm
              overflow-hidden
            "
          >
            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="p-6 min-h-[280px] max-h-[350px] overflow-y-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {messages.length === 0 ? (
                // Empty state placeholder
                <div className="flex items-center justify-center h-full min-h-[220px]">
                  <p className="text-[var(--muted)] text-lg">
                    Ask me anything about Younes...
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`
                          max-w-[85%] px-5 py-3 rounded-2xl
                          ${message.role === 'user'
                            ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white'
                            : 'bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)]'
                          }
                        `}
                      >
                        <p className="text-sm leading-relaxed">
                          {message.parts[0].text}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-[var(--background)] border border-[var(--card-border)] px-5 py-3 rounded-2xl">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-[var(--muted)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}


                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="px-6 pb-4">
              <div className="flex flex-wrap justify-center gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.query)}
                    disabled={isLoading}
                    className="
                      px-4 py-2 text-sm font-medium
                      rounded-full
                      border border-[var(--card-border)]
                      bg-[var(--background)]/80
                      text-[var(--muted)] hover:text-[var(--foreground)]
                      hover:border-[var(--foreground)]/30
                      hover:bg-[var(--background)]
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-200
                    "
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="px-6 pb-6">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything about Younes..."
                  disabled={isLoading}
                  className="
                    w-full px-5 py-4 pr-14
                    bg-[var(--background)] border border-[var(--card-border)]
                    text-[var(--foreground)] placeholder-[var(--muted)]
                    rounded-2xl
                    focus:outline-none focus:border-[var(--foreground)]/30
                    transition-colors duration-200
                    disabled:opacity-50
                  "
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    p-2.5 rounded-xl
                    bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
                    text-white
                    hover:opacity-90
                    disabled:opacity-30 disabled:cursor-not-allowed
                    transition-all duration-200
                  "
                >
                  <ArrowRightIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]">
        <span className="text-sm">Scroll to explore</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;