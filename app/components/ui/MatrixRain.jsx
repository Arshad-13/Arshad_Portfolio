'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MatrixRain() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            // Press 'M' key to toggle Matrix rain
            if (e.key === 'm' || e.key === 'M') {
                setShow(prev => !prev);

                if (!show) {
                    // Auto-hide after 10 seconds
                    setTimeout(() => setShow(false), 10000);
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [show]);

    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden"
            >
                <div className="matrix-rain">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="matrix-column"
                            style={{
                                left: `${i * 5}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        >
                            {Array.from({ length: 20 }).map((_, j) => (
                                <span key={j} className="matrix-char">
                                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
