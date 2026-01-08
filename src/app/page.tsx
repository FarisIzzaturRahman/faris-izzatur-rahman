"use client";

import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import PublicationItem from "@/components/ui/PublicationItem";
import CertificateGroup from "@/components/ui/CertificateGroup";
import DynamicBackground from "@/components/DynamicBackground";
import MethodologyCard from "@/components/ui/MethodologyCard";
import ReadingItem from "@/components/ui/ReadingItem";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { ShieldCheck, Repeat, Search, Microscope, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <ThemeToggle />
      <DynamicBackground />

      <Hero />

      <Section id="summary" className="border-t border-border/50">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Executive Summary</h2>
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-tight">
            Passionate and results-driven <span className="text-accent underline decoration-accent/20 underline-offset-8">Bioinformatician</span> with expertise in computer science, specializing in genomics and data science.
          </p>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-3xl">
            Proficient in Python, R, Bash Scripting, and machine learning, I excel at transforming complex biological datasets into actionable insights. Committed to advancing bioinformatics, I leverage cutting-edge technologies to drive scientific discovery and innovation in genomic research.
          </p>
        </div>
      </Section>

      <Section id="experience" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">Professional Journey</h2>
        <div className="max-w-4xl">
          <ExperienceItem
            role="Bioinformatics Coordinator"
            company="PT. Genomik Solidaritas Indonesia"
            location="Jakarta, Indonesia"
            period="October 2024 – Present"
            isCurrent={true}
            description={[
              "Directing bioinformatics analysis schedules for high-throughput clinical and research workflows, ensuring timely delivery and operational excellence.",
              "Architecting personalized bioinformatics solutions by translating complex client research goals into actionable computational strategies.",
              "Bridging the gap between technical execution and client outcomes through integrated project oversight and hands-on deep-dive analysis.",
              "Completed over 65 diverse bioinformatics projects spanning genome assembly, AMR detection, and multi-omic metagenomics."
            ]}
          />
          <ExperienceItem
            role="Bioinformatician"
            company="PT. Genomik Solidaritas Indonesia"
            location="Jakarta, Indonesia"
            period="May 2023 – October 2024"
            description={[
              "Spearheaded the analysis of WGS, SARS-CoV-2, and NIPT data, driving critical clinical product outcomes through precise genomic interpretation.",
              "Streamlined operational efficiency by developing automated Python-based workflows for recurring bioinformatics processes.",
              "Integrated Machine Learning and Deep Learning frameworks to solve predictive challenges in internal operations and client services.",
              "Facilitated technical growth by training over 75 professionals through 20+ specialized bioinformatics workshops."
            ]}
          />
        </div>
      </Section>

      <Section id="public-projects" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Public Research & Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Full 16S rRNA Metagenomics (ONT)"
            context="Metagenomic profiling using long-read Oxford Nanopore sequencing data."
            challenge="Accurately estimating abundance and diversity from high-error-rate long reads while maintaining visualization clarity."
            approach="Developed a comprehensive pipeline for alpha/beta diversity and taxonomic profiling with advanced metagenomic visualizations."
            keyTakeaway="Successfully characterized complex microbial communities with high resolution using Nanopore technology."
            badges={["16S rRNA", "Nanopore", "Diversity Analysis", "Visualization"]}
            link="https://bit.ly/16s-ont-bioinformatics-analysis"
          />
          <ProjectCard
            title="Soil Microbiome QIIME2 Analysis"
            context="Comparing soil microbiomes under conventional vs. natural farming practices."
            challenge="Identifying significant microbial shifts between chemical-free and conventional agricultural environments."
            approach="Utilized QIIME2 for robust metagenomic comparisons and differential abundance testing."
            keyTakeaway="Revealed critical differences in soil microbial health influenced by farming methodology."
            badges={["QIIME2", "Soil Science", "Microbiome", "Metagenomics"]}
            link="https://bit.ly/QIIME2_project_Faris"
          />
          <ProjectCard
            title="IMPUTE2 Wrapper & SNP Analytics"
            context="Python-based automation for human genome imputation workflows."
            challenge="Wrapping complex IMPUTE2 outputs to facilitate efficient SNP calculation and downstream analysis."
            approach="Developed a Python tool to parse and aggregate imputation results into standard analysis formats."
            keyTakeaway="Drastically reduced the time required to post-process large-scale imputation datasets."
            badges={["Python", "Human Genetics", "Automation", "SNP Analytics"]}
            link="github.com/FarisIzzaturRahman/snp_count"
          />
        </div>
      </Section>
      <Section id="projects">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Domain-Specific Expertise (65+ Projects)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Microbial & Metagenomic Profiling"
            context="Scaling metagenomic analysis for AMR detection and complex ecosystems (16S, 18S, ITS, COI)."
            challenge="Managing high-throughput shotgun sequencing data for pathogenic bacteria profiling across diverse environmental samples."
            approach="Standardized a robust metagenomics suite including SARS-CoV-2 variant identification and bacterial pan-genome analysis."
            keyTakeaway="Delivered actionable insights for both research initiatives and high-stakes clinical applications."
            badges={["Metagenomics", "AMR", "Viral ID", "Clinical"]}
          />
          <ProjectCard
            title="Agricultural & Plant Genomics"
            context="Analyzing complex plant genomes to support agricultural biotechnology."
            challenge="Handling large-scale plant genomic datasets with significant repetitive elements and structural variation."
            approach="Applied advanced assembly algorithms and comparative genomic frameworks to identify key traits."
            keyTakeaway="Successfully integrated bacterial pan-genome insights with plant host data for systemic understanding."
            badges={["Plant Science", "Genome Assembly", "Pan-genome"]}
          />
          <ProjectCard
            title="Human Methylation & Epigenomics"
            context="Precision medicine applications focusing on clinical biomarkers."
            challenge="Decoding high-dimensional methylation array data into significant biological patterns."
            approach="Developed custom normalization and analysis pipelines to ensure statistical rigor in biomarker discovery."
            keyTakeaway="Provided foundational data for diagnostic product development in the clinical genomic space."
            badges={["Epigenomics", "Methylation", "Machine Learning"]}
          />
          <div className="flex flex-col justify-center items-center p-8 border border-dashed border-border text-center bg-background/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <Microscope className="text-accent/40 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} />
            <p className="text-sm text-muted mb-4 italic relative">
              65+ end-to-end bioinformatics projects completed across genomics, clinical research, and IT automation.
            </p>
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent relative">Strategic Professional Impact</span>
          </div>
        </div>
      </Section>

      <Section id="teaching" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Teaching & Facilitation</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">Technical Training Facilitator</h3>
            <p className="text-foreground/80 leading-relaxed">
              I act as a bridge between technology and research by conducting technical workshops and training sessions. My focus is on empowering scientists with the computational tools they need to unlock biological insights.
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="p-4 bg-background border border-border">
                <div className="text-2xl font-bold text-accent">75+</div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Professionals Trained</div>
              </div>
              <div className="p-4 bg-background border border-border">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Training Sessions</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted list-disc list-inside">
              <li>Intro to Unix for Genomics & Post-NGS workflows</li>
              <li>Workflow Orchestration & Reproducibility (Nextflow/Python)</li>
              <li>Machine Learning application in Clinical Genomics</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-8 border border-border bg-background/50">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-70">Recent Reading & Notes</h4>
            <div className="space-y-4">
              <ReadingItem title="Reproducible Bioinformatics" author="Nature Reviews" type="Paper" />
              <ReadingItem title="Nextflow in Production" author="Seqera Docs" type="Newsletter" />
              <ReadingItem title="Algorithms in Bioinformatics" author="Dan Gusfield" type="Book" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="publications">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Scientific Contributions</h2>
        <div className="space-y-4">
          <PublicationItem
            title="Optimisation of peptides targeting reverse transcriptase HIV-1 using QSAR, machine learning, and computational approaches"
            journal="Frontiers in Pharmacology"
            year={2025}
            reflection="Synthesized structural biology with ML to navigate high-dimensional peptide space, effectively narrowing the candidate pool for future therapeutic validation."
            link="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1707377/full"
          />
          <PublicationItem
            title="Revealing Pogostemon cablin (Blanco) Benth. and Murraya koenigii (L.) Spreng. action targets on AKT1 as papillary thyroid cancer therapy based on bioinformatics approach"
            journal="Journal of Pharmacy & Pharmacognosy Research"
            year={2025}
            reflection="Bridged the gap between traditional pharmacognosy and systems biology, identifying AKT1 as a key molecular vulnerability for targeted herbal therapeutics."
            link="https://jppres.com/jppres/pdf/vol13/jppres24.2163_13.s1.100.pdf"
          />
          <PublicationItem
            title="Targeting phosphoglycerate dehydrogenase enzyme using ginger compounds to suppress thyroid cancer progression"
            journal="Narra X"
            year={2024}
            reflection="Developed a robust virtual screening framework to evaluate ginger-derived lead compounds, providing a computational foundation for suppressive metabolic cancer therapy."
            link="https://narrax.org/main/article/view/112"
          />
        </div>
      </Section>

      <Section id="learning" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Learning Impact & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Intensive Summer Schools */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mb-6">Intensive Summer Schools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border bg-background/50 relative group">
                <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-muted/40 uppercase">2024</div>
                <h4 className="text-lg font-semibold mb-2 pr-12 leading-tight">HPC Foundation in Computational Biomolecular Research</h4>
                <div className="text-xs font-medium text-accent uppercase tracking-wider mb-4">BRIN · Cibinong</div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Deep dive into HPC infrastructure, molecular docking/dynamics, and complex systems via data, network, and AI frameworks.
                </p>
              </div>
              <div className="p-6 border border-border bg-background/50 relative group">
                <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-muted/40 uppercase">2023</div>
                <h4 className="text-lg font-semibold mb-2 pr-12 leading-tight">Genomics & 'Omics in Infectious Diseases</h4>
                <div className="text-xs font-medium text-accent uppercase tracking-wider mb-4">USU & LSHTM · Medan</div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Advanced training in variant detection, eQTLs, GWAS, and phylo-dynamics mentored by London School of Hygiene & Tropical Medicine experts.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mt-12 mb-6">Technical Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificateGroup
                domain="Cloud & Machine Learning"
                certificates={[
                  { name: "AWS Academy ML Foundation", issuer: "Amazon Web Services", impact: "Mastered SageMaker, Computer Vision, and NLP on cloud-native infrastructure." },
                  { name: "AWS Solutions Architect", issuer: "Amazon", impact: "Designing scalable, secure cloud architectures for bioinformatics workloads." }
                ]}
              />
              <CertificateGroup
                domain="Deep Learning & IT"
                certificates={[
                  { name: "Getting Started with Deep Learning", issuer: "NVIDIA DLI", impact: "Implemented GAN architectures and image classification with Python-first focus. Deep dive into Python." },
                  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", impact: "Applied neural networks to classify phenotypic patterns from genomic markers." }
                ]}
              />
            </div>
          </div>

          {/* Continuous Learning Path */}
          <div className="lg:col-span-1 border-l border-border/50 pl-0 lg:pl-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mb-6 font-mono text-center lg:text-left">Continuous Learning Path</h3>
            <div className="space-y-4">
              {[
                { title: "Analyzing Genomics Datasets", provider: "Future Learn" },
                { title: "Intro to Linux, Bash & R", provider: "Future Learn" },
                { title: "Algorithms for DNA Sequencing", provider: "Johns Hopkins" },
                { title: "Python for Genomic Data Science", provider: "Johns Hopkins" },
                { title: "Data Science of Health Informatics", provider: "Johns Hopkins" },
                { title: "Genomic Medicine: Patient Care", provider: "Exeter" },
                { title: "Genomics to Understand Pandemics", provider: "Wellcome Sanger" }
              ].map((course, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-xs font-medium text-foreground/80 group-hover:text-accent transition-colors">{course.title}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted opacity-60">{course.provider}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Collaboration & Contact</h2>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let's discuss systems and science.</h3>
          <p className="text-lg text-foreground/70 leading-relaxed mb-10">
            I'm always open to discussing new research opportunities, technical collaborations, or simply sharing insights about the evolving landscape of bioinformatics. Whether you have a specific project in mind or just want to chat about genomic data, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:farisizzaturrahman@gmail.com"
              className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Start a Conversation
            </a>
            <div className="flex items-center gap-6 text-sm font-mono tracking-[0.2em] uppercase">
              <a href="https://www.linkedin.com/in/farisizzaturrahman" target="_blank" className="text-muted hover:text-accent transition-colors underline decoration-border underline-offset-8">LinkedIn</a>
              <a href="https://github.com/farisizzaturrahman" target="_blank" className="text-muted hover:text-accent transition-colors underline decoration-border underline-offset-8">GitHub</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-border/20 text-center">
        <p className="text-[10px] text-muted/40 uppercase tracking-[0.4em]">
          Faris IR · 2026
        </p>
      </footer>
    </div >
  );
}
