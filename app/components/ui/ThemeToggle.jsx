'use client';

import { motion } from 'framer-motion';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '@/app/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-20 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'minimal' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'cyberpunk' ? (
                    <IconMoon className="w-5 h-5 text-primary" />
                ) : (
                    <IconSun className="w-5 h-5 text-yellow-400" />
                )}
            </motion.div>
        </motion.button>
    );
}
