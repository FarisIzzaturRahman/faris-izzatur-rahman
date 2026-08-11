export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string[];
}

export interface Project {
  title: string;
  context: string;
  challenge: string;
  approach: string;
  keyTakeaway: string;
  badges: string[];
  link?: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  reflection: string;
  link?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  impact: string;
}

export interface CertificateGroupData {
  domain: string;
  certificates: Certificate[];
}

export interface SummerSchool {
  year: string;
  title: string;
  provider: string;
  description: string;
}

export interface Course {
  title: string;
  provider: string;
}

export interface Reading {
  title: string;
  author: string;
  type: 'Paper' | 'Book' | 'Newsletter';
}

export const experiencesData: Experience[] = [
  {
    role: "Bioinformatics Coordinator",
    company: "PT. Genomik Solidaritas Indonesia",
    location: "Jakarta, Indonesia",
    period: "October 2024 – Present",
    isCurrent: true,
    description: [
      "Directing bioinformatics analysis schedules for high-throughput clinical and research workflows, ensuring timely delivery and operational excellence.",
      "Architecting personalized bioinformatics solutions by translating complex client research goals into actionable computational strategies.",
      "Bridging the gap between technical execution and client outcomes through integrated project oversight and hands-on deep-dive analysis.",
      "Completed over 65 diverse bioinformatics projects spanning genome assembly, AMR detection, and multi-omic metagenomics."
    ]
  },
  {
    role: "Bioinformatician",
    company: "PT. Genomik Solidaritas Indonesia",
    location: "Jakarta, Indonesia",
    period: "May 2023 – October 2024",
    description: [
      "Spearheaded the analysis of WGS, SARS-CoV-2, and NIPT data, driving critical clinical product outcomes through precise genomic interpretation.",
      "Streamlined operational efficiency by developing automated Python-based workflows for recurring bioinformatics processes.",
      "Integrated Machine Learning and Deep Learning frameworks to solve predictive challenges in internal operations and client services.",
      "Facilitated technical growth by training over 75 professionals through 20+ specialized bioinformatics workshops."
    ]
  }
];

export const publicProjectsData: Project[] = [
  {
    title: "Full 16S rRNA Metagenomics (ONT)",
    context: "Metagenomic profiling using long-read Oxford Nanopore sequencing data.",
    challenge: "Accurately estimating abundance and diversity from high-error-rate long reads while maintaining visualization clarity.",
    approach: "Developed a comprehensive pipeline for alpha/beta diversity and taxonomic profiling with advanced metagenomic visualizations.",
    keyTakeaway: "Successfully characterized complex microbial communities with high resolution using Nanopore technology.",
    badges: ["16S rRNA", "Nanopore", "Diversity Analysis", "Visualization"],
    link: "https://bit.ly/16s-ont-bioinformatics-analysis"
  },
  {
    title: "Soil Microbiome QIIME2 Analysis",
    context: "Comparing soil microbiomes under conventional vs. natural farming practices.",
    challenge: "Identifying significant microbial shifts between chemical-free and conventional agricultural environments.",
    approach: "Utilized QIIME2 for robust metagenomic comparisons and differential abundance testing.",
    keyTakeaway: "Revealed critical differences in soil microbial health influenced by farming methodology.",
    badges: ["QIIME2", "Soil Science", "Microbiome", "Metagenomics"],
    link: "https://bit.ly/QIIME2_project_Faris"
  },
  {
    title: "IMPUTE2 Wrapper & SNP Analytics",
    context: "Python-based automation for human genome imputation workflows.",
    challenge: "Wrapping complex IMPUTE2 outputs to facilitate efficient SNP calculation and downstream analysis.",
    approach: "Developed a Python tool to parse and aggregate imputation results into standard analysis formats.",
    keyTakeaway: "Drastically reduced the time required to post-process large-scale imputation datasets.",
    badges: ["Python", "Human Genetics", "Automation", "SNP Analytics"],
    link: "https://github.com/FarisIzzaturRahman/snp_count"
  }
];

