"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('system');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
            setTheme(savedTheme);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (t: Theme) => {
            const isDark = t === 'dark' || (t === 'system' && mediaQuery.matches);
            root.classList.toggle('dark', isDark);
        };

        applyTheme(theme);
        localStorage.setItem('theme', theme);

        const handleSystemThemeChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme, mounted]);

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
