import React, { useState, useEffect } from 'react';
import { RefreshCw, Heart, Star } from 'lucide-react';

const App = () => {
    const [currentQuote, setCurrentQuote] = useState(0);
    const [currentBg, setCurrentBg] = useState(0);
    const [fadeClass, setFadeClass] = useState('opacity-100');

    const motivationalQuotes = [
        "Dear Violetta, your dreams are the compass to your extraordinary future.",
        "Violetta, you have the power to create the life you've always imagined.",
        "Every challenge, Violetta, is just another opportunity for you to shine brighter.",
        "Your unique light, Violetta, is exactly what this world needs.",
        "Violetta, remember that progress, not perfection, is the key to your success.",
        "You are capable of amazing things, Violetta. Trust your journey.",
        "Violetta, your strength grows every time you choose courage over comfort.",
        "The best chapters of your story, Violetta, are yet to be written.",
        "Violetta, you are not just surviving - you are thriving and inspiring.",
        "Your potential, Violetta, is infinite. Keep believing in yourself.",
        "Violetta, every small step you take is moving you closer to your dreams.",
        "You have overcome challenges before, Violetta, and you will again.",
        "Violetta, your kindness and determination make you unstoppable.",
        "The world is better because you're in it, Violetta.",
        "Violetta, trust the process and celebrate every victory, no matter how small."
    ];

    const backgrounds = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    ];

    const generateNewQuote = () => {
        setFadeClass('opacity-0');
        setTimeout(() => {
            setCurrentQuote(prev => (prev + 1) % motivationalQuotes.length);
            setCurrentBg(prev => (prev + 1) % backgrounds.length);
            setFadeClass('opacity-100');
        }, 300);
    };

    const getRandomQuote = () => {
        setFadeClass('opacity-0');
        setTimeout(() => {
            const randomQuoteIndex = Math.floor(Math.random() * motivationalQuotes.length);
            const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
            setCurrentQuote(randomQuoteIndex);
            setCurrentBg(randomBgIndex);
            setFadeClass('opacity-100');
        }, 300);
    };

    useEffect(() => {
        // Auto-change quote every 10 seconds
        const interval = setInterval(() => {
            generateNewQuote();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-in-out"
            style={{ background: backgrounds[currentBg] }}
        >
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-white/20 text-6xl animate-pulse">
                <Star />
            </div>
            <div className="absolute top-20 right-16 text-white/20 text-4xl animate-bounce">
                <Heart />
            </div>
            <div className="absolute bottom-16 left-20 text-white/20 text-5xl animate-pulse">
                <Star />
            </div>
            <div className="absolute bottom-10 right-10 text-white/20 text-3xl animate-bounce">
                <Heart />
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
                        Violetta's
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-white/90 tracking-widest drop-shadow-md">
                        Motivation Hub
                    </h2>
                    <div className="w-32 h-1 bg-white/40 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Quote container */}
                <div className={`bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-opacity duration-300 ${fadeClass}`}>
                    <div className="text-white text-xl md:text-3xl leading-relaxed font-light mb-8 min-h-24 flex items-center justify-center">
                        "{motivationalQuotes[currentQuote]}"
                    </div>

                    {/* Quote counter */}
                    <div className="text-white/70 text-sm mb-8">
                        Quote {currentQuote + 1} of {motivationalQuotes.length}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={generateNewQuote}
                            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/30 hover:scale-105 transform"
                        >
                            <RefreshCw size={18} />
                            Next Quote
                        </button>

                        <button
                            onClick={getRandomQuote}
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20 hover:scale-105 transform"
                        >
                            <Star size={18} />
                            Random Quote
                        </button>
                    </div>
                </div>

                {/* Footer message */}
                <div className="mt-12 text-white/70 text-lg font-light">
                    Made with 💜 for Violetta's daily inspiration
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    >
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;