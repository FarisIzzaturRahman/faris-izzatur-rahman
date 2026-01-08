# Bioinformatics Portfolio

A professional, calm, and engineer-credible portfolio website for a Bioinformatician. Built with Next.js, Tailwind CSS, and Framer Motion.

## Design Principles
- **Clarity over Flash**: 90/10 rule (90% clarity, 10% identity).
- **NDA Safe**: Professional descriptions that focus on challenges and approaches without disclosing proprietary details.
- **Subtle Dynamics**: A genomic-inspired background with slow parallax drift.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Navigate to `http://localhost:3000`.

## How to Customize

### Adding a Project
To add a new NDA-safe project, open `src/app/page.tsx` and find the `projects` section. Add a new `ProjectCard` component:

```tsx
<ProjectCard 
  title="Generic Title Here"
  context="High-level description of the environment."
  challenge="The computational or analytical problem you solved."
  approach="Your methodology or technical stack used."
  badges={["Tech1", "Tech2", "Domain"]}
/>
```

### Adding a Publication
Open `src/app/page.tsx`, find the `publications` section, and add a `PublicationItem`:

```tsx
<PublicationItem 
  title="Your Paper Title"
  journal="Journal Name"
  year={2024}
  reflection="A short sentence on your intellectual contribution."
  link="https://doi.org/..." // optional
/>
```

### Changing the Theme
Color tokens are managed in `src/app/globals.css` using `oklch` values for precise, modern color control.
- `@theme` block defines the brand colors.
- `:root` block defines the semantic variables for light and dark modes.

## Technical Details
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (v4 style theme variables)
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: Lucide React
