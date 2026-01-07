'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
    return (
        <div className="relative py-12">
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
            />

            {/* Decorative dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(188,19,254,0.5)]"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
            </div>
        </div>
    );
}
