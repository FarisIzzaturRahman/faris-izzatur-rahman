import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MethodologyCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div className="p-8 border border-border bg-background/40 backdrop-blur-sm flex flex-col items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full text-accent mb-2">
                <Icon size={20} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-foreground">{title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default MethodologyCard;
