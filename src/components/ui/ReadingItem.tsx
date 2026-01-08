import React from 'react';
import { BookOpen } from 'lucide-react';

interface ReadingItemProps {
    title: string;
    author: string;
    type: 'Paper' | 'Book' | 'Newsletter';
}

const ReadingItem: React.FC<ReadingItemProps> = ({ title, author, type }) => {
    return (
        <div className="flex items-start gap-4 p-4 border border-border bg-background/30 hover:bg-background/50 transition-colors">
            <div className="mt-1 text-accent/60">
                <BookOpen size={16} />
            </div>
            <div>
                <h4 className="text-sm font-medium text-foreground">{title}</h4>
                <p className="text-xs text-muted">{author} · <span className="opacity-70">{type}</span></p>
            </div>
        </div>
    );
};

export default ReadingItem;
