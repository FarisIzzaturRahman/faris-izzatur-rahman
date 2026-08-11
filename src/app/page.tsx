"use client";

import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import PublicationItem from "@/components/ui/PublicationItem";
import CertificateGroup from "@/components/ui/CertificateGroup";
import DynamicBackground from "@/components/DynamicBackground";
import ReadingItem from "@/components/ui/ReadingItem";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { Microscope } from "lucide-react";
import {
  experiencesData,
  publicProjectsData,
  domainProjectsData,
  publicationsData,
  summerSchoolsData,
  certificateGroupsData,
  continuousCoursesData,
  readingsData,
  speakingEngagementsData
} from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="relative">
      <DynamicBackground />

      <Hero />

      <Section id="summary" className="border-t border-border/50">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Professional Summary</h2>
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-tight">
            <span className="text-accent underline decoration-accent/20 underline-offset-8">Bioinformatician</span> with a background in computer science, focusing on genomic data analysis and workflow automation.
          </p>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-3xl">
            Proficient in Python, R, Bash Scripting, and machine learning, I focus on analyzing biological datasets and extracting meaningful insights. Enthusiastic about applying computational tools to support research and clinical genomics.
          </p>
        </div>
      </Section>

      <Section id="experience" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">Professional Journey</h2>
        <div className="max-w-4xl">
          {experiencesData.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              isCurrent={exp.isCurrent}
              description={exp.description}
            />
          ))}
        </div>
      </Section>

      <Section id="public-projects" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Public Research & Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publicProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              context={project.context}
              challenge={project.challenge}
              approach={project.approach}
              keyTakeaway={project.keyTakeaway}
              badges={project.badges}
              link={project.link}
            />
          ))}
        </div>
      </Section>

      <Section id="projects">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Bioinformatics Experience (80+ Projects)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domainProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              context={project.context}
              challenge={project.challenge}
              approach={project.approach}
              keyTakeaway={project.keyTakeaway}
              badges={project.badges}
            />
          ))}
          <div className="flex flex-col justify-center items-center p-8 border border-dashed border-border text-center bg-background/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <Microscope className="text-accent/40 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} />
            <p className="text-sm text-muted mb-4 italic relative">
              80+ end-to-end bioinformatics projects completed across genomics, clinical research, and IT automation.
            </p>
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent relative">Project Overview</span>
          </div>
        </div>
      </Section>

      <Section id="teaching" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Teaching, Speaking & Mentoring</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">Technical Speaker & Facilitator</h3>
            <p className="text-foreground/80 leading-relaxed">
              I act as a bridge between technology and research by conducting technical workshops, guest lectures, and training sessions. My focus is on empowering scientists with the computational tools they need to unlock biological insights.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="p-4 bg-background border border-border">
                <div className="text-2xl font-bold text-accent">75+</div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Professionals Trained</div>
              </div>
              <div className="p-4 bg-background border border-border">
                <div className="text-2xl font-bold text-accent">24+</div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Training Sessions</div>
              </div>
              <div className="p-4 bg-background border border-border">
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Mentees Guided</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted list-disc list-inside">
              <li>Mentored 8+ students and researchers across undergraduate theses, tailored bioinformatics guidance programs, and annual mentoring initiatives</li>
              <li>Intro to Unix for Genomics & Post-NGS workflows</li>
              <li>Workflow Orchestration & Reproducibility (Nextflow/Python)</li>
              <li>Machine Learning application in Clinical Genomics</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-8 border border-border bg-background/50">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-70">Recent Reading & Notes</h4>
            <div className="space-y-4">
              {readingsData.map((item, index) => (
                <ReadingItem key={index} title={item.title} author={item.author} type={item.type} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border/50">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Selected Speaking Engagements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingEngagementsData.map((talk, idx) => (
              <div key={idx} className="p-6 border border-border bg-background/50 flex flex-col justify-between gap-4 relative group hover:border-accent/40 transition-colors">
                <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-muted/40 uppercase">{talk.year}</div>
                <div>
                  <div className="text-xs font-medium text-accent uppercase tracking-wider mb-2">{talk.organizer}</div>
                  <h5 className="text-sm font-semibold text-foreground leading-snug">{talk.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="publications">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Scientific Contributions</h2>
        <div className="space-y-4">
          {publicationsData.map((pub, index) => (
            <PublicationItem
              key={index}
              title={pub.title}
              journal={pub.journal}
              year={pub.year}
              reflection={pub.reflection}
              link={pub.link}
            />
          ))}
        </div>
      </Section>

      <Section id="learning" className="bg-muted/5">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center">Learning Impact & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Intensive Summer Schools */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mb-6">Intensive Summer Schools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {summerSchoolsData.map((school, index) => (
                <div key={index} className="p-6 border border-border bg-background/50 relative group">
                  <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-muted/40 uppercase">{school.year}</div>
                  <h4 className="text-lg font-semibold mb-2 pr-12 leading-tight">{school.title}</h4>
                  <div className="text-xs font-medium text-accent uppercase tracking-wider mb-4">{school.provider}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {school.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mt-12 mb-6">Technical Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificateGroupsData.map((group, index) => (
                <CertificateGroup
                  key={index}
                  domain={group.domain}
                  certificates={group.certificates}
                />
              ))}
            </div>
          </div>

          {/* Continuous Learning Path */}
          <div className="lg:col-span-1 border-l border-border/50 pl-0 lg:pl-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted/60 mb-6 font-mono text-center lg:text-left">Continuous Learning Path</h3>
            <div className="space-y-4">
              {continuousCoursesData.map((course, i) => (
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
              <a href="https://www.linkedin.com/in/farisizzaturrahman" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors underline decoration-border underline-offset-8">LinkedIn</a>
              <a href="https://github.com/farisizzaturrahman" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors underline decoration-border underline-offset-8">GitHub</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-border/20 text-center">
        <p className="text-[10px] text-muted/40 uppercase tracking-[0.4em]">
          Faris IR · 2026
        </p>
      </footer>
    </div>
  );
}
