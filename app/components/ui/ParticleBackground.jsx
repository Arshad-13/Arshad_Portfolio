'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: ['#00f3ff', '#bc13fe', '#ffffff'],
                    },
                    shape: {
                        type: 'char',
                        character: {
                            value: ['<', '/', '>', '{', '}', 'AI', 'ML', '01'],
                            font: 'monospace',
                            style: '',
                            weight: '400',
                            fill: true,
                        },
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 8, max: 16 },
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: {
                            default: 'out',
                        },
                    },
                },
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.3,
                                color: '#00f3ff',
                            },
                        },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
        />
    );
}
