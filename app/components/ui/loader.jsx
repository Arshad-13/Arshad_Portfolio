'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING...");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoadingComplete, 500);
                    return 100;
                }

                // Randomize progress increments for "hacking" feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        const texts = [
            "ESTABLISHING CONNECTION",
            "LOADING ASSETS",
            "DECRYPTING BIO_DATA",
            "CONFIGURING NEURAL LINK",
            "SYSTEM READY"
        ];

        let textIndex = 0;
        const textInterval = setInterval(() => {
            if (textIndex < texts.length) {
                setText(texts[textIndex]);
                textIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#030305] flex flex-col items-center justify-center font-mono text-primary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-64 space-y-4">
                <div className="flex justify-between text-xs tracking-widest uppercase">
                    <span>Sys_Boot.exe</span>
                    <span>{Math.round(progress)}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1 bg-primary/20 w-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="h-6 text-center">
                    <span className="text-xs text-primary/70 animate-pulse tracking-widest">
                        {'>'} {text}
                    </span>
                </div>
            </div>

            {/* Background Grid - subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </motion.div>
    );
};

export default Loader;
