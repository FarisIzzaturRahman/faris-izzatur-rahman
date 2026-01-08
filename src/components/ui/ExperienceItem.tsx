import React from 'react';

interface ExperienceItemProps {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    isCurrent?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    role,
    company,
    location,
    period,
    description,
    isCurrent
}) => {
    return (
        <div className="relative pl-8 pb-12 last:pb-0 border-l border-border">
            {/* Timeline Dot */}
            <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background ${isCurrent ? 'bg-accent' : 'bg-muted'}`} />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-4">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{role}</h3>
                    <div className="text-sm font-medium text-accent uppercase tracking-wider">{company} · {location}</div>
                </div>
                <span className="text-sm font-mono text-muted whitespace-nowrap">{period}</span>
            </div>

            <ul className="space-y-3">
                {description.map((item, index) => (
                    <li key={index} className="text-sm text-foreground/80 leading-relaxed flex gap-3">
                        <span className="text-accent mt-1.5 block w-1 h-1 rounded-full shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceItem;
