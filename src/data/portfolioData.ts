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
    role: "Bioinformatician",
    company: "Biomedical and Genome Science Initiative (BGSi)",
    location: "Jakarta, Indonesia",
    period: "August 2026 – Present",
    isCurrent: true,
    description: [
      "Assigned to support operational workflows for standard human whole genome sequencing (WGS), focusing on data processing efficiency and reliability.",
      "Assigned to contribute to the development of a Mycobacterium tuberculosis (Mtb) genomic surveillance platform by translating public health needs into technical specifications.",
      "Assigned to assist in optimizing bioinformatics services and workflows for public utilization."
    ]
  },
  {
    role: "Bioinformatics Coordinator",
    company: "PT. Genomik Solidaritas Indonesia",
    location: "Jakarta, Indonesia",
    period: "October 2024 – July 2026",
    description: [
      "Coordinated a small 2-person bioinformatics team to direct analysis schedules for high-throughput clinical and research workflows, ensuring timely delivery.",
      "Explored and implemented novel bioinformatics analysis pipelines to address custom client research requirements and expand analytical capabilities.",
      "Bridged the gap between technical execution and client outcomes through integrated project oversight and hands-on deep-dive analysis.",
      "Successfully completed over 80 diverse bioinformatics projects spanning genome assembly, AMR profiling, SARS-CoV-2 variant tracking, 16S/ITS/COI metagenomics, plant genomics, human methylation, and transcriptomics."
    ]
  },
  {
    role: "Bioinformatician",
    company: "PT. Genomik Solidaritas Indonesia",
    location: "Jakarta, Indonesia",
    period: "May 2023 – October 2024",
    description: [
      "Analyzed and interpreted SARS-CoV-2 whole genome sequencing (WGS), NIPT, and clinical genomic data to support product delivery.",
      "Streamlined operational efficiency by developing automated Python-based workflows for recurring bioinformatics processes.",
      "Integrated Machine Learning and Deep Learning frameworks to solve predictive challenges in internal operations and client services.",
      "Facilitated technical growth by training over 75 professionals through 24+ specialized bioinformatics workshops."
    ]
  }
];

export const publicProjectsData: Project[] = [
  {
    title: "Full 16S rRNA Metagenomics (ONT)",
    context: "Metagenomic profiling using long-read Oxford Nanopore sequencing data.",
    challenge: "Accurately estimating abundance and diversity from high-error-rate long reads while maintaining visualization clarity.",
    approach: "Developed a comprehensive pipeline for alpha/beta diversity and taxonomic profiling with advanced metagenomic visualizations.",
    keyTakeaway: "Analyzed microbial community composition and diversity from Nanopore long-read sequencing data.",
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
    challenge: "Parsing IMPUTE2 outputs to automate SNP calculation and facilitate downstream analysis.",
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
    approach: "Built and maintained metagenomics workflows for variant identification and bacterial pan-genome analysis.",
    keyTakeaway: "Delivered actionable insights for both research initiatives and high-stakes clinical applications.",
    badges: ["Metagenomics", "AMR", "Viral ID", "Clinical"]
  },
  {
    title: "Agricultural & Plant Genomics",
    context: "Analyzing complex plant genomes to support agricultural biotechnology.",
    challenge: "Handling large-scale plant genomic datasets with significant repetitive elements and structural variation.",
    approach: "Applied genome assembly tools and comparative genomics to analyze plant genomic datasets.",
    keyTakeaway: "Successfully integrated bacterial pan-genome insights with plant host data for systemic understanding.",
    badges: ["Plant Science", "Genome Assembly", "Pan-genome"]
  },
  {
    title: "Human Methylation & Epigenomics",
    context: "Precision medicine applications focusing on clinical biomarkers.",
    challenge: "Decoding high-dimensional methylation array data into significant biological patterns.",
    approach: "Implemented normalization and analysis pipelines for methylation array data analysis.",
    keyTakeaway: "Provided foundational data for diagnostic product development in the clinical genomic space.",
    badges: ["Epigenomics", "Methylation", "Machine Learning"]
  }
];

export const publicationsData: Publication[] = [
  {
    title: "Optimisation of peptides targeting reverse transcriptase HIV-1 using QSAR, machine learning, and computational approaches",
    journal: "Frontiers in Pharmacology",
    year: 2025,
    reflection: "Applied computational methods and ML to analyze HIV-1 reverse transcriptase peptides and narrow down candidate sequences.",
    link: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1707377/full"
  },
  {
    title: "Revealing Pogostemon cablin (Blanco) Benth. and Murraya koenigii (L.) Spreng. action targets on AKT1 as papillary thyroid cancer therapy based on bioinformatics approach",
    journal: "Journal of Pharmacy & Pharmacognosy Research",
    year: 2025,
    reflection: "Utilized a network pharmacology and bioinformatics workflow to evaluate herbal compounds targeting AKT1 in papillary thyroid cancer.",
    link: "https://jppres.com/jppres/pdf/vol13/jppres24.2163_13.s1.100.pdf"
  },
  {
    title: "Targeting phosphoglycerate dehydrogenase enzyme using ginger compounds to suppress thyroid cancer progression",
    journal: "Narra X",
    year: 2024,
    reflection: "Conducted virtual screening to analyze ginger-derived compounds against phosphoglycerate dehydrogenase in thyroid cancer.",
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
      { name: "AWS Academy ML Foundation", issuer: "Amazon Web Services", impact: "Gained practical experience with SageMaker, Computer Vision, and NLP on AWS cloud infrastructure." },
      { name: "AWS Solutions Architect", issuer: "Amazon", impact: "Learned core cloud architecture principles for hosting and running bioinformatics workloads." }
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
