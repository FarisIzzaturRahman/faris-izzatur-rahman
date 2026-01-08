import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    context: string;
    challenge: string;
    approach: string;
    keyTakeaway: string;
    badges: string[];
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    context,
    challenge,
    approach,
    keyTakeaway,
    badges,
    link
}) => {
    return (
        <div className="group relative border border-border p-6 md:p-8 hover:border-accent/60 transition-all duration-500 bg-background/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.05)] overflow-hidden">
            {/* Subtle hover accent line */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />

            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-end">
                    {badges.map((badge) => (
                        <span
                            key={badge}
                            className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 border border-border text-muted bg-muted/5 group-hover:border-accent/20 transition-colors"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-1 opacity-70">Context</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{context}</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-1 opacity-70">Challenge</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{challenge}</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-1 opacity-70">Approach</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{approach}</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-border/50 group-hover:border-accent/20 transition-colors flex flex-col gap-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Key Takeaway</h4>
                        <p className="text-sm text-foreground/90 font-medium italic leading-relaxed">
                            "{keyTakeaway}"
                        </p>
                    </div>

                    {link && (
                        <a
                            href={link.startsWith('http') ? link : `https://${link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-foreground transition-colors group/link"
                        >
                            View Project <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
