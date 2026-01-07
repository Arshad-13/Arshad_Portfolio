'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export default function KonamiCode() {
    const [keys, setKeys] = useState([]);
    const [activated, setActivated] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            setKeys(prev => [...prev.slice(-9), e.key]);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        if (keys.length === 10 && keys.join(',') === KONAMI_CODE.join(',')) {
            setActivated(true);

            // Show message and hide after 5 seconds
            setTimeout(() => setActivated(false), 5000);
        }
    }, [keys]);

    return (
        <AnimatePresence>
            {activated && (
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                >
                    <div className="bg-black/90 backdrop-blur-xl border-4 border-primary p-12 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.5)]">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                textShadow: [
                                    '0 0 10px rgba(0,243,255,0.5)',
                                    '0 0 30px rgba(0,243,255,1)',
                                    '0 0 10px rgba(0,243,255,0.5)'
                                ]
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-6xl font-heading text-primary text-center"
                        >
                            🎮 DEVELOPER MODE ACTIVATED 🎮
                        </motion.div>
                        <p className="text-white text-center mt-4 font-mono text-sm">
                            You found the secret! Check the console for a surprise...
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
