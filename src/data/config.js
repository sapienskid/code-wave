import { Brain, Shield, Leaf, Lightbulb, Linkedin, Instagram, Facebook } from 'lucide-react';

export const siteConfig = {
  name: "Infinity CodeWave",
  tagline: "Engineered by Math. Powered by Code.",
  subTagline: "Nepal's Premier Data & Computing Hackathon",
  eventName: "Infinity CodeWave",
  parentEvent: "Infinity",
  date: "April 25-26, 2026",
  duration: "24 Hours",
  eventDate: "2026-04-25T10:00:00+05:45",
  location: "Kathmandu University, Dhulikhel",
  admission: "Free for all Students",
  registrationLink: "https://forms.gle/z7c6eVqJuyKA3R5F8",
  sponsorshipBrochure: "/hackathon_brochure.pdf",

  seo: {
    title: "Infinity CodeWave | Nepal's Premier Data & Computing Hackathon",
    description: "Infinity CodeWave is Nepal's premier data science and computing hackathon, part of the annual Infinity event organized by Kathmandu University Mathematics Students' Club (KUMSC). Join 120+ developers for 24 hours of innovation. Free admission for all students!",
    keywords: [
      "Infinity CodeWave", "hackathon Nepal", "Kathmandu University", "KUMSC",
      "data science hackathon", "AI hackathon", "cybersecurity", "student hackathon",
      "free hackathon Nepal", "Dhulikhel", "computational mathematics"
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
      answer: "You can come solo or with a team of up to 4. Don't have a team? No worries — we'll have team formation activities at the start of the event."
    },
    {
      question: "Who can participate?",
      answer: "Any student (High School or University) with a valid student ID. Both undergraduate and graduate students are welcome."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any hardware you want to hack with. We provide food, drinks, WiFi, and a great hacking environment."
    },
    {
      question: "Do I need to know advanced math?",
      answer: "Not at all! While we emphasize computational mathematics, projects at all skill levels are welcome. Mentors will be available throughout."
    },
    {
      question: "When and where is Infinity CodeWave?",
      answer: "April 24–25, 2026 at Kathmandu University, Dhulikhel. It's part of Infinity, the annual flagship event organized by KUMSC."
    }
  ],

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
      name: "Platinum Sponsor",
      tier: "platinum",
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

  // Tech partners (confirmed: GitHub, ElevenLabs, Adobe Firefly)
  techPartners: [
    { name: "GitHub", logo: null, website: "https://github.com" },
    { name: "Adobe Firefly", logo: null, website: "https://firefly.adobe.com" }
  ],

  sponsors: [
    // Title
    { name: "Tekbay", tier: "title", logo: "/tekbay_logo.svg", website: "https://tekbay.academy/" },
    // Platinum - open slots
    { name: "Platinum Partner", tier: "platinum", logo: null, website: null },
    { name: "Platinum Partner", tier: "platinum", logo: null, website: null },
    { name: "Platinum Partner", tier: "platinum", logo: null, website: null },
    // Gold
    { name: "GitHub", tier: "gold", logo: "/github_logo.svg", website: "https://github.com" },
    { name: "Alpen Labs", tier: "gold", logo: "/alpen_logo.svg", website: "https://www.alpenlabs.io/" },
    { name: "Gold Partner", tier: "gold", logo: null, website: null },
    // Silver - open slots
    { name: "Silver Partner", tier: "silver", logo: null, website: null },
    { name: "Silver Partner", tier: "silver", logo: null, website: null },
    // Bronze - open slots
    { name: "Bronze Partner", tier: "bronze", logo: null, website: null },
    { name: "Bronze Partner", tier: "bronze", logo: null, website: null },
  ],

  organizer: {
    name: "Kathmandu University Mathematics Students' Club (KUMSC)",
    shortName: "KUMSC",
    supportedBy: "Department of Mathematics, Kathmandu University",
    email: "mathsclub@ku.edu.np",
    website: "https://mathsclub.ku.edu.np"
  },

  eventLead: {
    name: "Sabin Pokharel",
    email: "savinpokharel@gmail.com"
  },

  targetAudience: [
    "B.Sc. in Computational Mathematics",
    "Bachelor of Data Science",
    "Computer Science and Engineering Undergrads",
    "Students from any faculty who want to solve problems"
  ],

  budgetAllocation: {
    prizes: "50%",
    foodAndDrinks: "20%",
    swag: "15%",
    marketingAndTech: "15%"
  }
};
