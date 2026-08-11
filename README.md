# Faris Izzatur Rahman — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel)](https://vercel.com/)

A modern, high-performance portfolio website showcasing my professional work, research contributions, publications, and technical experience in **Bioinformatics, Clinical Genomics, and Machine Learning**.

---

## 🔬 Overview

This repository contains the source code for my personal portfolio. Designed with precision, accessibility, and visual clarity in mind, the platform highlights over 65+ completed bioinformatics initiatives, scientific publications, technical training programs, and cloud infrastructure architectures.

### Key Highlights
- **Genomic & Metagenomic Case Studies**: NDA-compliant breakdowns of clinical WGS, Oxford Nanopore 16S rRNA metagenomics, QIIME2 soil microbiome profiling, and human methylation pipelines.
- **Scientific Publications**: Peer-reviewed contributions published in *Frontiers in Pharmacology*, *Journal of Pharmacy & Pharmacognosy Research*, and *Narra X*.
- **Interactive Visuals**: A custom SVG background pattern inspired by Sanger sequencing chromatograms with smooth spring-physics parallax powered by Framer Motion.
- **Modern Theme System**: Adaptive Light, Dark, and System theme controls with `OKLCH` color space and automatic OS scheme detection.
- **Decoupled Architecture**: Type-safe data architecture separating portfolio content from UI presentation components.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (OKLCH Color Tokens) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel Platform](https://vercel.com/) |

---

## 🚀 Getting Started

To run a local development copy of this project:

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or yarn

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FarisIzzaturRahman/faris-izzatur-rahman.git
   cd faris-izzatur-rahman
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── globals.css          # OKLCH color variables and global styles
│   ├── layout.tsx           # Root layout, Google Fonts (Inter), & OpenGraph metadata
│   └── page.tsx             # Main single-page portfolio layout
├── components/
│   ├── DynamicBackground.tsx # Chromatogram SVG background with Framer Motion scroll parallax
│   ├── Hero.tsx             # Landing hero section
│   └── ui/                  # Reusable UI elements (ProjectCard, ExperienceItem, etc.)
└── data/
    └── portfolioData.ts     # Strongly typed data models and portfolio content
```

---

## 📬 Contact & Connect

- **Email**: [farisizzaturrahman@gmail.com](mailto:farisizzaturrahman@gmail.com)
- **LinkedIn**: [linkedin.com/in/farisizzaturrahman](https://www.linkedin.com/in/farisizzaturrahman)
- **GitHub**: [github.com/farisizzaturrahman](https://github.com/farisizzaturrahman)

---

&copy; Faris Izzatur Rahman. Built with Next.js and Vercel.
