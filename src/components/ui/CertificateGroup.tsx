import React from 'react';

interface Certificate {
    name: string;
    issuer: string;
    impact: string;
}

interface CertificateGroupProps {
    domain: string;
    certificates: Certificate[];
}

const CertificateGroup: React.FC<CertificateGroupProps> = ({ domain, certificates }) => {
    return (
        <div className="mb-12 last:mb-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                {domain}
            </h3>
            <div className="grid grid-cols-1 gap-6">
                {certificates.map((cert, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4">
                            <span className="text-base font-medium text-foreground leading-tight">{cert.name}</span>
                            <span className="text-[10px] md:text-xs font-mono text-muted/60 uppercase tracking-wider">{cert.issuer}</span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed italic">
                            — {cert.impact}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateGroup;
