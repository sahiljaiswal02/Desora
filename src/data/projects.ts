export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectProcess {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  client: string;
  industry: string;
  liveUrl: string;
  about: string;
  challenges: ProjectChallenge[];
  process: ProjectProcess[];
  impact: {
    text: string;
    testimonial?: {
      quote: string;
      author: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "squadhub",
    title: "SquadHub",
    year: "2024",
    category: "SaaS Website",
    tags: ["Web Design", "UI/UX"],
    image: "https://picsum.photos/seed/squadhub/1200/1600",
    client: "SquadHub Inc.",
    industry: "SaaS / Management",
    liveUrl: "https://squadhub.example.com",
    about: "SquadHub is a comprehensive team management platform designed to streamline communication and project tracking for remote-first companies.",
    challenges: [
      {
        title: "Complex Data Visualization",
        problem: "Users struggled to interpret heavy team performance metrics at a glance.",
        solution: "Implemented a simplified dashboard with custom interactive charts using D3.js and personalized view filters."
      },
      {
        title: "Real-time Collaboration",
        problem: "Managing state synchronization across multiple users in a shared workspace.",
        solution: "Integrated WebSocket-based state management that updates only specific modified fields, reducing latency by 40%."
      }
    ],
    process: [
      { step: "01", title: "Discovery", description: "Audit current pain points in team management workflows." },
      { step: "02", title: "Wireframing", description: "Mapping out high-stakes interactions and complex data layouts." },
      { step: "03", title: "Visual Design", description: "Creating a sleek, productivity-focused dark interface." },
      { step: "04", title: "Development", description: "Building a highly performant React-based dashboard." }
    ],
    impact: {
      text: "30% increase in user retention within the first three months of launch.",
      testimonial: {
        quote: "Desora transformed our platform from a tool into an experience that our users actually love using every day.",
        author: "CTO, SquadHub"
      }
    }
  },
  {
    id: "02",
    slug: "synap",
    title: "Synap",
    year: "2024",
    category: "AI Platform",
    tags: ["Product Design", "Branding"],
    image: "https://picsum.photos/seed/synap/1200/1600",
    client: "Synap Labs",
    industry: "Artificial Intelligence",
    liveUrl: "https://synap.example.com",
    about: "Synap is an AI-driven knowledge graph that helps researchers connect disparate pieces of information across millions of academic papers.",
    challenges: [
      {
        title: "Vast Dataset Navigation",
        problem: "Visualizing millions of nodes without overwhelming the user interface.",
        solution: "Created a tiered zoom-level system where detail increases as users focus on specific clusters."
      }
    ],
    process: [
      { step: "01", title: "Research", description: "Interviewing academics to understand their discovery process." },
      { step: "02", title: "Strategy", description: "Prioritizing node connectivity over simple search." },
      { step: "03", title: "Design", description: "Clean, minimalist interface to let data take center stage." },
      { step: "04", title: "Iteration", description: "Continuous user testing with real-world research scenarios." }
    ],
    impact: {
      text: "Enabled researchers to find relevant cross-study connections 3x faster.",
      testimonial: {
        quote: "The interface Desora built handles our complexity with incredible grace.",
        author: "Founder, Synap Labs"
      }
    }
  },
  {
    id: "03",
    slug: "leman",
    title: "Leman",
    year: "2023",
    category: "E-Commerce",
    tags: ["Mobile App", "Development"],
    image: "https://picsum.photos/seed/leman/1200/1600",
    client: "Leman Lifestyle",
    industry: "Luxury Fashion",
    liveUrl: "https://leman.example.com",
    about: "Leman is a luxury fashion brand focused on sustainable materials and timeless design. The mobile app provides a premium shopping experience.",
    challenges: [
      {
        title: "Immersive Shopping",
        problem: "Standard grid layouts didn't convey the premium quality of the materials.",
        solution: "Developed an editorial-style scroll with full-screen high-fidelity video integration."
      }
    ],
    process: [
      { step: "01", title: "Branding", description: "Defining the visual language of high-end sustainable luxury." },
      { step: "02", title: "UX Flow", description: "Reducing friction in the checkout process to elevate the feeling of ease." },
      { step: "03", title: "Tech Architecture", description: "Building a high-performance cross-platform app using Flutter." },
      { step: "04", title: "Optimization", description: "Ensuring 60fps animations even on mid-range devices." }
    ],
    impact: {
      text: "Reached 50k active users within the first month and doubled mobile conversion rates.",
      testimonial: {
        quote: "Desora understood our brand better than we did. The results speak for themselves.",
        author: "Director of Digital, Leman"
      }
    }
  },
  {
    id: "04",
    slug: "vortex",
    title: "Vortex",
    year: "2024",
    category: "Fintech App",
    tags: ["UI Design", "Motion"],
    image: "https://picsum.photos/seed/vortex/1200/1600",
    client: "Vortex Finance",
    industry: "Finance / Crypto",
    liveUrl: "https://vortex.example.com",
    about: "Vortex is a crypto wallet and decentralized exchange with a focus on ease of use and smooth visual transitions.",
    challenges: [
      {
        title: "Transaction Transparency",
        problem: "Users were anxious about the status of their crypto swaps due to network lag.",
        solution: "Designed a real-time progress visualization that breaks down the swap into understandable steps."
      }
    ],
    process: [
      { step: "01", title: "Strategy", description: "Defining the balance between security and user speed." },
      { step: "02", title: "UX Design", description: "Crafting a frictionless wallet creation experience." },
      { step: "03", title: "Motion Design", description: "Using smooth animations to indicate data flow and security transitions." },
      { step: "04", title: "Integration", description: "Connecting the frontend tightly with blockchain smart contracts." }
    ],
    impact: {
      text: "Successfully handled $1M in transaction volume within the first week of launch.",
      testimonial: {
        quote: "Desora's eye for motion turned a scary financial tool into something exciting and trustworthy.",
        author: "Founder, Vortex Finance"
      }
    }
  },
  {
    id: "05",
    slug: "atoon",
    title: "ATOON",
    year: "2024",
    category: "Wellness App",
    tags: ["UX Design", "Audio Tech"],
    image: "https://picsum.photos/seed/atoon/1200/1600",
    client: "Atoon LLC",
    industry: "Social / Music Streaming",
    liveUrl: "https://www.atoon.app",
    about: "Atoon is a revolutionary digital wellness application that redefines meditation by using immersive, human-composed, electro-acoustic music as the core guide.",
    challenges: [
      {
        title: "Mapping Emotions to Music",
        problem: "Designing a state-shifting logic for emotional states.",
        solution: "Custom state-mapping logic that dynamically filters the music library based on user feelings."
      },
      {
        title: "Complex Subscription Logic",
        problem: "Managing a 7-day trial with immediate access but delayed billing.",
        solution: "Integrated native Store APIs with real-time Firebase tracking for trial conversion."
      }
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding vision and goals for digital wellness." },
      { step: "02", title: "Strategy", description: "Scope and priority setting for core meditation features." },
      { step: "03", title: "UI/UX Design", description: "Crafting intuitive interfaces for a calm user experience." },
      { step: "04", title: "Development", description: "Fast, scalable Flutter code for cross-platform availability." }
    ],
    impact: {
      text: "High conversion rates post-trial and fluid Dark Mode UI.",
      testimonial: {
        quote: "Desora (via Flutter Your Way) has been an incredible partner in helping us execute our vision.",
        author: "Co-Founder, Atoon LLC"
      }
    }
  }
];
