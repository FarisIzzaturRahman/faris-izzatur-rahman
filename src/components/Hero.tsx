import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-[60vh] flex flex-col justify-center py-20 px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-8 opacity-70">
                    Faris Izzatur Rahman
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-foreground mb-6">
                    Architecting solutions for <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">complex biological data</span>.
                </h1>

                <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mb-10 font-normal">
                    Bridging the gap between computer science and genomic science with rigor, precision, and mature problem-solving.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                    >
                        View Projects
                    </a>
                    <a
                        href="#summary"
                        className="px-6 py-3 rounded-md border border-border text-foreground font-medium hover:bg-muted/5 transition-colors"
                    >
                        Read Summary
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
