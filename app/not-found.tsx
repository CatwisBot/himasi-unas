"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="hide-navbar-footer overflow-y-auto max-h-screen">
            <section className="bg-[#000138] min-h-full flex flex-col items-center justify-start px-4 relative overflow-hidden">
                <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
                <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-float"></div>
                <div className="absolute top-40 right-32 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-float" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-40 w-5 h-5 bg-cyan-400 rounded-full opacity-50 animate-float" style={{ animationDuration: '12s' }}></div>

                <div className="text-center max-w-2xl mx-auto relative z-10">
                    <div className="mb-0 mx-auto w-40 h-40 relative flex items-center justify-center">
                        <svg
                            className="text-white w-full h-full p-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <rect
                                    x="4"
                                    y="6"
                                    width="16"
                                    height="12"
                                    rx="2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        values="0 12 12;2 12 12;-2 12 12;1 12 12;0 12 12"
                                        keyTimes="0;0.25;0.5;0.75;1"
                                        dur="6s"
                                        repeatCount="indefinite"
                                    />
                                </rect>
                                <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="2" r="1" fill="currentColor" />

                                <circle cx="9" cy="11" r="1" fill="currentColor">
                                    <animate
                                        attributeName="r"
                                        values="1;1;0.2;1;1;0.2;1;1"
                                        keyTimes="0;0.1;0.15;0.2;0.5;0.55;0.6;1"
                                        dur="6s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle cx="15" cy="11" r="1" fill="currentColor">
                                    <animate
                                        attributeName="r"
                                        values="1;1;0.2;1;1;0.2;1;1"
                                        keyTimes="0;0.1;0.15;0.2;0.5;0.55;0.6;1"
                                        dur="6s"
                                        repeatCount="indefinite"
                                    />
                                </circle>

                                <path
                                    d="M9 15h1l1-1h2l1 1h1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    </div>

                    <h1 className="mb-6 text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient">
                        404
                    </h1>

                    <p className="mb-4 text-2xl md:text-3xl font-bold text-white">Page Not Found</p>
                    <p className="mb-8 text-lg font-light text-blue-100 max-w-md mx-auto leading-relaxed">
                        Sorry, we couldn&apos;t find the page you were looking for. It may have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl relative overflow-hidden group"
                        >
                            <span className="relative z-10">Back to Home</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                            href="https://wa.me/qr/NXZORPQUZXUCL1#"
                            className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-medium rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                        >
                            <span className="relative z-10">Contact Support</span>
                        </Link>
                    </div>

                    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                        {[...Array(50)].map((_, i) => {
                            const duration = 6 + Math.random() * 14;
                            const opacity = 0.4 + Math.random() * 0.5;
                            return (
                                <div
                                    key={i}
                                    className="absolute text-green-400 font-mono animate-fall"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        fontSize: `${14 + Math.random() * 18}px`,
                                        opacity,
                                        animationDuration: `${duration}s`
                                    }}
                                >
                                    {Math.random() > 0.5 ? '4' : '0'}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 flex justify-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80 animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes fall {
                    0% { transform: translateY(-200px) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
                .bg-grid-pattern {
                    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </div>
    );
}