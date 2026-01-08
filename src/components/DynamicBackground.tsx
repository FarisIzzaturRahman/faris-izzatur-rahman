"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from 'framer-motion';

const DynamicBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const shouldReduceMotion = useReducedMotion();

    // Spring-smoothed mouse position for subtle drift
    const mouseX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (shouldReduceMotion) return;
            // Calculate normalized position (-0.5 to 0.5)
            setMousePosition({
                x: (e.clientX / window.innerWidth) - 0.5,
                y: (e.clientY / window.innerHeight) - 0.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [shouldReduceMotion]);

    // Subtle parallax and drift
    const yScroll = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.06, 0.04]);

    // Mouse drift transforms (very subtle: 10px max)
    const driftX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
    const driftY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
        >
            <motion.div
                style={{
                    y: yScroll,
                    opacity,
                    x: driftX,
                    top: driftY
                }}
                className="absolute inset-0 w-full h-[130%]"
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-brand-teal dark:text-brand-emerald">
                    <defs>
                        <pattern
                            id="bio-pattern"
                            x="0"
                            y="0"
                            width="200"
                            height="200"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* Chromatogram-style peaks (Gaussian look) */}
                            <path
                                d="M 10 180 Q 30 140 50 180 Q 70 80 90 180 Q 110 160 130 180 Q 150 100 170 180"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                fill="none"
                                opacity="1"
                            />
                            <path
                                d="M 5 185 Q 35 120 65 185 Q 95 160 125 185"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                fill="none"
                                opacity="0.5"
                            />

                            {/* Vertical sequencing lanes */}
                            {[40, 80, 120, 160].map(x => (
                                <rect key={x} x={x} y="0" width="1" height="200" fill="currentColor" opacity="0.05" />
                            ))}

                            {/* Base pair "ticks" */}
                            {[20, 40, 60, 80, 100, 120, 140, 160].map(y => (
                                <rect key={y} x="38" y={y} width="5" height="1" fill="currentColor" opacity="0.2" />
                            ))}
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#bio-pattern)" />
                </svg>

                {/* Global slow drift */}
                <motion.div
                    animate={shouldReduceMotion ? {} : {
                        x: [-5, 5, -5],
                        y: [-2, 2, -2],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_100%)]"
                />
            </motion.div>
        </div>
    );
};

export default DynamicBackground;
