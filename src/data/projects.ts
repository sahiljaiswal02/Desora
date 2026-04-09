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
  color: string;
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
    slug: "driflo",
    title: "Driflo",
    year: "2024",
    category: "Agency Landing Page",
    tags: ["Headless Shopify", "Web Design", "E-Commerce"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "#5196fd",
    client: "Driflo Studio",
    industry: "Web Development Agency",
    liveUrl: "https://driflo.com",
    about:
      "Driflo is a specialized web development studio that builds headless Shopify stores that don't look like standard Shopify templates, focusing on custom websites and modern tech.",
    challenges: [
      {
        title: "Differentiating E-Commerce",
        problem:
          "Standard Shopify stores often look identical and lack unique brand identity.",
        solution:
          "Built headless Shopify storefronts that allow for completely custom, unconstrained frontend designs while maintaining robust backend commerce capabilities.",
      },
      {
        title: "Transparent Process",
        problem:
          "Clients often face mystery and drama when working with traditional agencies.",
        solution:
          "Implemented a clear, step-by-step development process from discovery to launch with transparent communication.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Consultation",
        description: "Understanding the brand's unique needs and goals.",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        description: "Mapping out the headless architecture and user journey.",
      },
      {
        step: "03",
        title: "Design & Prototyping",
        description: "Creating bespoke designs that break the Shopify mold.",
      },
      {
        step: "04",
        title: "Development & Launch",
        description:
          "Building with modern tech and deploying with full support.",
      },
    ],
    impact: {
      text: "Successfully launched multiple concept rebuilds and custom headless stores.",
      testimonial: {
        quote:
          "Driflo brought our vision to life without the constraints of traditional templates.",
        author: "Client, Driflo",
      },
    },
  },
  {
    id: "02",
    slug: "nom",
    title: "NOM",
    year: "2024",
    category: "SaaS Landing Page",
    tags: ["AI", "FoodTech", "Health & Wellness"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    color: "#8f89ff",
    client: "NOM Inc.",
    industry: "FoodTech / AI",
    liveUrl: "https://www.thenomapp.com",
    about:
      "NOM is an AI-powered meal builder and delivery service that understands your mind, body, and moments, solving the broken food discovery process.",
    challenges: [
      {
        title: "Decision Fatigue",
        problem:
          "Users experience endless scrolling and decision fatigue when trying to order food.",
        solution:
          "Developed an AI system that interprets natural language intent to curate meals instantly.",
      },
      {
        title: "Emotional Awareness",
        problem:
          "Traditional food apps ignore the user's emotional state, focusing only on macros.",
        solution:
          "Integrated emotional intelligence into the AI to suggest food that aligns with both nutritional needs and current mood.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Express Intent",
        description: "Users simply state what they want or how they feel.",
      },
      {
        step: "02",
        title: "AI Interpretation",
        description:
          "Advanced AI analyzes emotional state and natural language context.",
      },
      {
        step: "03",
        title: "Evolutionary Profile",
        description:
          "The system learns and adapts to user preferences over time.",
      },
      {
        step: "04",
        title: "Seamless Delivery",
        description: "Curated meals are prepared and delivered effortlessly.",
      },
    ],
    impact: {
      text: "Created a entirely new category of intentional eating and daily health management.",
      testimonial: {
        quote:
          "NOM completely changed how I approach my daily meals. It's like having a personal chef who knows exactly what I need.",
        author: "Early Adopter, NOM",
      },
    },
  },
  {
    id: "03",
    slug: "caffeine-cafe",
    title: "Caffeine Cafe",
    year: "2023",
    category: "Food Ordering Web App",
    tags: ["Web App", "E-Commerce", "Restaurant"],
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    color: "#ed649e",
    client: "Caffeine Cafe",
    industry: "Food & Beverage",
    liveUrl: "https://caffeinecafe.netlify.app",
    about:
      "Caffeine Cafe is a dedicated food ordering web application designed to provide a seamless digital menu and checkout experience for restaurant customers.",
    challenges: [
      {
        title: "Streamlined Ordering",
        problem:
          "Customers needed a quick and intuitive way to browse the menu and place orders online.",
        solution:
          "Built a responsive web app with a clear menu structure, persistent cart, and easy checkout flow.",
      },
      {
        title: "User Profile Management",
        problem:
          "Returning customers wanted to save their preferences and order history.",
        solution:
          "Implemented a profile system allowing users to manage their details and view past orders.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Menu Digitization",
        description:
          "Organizing the restaurant's offerings into intuitive categories.",
      },
      {
        step: "02",
        title: "UX Design",
        description: "Designing a frictionless cart and checkout experience.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Building a fast, responsive frontend using modern web technologies.",
      },
      {
        step: "04",
        title: "Deployment",
        description:
          "Hosting on Netlify for high availability and fast load times.",
      },
    ],
    impact: {
      text: "Increased online order volume and improved customer satisfaction with a dedicated ordering platform.",
      testimonial: {
        quote:
          "The web app made ordering our daily coffee and lunch incredibly easy and fast.",
        author: "Regular Customer, Caffeine Cafe",
      },
    },
  },
];
