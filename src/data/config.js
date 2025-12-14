import { Brain, Shield, Leaf, Cpu, Lightbulb, Linkedin, Instagram, Facebook } from 'lucide-react';

export const siteConfig = {
  name: "Infinity CodeWave",
  tagline: "Engineered by Math. Powered by Code.",
  subTagline: "Nepal's Premier Data & Computing Hackathon",
  eventName: "Infinity CodeWave",
  parentEvent: "Infinity", // Annual event by KUMSC
  date: "April 24-25, 2026",
  duration: "24 Hours",
  eventDate: "2026-04-24T00:00:00+05:45", // ISO format with Nepal timezone for countdown
  location: "Kathmandu University, Dhulikhel",
  admission: "Free for all Students",
  registrationLink: "https://forms.gle/aHUx33fteR7MkLfW9",
  mlhPartnership: "in-process", // Partnership with Major League Hacking (MLH) is in process
  mlhCodeOfConduct: "https://static.mlh.io/docs/mlh-code-conduct.pdf",
  sponsorshipBrochure: "/hackathon_brochure.pdf",
  
  // SEO Configuration
  seo: {
    title: "Infinity CodeWave | Nepal's Premier Data & Computing Hackathon",
    description: "Infinity CodeWave is Nepal's premier data science and computing hackathon, part of the annual Infinity event organized by Kathmandu University Mathematics Students' Club (KUMSC). Join 120+ developers for 24 hours of innovation. Free admission for all students!",
    keywords: [
      "Infinity CodeWave",
      "hackathon Nepal",
      "Kathmandu University",
      "KUMSC",
      "Kathmandu University Mathematics Students Club",
      "Infinity event",
      "MLH hackathon",
      "Major League Hacking",
      "data science hackathon",
      "AI hackathon",
      "machine learning",
      "quantum computing",
      "cybersecurity",
      "student hackathon",
      "free hackathon Nepal",
      "Dhulikhel",
      "computational mathematics"
    ],
    ogImage: "/og-image.png",
    siteUrl: "https://code-wave.pages.dev",
    locale: "en_US",
    type: "website"
  },
  
  socialLinks: [
    { icon: Linkedin, href: "https://linkedin.com/company/infinitycodewave", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/infinitycodewave", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/infinitycodewave", label: "Facebook" }
  ],

  stats: [
    { value: "120+", label: "Developers" },
    { value: "24", label: "Hours" },
    { value: "10+", label: "Universities" }
  ],

  // KUMSC Reach Statistics
  kumscReach: {
    activeMembers: "500+",
    corporatePartnerships: "50+",
    annualEventAttendees: "3,000+"
  },

  tracks: [
    {
      icon: Brain,
      title: "AI & Applied Mathematics",
      description: "Data science, machine learning, optimization, neural networks.",
      examples: "Smarter traffic flow, ML for health, financial optimization."
    },
    {
      icon: Shield,
      title: "Secure & Smart Future",
      description: "Cryptography, blockchain, cybersecurity, privacy-preserving systems.",
      examples: "Secure messaging, decentralized apps, privacy tools."
    },
    {
      icon: Leaf,
      title: "Math + Computing for Good",
      description: "Sustainability, climate change, education, social impact.",
      examples: "Energy-efficient optimization, disaster response models."
    },
    {
      icon: Cpu,
      title: "Next-Gen Tech & Quantum",
      description: "Quantum computing, post-quantum cryptography, futuristic algorithms.",
      examples: "Quantum-inspired algorithms, secure quantum communication demos."
    },
    {
      icon: Lightbulb,
      title: "Open Innovation (Wildcard)",
      description: "Free track for hackers to build anything creative with math + computing.",
      examples: "Creative visualizations, educational apps, or art + math projects."
    }
  ],

  faqs: [
    {
      question: "Is there an entry fee?",
      answer: "No, Infinity CodeWave is 100% free for all admitted participants. Meals and swag are included."
    },
    {
      question: "Do I need a team?",
      answer: "You can come solo or with a team of up to 4. Don't have a team? No worries! We'll have team formation activities at the start of the event."
    },
    {
      question: "Who can participate?",
      answer: "Any student (High School or University) with a valid ID. Both undergraduate and graduate students are welcome."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any hardware you want to hack with. We'll provide food, drinks, WiFi, and a great hacking environment!"
    },
    {
      question: "Do I need to know advanced math?",
      answer: "Not at all! While the hackathon emphasizes computational mathematics, projects at all skill levels are welcome. Mentors will be available to help."
    },
    {
      question: "When and where is Infinity CodeWave?",
      answer: "Infinity CodeWave takes place at Kathmandu University, Dhulikhel. The event runs for 24 hours and is part of Infinity, the annual flagship event organized by Kathmandu University Mathematics Students' Club (KUMSC)."
    }
  ],

  // Sponsorship tiers from brochure
  sponsorshipTiers: [
    {
      name: "Title Sponsor",
      tier: "title",
      price: "NPR 200,000+",
      limit: 1,
      benefits: [
        "Event naming: '[Your Brand] CodeWave 2026'",
        "Full participant database (resumes, GitHub, skills)",
        "Keynote speech (15 min) at Opening",
        "8 dedicated social media posts",
        "Premium booth with prime location",
        "Featured in all press releases & media",
        "Lead judge & challenge design input",
        "First pick: Interview top 10 winners",
        "Logo on all banners, stage backdrop & swag"
      ]
    },
    {
      name: "Diamond Sponsor",
      tier: "diamond",
      price: "NPR 100,000–150,000",
      limit: 3,
      benefits: [
        "Logo on banners & stage backdrop",
        "Speaking slot (7 min) at hackathon",
        "Recruitment booth at venue",
        "5 dedicated social media posts",
        "Judge position on panel",
        "Featured in event recap & highlight videos",
        "Winner resumes: Access to top 30 participants"
      ]
    },
    {
      name: "Gold Sponsor",
      tier: "gold",
      price: "NPR 50,000–75,000",
      benefits: [
        "Promo table at venue",
        "Mentorship role during hackathon",
        "Logo on website with backlink",
        "Logo on banners & materials",
        "3 social media posts (shared)",
        "Shoutout at opening ceremony"
      ]
    },
    {
      name: "Silver Sponsor",
      tier: "silver",
      price: "NPR 20,000–40,000",
      benefits: [
        "Logo on website",
        "Name on banners",
        "1 social media post (shared)",
        "Verbal acknowledgment at event",
        "Certificate of appreciation"
      ]
    },
    {
      name: "Bronze / In-Kind",
      tier: "bronze",
      price: "NPR 10,000+ or equivalent",
      benefits: [
        "Name on website",
        "Certificate of appreciation",
        "Social media thank-you"
      ],
      note: "In-kind contributions welcome: Food, Beverages, Prizes, Printing, Venue, Software licenses"
    }
  ],

  // Current sponsors (placeholder slots showing available opportunities)
  sponsors: [
    // Title Sponsor - Limited to 1
    { name: "Your Brand Here", tier: "title", logo: null, website: null },
    // Diamond Sponsors - Limited to 3
    { name: "Diamond Partner", tier: "diamond", logo: null, website: null },
    { name: "Diamond Partner", tier: "diamond", logo: null, website: null },
    { name: "Diamond Partner", tier: "diamond", logo: null, website: null },
    // Gold Sponsors
    { name: "Gold Partner", tier: "gold", logo: null, website: null },
    { name: "Gold Partner", tier: "gold", logo: null, website: null },
    { name: "Gold Partner", tier: "gold", logo: null, website: null },
    // Silver Sponsors
    { name: "Silver Partner", tier: "silver", logo: null, website: null },
    { name: "Silver Partner", tier: "silver", logo: null, website: null },
    // Bronze / In-Kind Sponsors
    { name: "Bronze Partner", tier: "bronze", logo: null, website: null },
    { name: "Bronze Partner", tier: "bronze", logo: null, website: null },
  ],

  // Organizer information
  organizer: {
    name: "Kathmandu University Mathematics Students' Club (KUMSC)",
    shortName: "KUMSC",
    supportedBy: "Department of Mathematics, Kathmandu University",
    email: "mathsclub@ku.edu.np",
    website: "https://mathsclub.ku.edu.np"
  },

  // Event Lead Contact
  eventLead: {
    name: "Sabin Pokharel",
    email: "savinpokharel@gmail.com"
  },

  // Target Audience
  targetAudience: [
    "B.Sc. in Computational Mathematics",
    "Bachelor of Data Science",
    "Computer Science and Engineering Undergrads",
    "Students from any faculty who want to solve problems"
  ],

  // Budget Allocation
  budgetAllocation: {
    prizes: "50%",
    foodAndDrinks: "20%",
    swag: "15%",
    marketingAndTech: "15%"
  }
};
