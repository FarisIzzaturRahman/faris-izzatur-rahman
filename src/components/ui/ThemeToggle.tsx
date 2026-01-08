"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else if (theme === 'light') {
            root.classList.remove('dark');
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            if (systemTheme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        }
    }, [theme]);

    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1 bg-background/50 backdrop-blur-md border border-border rounded-full shadow-sm">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-accent text-background' : 'text-muted hover:text-foreground'}`}
                aria-label="Light mode"
            >
                <Sun size={14} />
            </button>
            <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-accent text-background' : 'text-muted hover:text-foreground'}`}
                aria-label="System theme"
            >
                <Laptop size={14} />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-accent text-background' : 'text-muted hover:text-foreground'}`}
                aria-label="Dark mode"
            >
                <Moon size={14} />
            </button>
        </div>
    );
};

export default ThemeToggle;
