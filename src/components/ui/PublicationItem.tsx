import React from 'react';

interface PublicationItemProps {
    title: string;
    journal: string;
    year: number;
    reflection: string;
    link?: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({
    title,
    journal,
    year,
    reflection,
    link
}) => {
    return (
        <div className="py-8 border-b border-border last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                <h3 className="text-lg font-medium text-foreground tracking-tight leading-tight">
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline decoration-accent/10 underline-offset-4">
                            {title}
                        </a>
                    ) : title}
                </h3>
                <span className="text-sm font-mono text-muted/60">
                    {journal} · {year}
                </span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed italic max-w-3xl">
                <span className="text-accent font-bold not-italic mr-2">Reflective note:</span>
                {reflection}
            </p>
        </div>
    );
};

export default PublicationItem;
