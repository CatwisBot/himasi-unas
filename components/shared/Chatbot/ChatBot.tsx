"use client";

import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

type Message = { sender: 'user' | 'bot'; content: string };

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user' as const, content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Add loading message
        const loadingMessage = { sender: 'bot' as const, content: '🤔 Sedang berpikir...' };
        setMessages((prev) => [...prev, loadingMessage]);

        try {
            // Use alternative endpoint to bypass Sucuri firewall
            const apiUrl = '/chatbot.php';  // Alternative endpoint at root level
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            if (!response.ok) {
                console.error('API Error:', response.status, response.statusText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            
            // Remove loading message and add actual response
            setMessages((prev) => {
                const messagesWithoutLoading = prev.slice(0, -1);
                const botMessage = { 
                    sender: 'bot' as const, 
                    content: data.answer || data.response || 'Maaf, terjadi kesalahan dalam memproses pertanyaan Anda.' 
                };
                return [...messagesWithoutLoading, botMessage];
            });

        } catch (error) {
            console.error('Error sending message:', error);
            
            // Remove loading message and show error
            setMessages((prev) => {
                const messagesWithoutLoading = prev.slice(0, -1);
                const errorMessage = { 
                    sender: 'bot' as const, 
                    content: '❌ Maaf, chatbot sedang tidak tersedia. Silakan coba lagi atau hubungi admin.' 
                };
                return [...messagesWithoutLoading, errorMessage];
            });
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-window">
                {messages.length === 0 && (
                    <div className="welcome-message">
                        <div className="welcome-icon">🤖</div>
                        <h4>Halo! Saya Asisten HIMASI UNAS</h4>
                        <p>Tanya saya tentang HIMASI UNAS, kegiatan organisasi, atau hal-hal seputar Sistem Informasi. Saya siap membantu!</p>
                        <div className="suggested-questions">
                            <button onClick={() => setInput("Apa itu HIMASI UNAS?")}>
                                Apa itu HIMASI UNAS?
                            </button>
                            <button onClick={() => setInput("Bagaimana cara bergabung dengan HIMASI?")}>
                                Cara bergabung HIMASI?
                            </button>
                            <button onClick={() => setInput("Apa saja kegiatan HIMASI?")}>
                                Kegiatan apa saja yang ada?
                            </button>
                        </div>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <ChatMessage key={index} sender={msg.sender} message={msg.content} />
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="chat-input"
                />
                <button onClick={handleSend} className="send-button" disabled={!input.trim()}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                    </svg>
                </button>
            </div>

            <style jsx>{`
                .chatbot {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }

                .chat-window {
                    flex: 1;
                    overflow-y: auto;
                    padding: 16px;
                    background: #f8f9fa;
                    scroll-behavior: smooth;
                }

                .welcome-message {
                    text-align: center;
                    padding: 20px;
                    background: white;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .welcome-icon {
                    font-size: 32px;
                    margin-bottom: 12px;
                }

                .welcome-message h4 {
                    margin: 0 0 8px 0;
                    color: #333;
                    font-size: 18px;
                }

                .welcome-message p {
                    margin: 0 0 16px 0;
                    color: #666;
                    font-size: 14px;
                }

                .suggested-questions {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .suggested-questions button {
                    padding: 8px 12px;
                    background: #f0f0f0;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 13px;
                    color: #555;
                    transition: all 0.2s ease;
                }

                .suggested-questions button:hover {
                    background: #e0e0e0;
                    border-color: #ccc;
                }

                .chat-input-container {
                    display: flex;
                    padding: 16px;
                    background: white;
                    border-top: 1px solid #eee;
                    gap: 8px;
                    align-items: center;
                }

                .chat-input {
                    flex: 1;
                    padding: 12px 16px;
                    border: 1px solid #ddd;
                    border-radius: 24px;
                    outline: none;
                    font-size: 14px;
                    transition: border-color 0.2s ease;
                }

                .chat-input:focus {
                    border-color: #667eea;
                }

                .send-button {
                    width: 44px;
                    height: 44px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border: none;
                    border-radius: 50%;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }

                .send-button:hover:not(:disabled) {
                    transform: scale(1.05);
                }

                .send-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }

                /* Scrollbar styling */
                .chat-window::-webkit-scrollbar {
                    width: 4px;
                }

                .chat-window::-webkit-scrollbar-track {
                    background: transparent;
                }

                .chat-window::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 2px;
                }

                .chat-window::-webkit-scrollbar-thumb:hover {
                    background: #999;
                }
            `}</style>
        </div>
    );
};

export default ChatBot;