export const domainProjectsData: Project[] = [
  {
    title: "Microbial & Metagenomic Profiling",
    context: "Scaling metagenomic analysis for AMR detection and complex ecosystems (16S, 18S, ITS, COI).",
    challenge: "Managing high-throughput shotgun sequencing data for pathogenic bacteria profiling across diverse environmental samples.",
    approach: "Standardized a robust metagenomics suite including SARS-CoV-2 variant identification and bacterial pan-genome analysis.",
    keyTakeaway: "Delivered actionable insights for both research initiatives and high-stakes clinical applications.",
    badges: ["Metagenomics", "AMR", "Viral ID", "Clinical"]
  },
  {
    title: "Agricultural & Plant Genomics",
    context: "Analyzing complex plant genomes to support agricultural biotechnology.",
    challenge: "Handling large-scale plant genomic datasets with significant repetitive elements and structural variation.",
    approach: "Applied advanced assembly algorithms and comparative genomic frameworks to identify key traits.",
    keyTakeaway: "Successfully integrated bacterial pan-genome insights with plant host data for systemic understanding.",
    badges: ["Plant Science", "Genome Assembly", "Pan-genome"]
  },
  {
    title: "Human Methylation & Epigenomics",
    context: "Precision medicine applications focusing on clinical biomarkers.",
    challenge: "Decoding high-dimensional methylation array data into significant biological patterns.",
    approach: "Developed custom normalization and analysis pipelines to ensure statistical rigor in biomarker discovery.",
    keyTakeaway: "Provided foundational data for diagnostic product development in the clinical genomic space.",
    badges: ["Epigenomics", "Methylation", "Machine Learning"]
  }
];

export const publicationsData: Publication[] = [
  {
    title: "Optimisation of peptides targeting reverse transcriptase HIV-1 using QSAR, machine learning, and computational approaches",
    journal: "Frontiers in Pharmacology",
    year: 2025,
    reflection: "Synthesized structural biology with ML to navigate high-dimensional peptide space, effectively narrowing the candidate pool for future therapeutic validation.",
    link: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1707377/full"
  },
  {
    title: "Revealing Pogostemon cablin (Blanco) Benth. and Murraya koenigii (L.) Spreng. action targets on AKT1 as papillary thyroid cancer therapy based on bioinformatics approach",
    journal: "Journal of Pharmacy & Pharmacognosy Research",
    year: 2025,
    reflection: "Bridged the gap between traditional pharmacognosy and systems biology, identifying AKT1 as a key molecular vulnerability for targeted herbal therapeutics.",
    link: "https://jppres.com/jppres/pdf/vol13/jppres24.2163_13.s1.100.pdf"
  },
  {
    title: "Targeting phosphoglycerate dehydrogenase enzyme using ginger compounds to suppress thyroid cancer progression",
    journal: "Narra X",
    year: 2024,
    reflection: "Developed a robust virtual screening framework to evaluate ginger-derived lead compounds, providing a computational foundation for suppressive metabolic cancer therapy.",
    link: "https://narrax.org/main/article/view/112"
  }
];

export const summerSchoolsData: SummerSchool[] = [
  {
    year: "2024",
    title: "HPC Foundation in Computational Biomolecular Research",
    provider: "BRIN · Cibinong",
    description: "Deep dive into HPC infrastructure, molecular docking/dynamics, and complex systems via data, network, and AI frameworks."
  },
  {
    year: "2023",
    title: "Genomics & 'Omics in Infectious Diseases",
    provider: "USU & LSHTM · Medan",
    description: "Advanced training in variant detection, eQTLs, GWAS, and phylo-dynamics mentored by London School of Hygiene & Tropical Medicine experts."
  }
];

export const certificateGroupsData: CertificateGroupData[] = [
  {
    domain: "Cloud & Machine Learning",
    certificates: [
      { name: "AWS Academy ML Foundation", issuer: "Amazon Web Services", impact: "Mastered SageMaker, Computer Vision, and NLP on cloud-native infrastructure." },
      { name: "AWS Solutions Architect", issuer: "Amazon", impact: "Designing scalable, secure cloud architectures for bioinformatics workloads." }
    ]
  },
  {
    domain: "Deep Learning & IT",
    certificates: [
      { name: "Getting Started with Deep Learning", issuer: "NVIDIA DLI", impact: "Implemented GAN architectures and image classification with Python-first focus. Deep dive into Python." },
      { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", impact: "Applied neural networks to classify phenotypic patterns from genomic markers." }
    ]
  }
];

export const continuousCoursesData: Course[] = [
  { title: "Analyzing Genomics Datasets", provider: "Future Learn" },
  { title: "Intro to Linux, Bash & R", provider: "Future Learn" },
  { title: "Algorithms for DNA Sequencing", provider: "Johns Hopkins" },
  { title: "Python for Genomic Data Science", provider: "Johns Hopkins" },
  { title: "Data Science of Health Informatics", provider: "Johns Hopkins" },
  { title: "Genomic Medicine: Patient Care", provider: "Exeter" },
  { title: "Genomics to Understand Pandemics", provider: "Wellcome Sanger" }
];

export const readingsData: Reading[] = [
  { title: "Reproducible Bioinformatics", author: "Nature Reviews", type: "Paper" },
  { title: "Nextflow in Production", author: "Seqera Docs", type: "Newsletter" },
  { title: "Algorithms in Bioinformatics", author: "Dan Gusfield", type: "Book" }
];
