🌊 Infinity CodeWave - Nepal's Premier Computational Mathematics and Data Science Hackathon
                       
![CodeWave Preview](https://code-wave.pages.dev/og-image.png)

A 48-hour hackathon where data and mathematics meets code!

---

## 🛠️ Tech Stack

**Core Technologies:**
- [Next.js](https://nextjs.org/) (v14.1.0) - React framework for production
- [React](https://react.dev/) (v18.2.0) - Component-based UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Lucide React](https://lucide.dev/) - Beautiful open-source icons

**Build Tools:**
- Vite (via Next.js)
- PostCSS with Autoprefixer

**Development Environment:**
- Node.js (v18.x or v20.x)
- npm or yarn for package management

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have:
- Node.js (v18.x or v20.x) installed ([Download Node.js](https://nodejs.org/))
- Git installed ([Download Git](https://git-scm.com/))
- A modern code editor (VS Code recommended)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/code-wave.git
   cd code-wave
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   # Create a .env.local file in the root directory
   # Add your custom configurations (if needed)
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser:**
   Visit `http://localhost:3000` to see your CodeWave site!

---

## 🎯 Usage

### Basic Setup

This is a static site built with Next.js that exports to static files. Here's how to use it:

```javascript
// Example component structure
import { siteConfig } from '../data/config';

// Usage in your components
function Hero() {
  return (
    <div>
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.tagline}</p>
    </div>
  );
}
```

### Customizing Content

All content is managed through the `src/data/config.js` file. You can easily customize:

1. **Event details** (dates, location, admission)
2. **Tracks** (add/remove/change descriptions)
3. **Sponsors** (update tiers and logos)
4. **FAQs** (add new questions and answers)
5. **Social links** (update handles)

### Deployment

**Option 1: Cloudflare Pages (Recommended)**
```bash
npm run export
```
Then deploy the `out/` directory to Cloudflare Pages as shown in [CLOUDFLARE_DEPLOYMENT.md](CLOUDFLARE_DEPLOYMENT.md)

**Option 2: Vercel**
```bash
npm install -g vercel
vercel
```

**Option 3: Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 📁 Project Structure

```
code-wave/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js application files
│   ├── components/          # Reusable UI components
│   ├── data/                # Configuration files
│   └── styles/              # Global styles
├── .gitignore              # Specifies intentionally untracked files
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Lockfile for npm dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── CLOUDFLARE_DEPLOYMENT.md # Deployment instructions
└── README.md               # This file
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for local environment variables:

```env
# Example variables
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_REGISTRATION_LINK="https://example.com/register"
```

### Customizing the Site

1. **Change colors**: Modify the color scheme in `src/app/globals.css`
2. **Update content**: Edit `src/data/config.js` for all site content
3. **Add new components**: Place them in `src/components/`
4. **Customize tracks**: Modify the tracks array in `src/data/config.js`

### Tailwind CSS Customization

Edit `tailwind.config.js` to customize your theme:

```javascript
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d946ef',
        dark: '#0a0510',
        light: '#E6E1F0',
      },
    },
  },
  plugins: [],
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. Fork the repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Style Guidelines

1. **JavaScript/TypeScript**: Use ES6+ features
2. **Component Structure**: Follow the existing component pattern
3. **Naming Conventions**:
   - Components: PascalCase (e.g., `Hero.jsx`)
   - Functions: camelCase
   - Variables: camelCase
4. **Formatting**: Use Prettier (included in the project)
5. **Commit Messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)

### Pull Request Process

1. Write tests for your changes
2. Ensure all tests pass
3. Update documentation if needed
4. Submit a pull request with a clear description of your changes

### First Timers Welcome!

If you're new to contributing, check out our [Good First Issues](https://github.com/yourusername/code-wave/labels/good%20first%20issue) label for beginner-friendly tasks!

---

## 📝 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## 👥 Authors & Contributors

**Maintainers:**
- [@kumsc_ku](https://github.com/kumsc_ku) - Kathmandu University Mathematics Students' Club

**Special Thanks:**
- [Next.js](https://nextjs.org/) - For the incredible framework
- [Tailwind CSS](https://tailwindcss.com/) - For beautiful utility-first styling
- [Lucide](https://lucide.dev/) - For beautiful open-source icons

**Contributors:**
[![Contributors](https://contributors-img.web.app/token/yourgithubtoken)](https://github.com/yourusername/code-wave/graphs/contributors)

---

##  Issues & Support

### Reporting Issues

Found a bug or have a feature request? Please:

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected behavior
   - Any relevant screenshots or code snippets

---

##  Roadmap

### Current Version (v0.1.0)
- Basic site structure
- Event information pages
- Responsive design
- Static export capability

### Next Steps
- [ ] Add registration system integration
- [ ] Implement countdown timer with real-time updates
- [ ] Add sponsor logos and detailed information
- [ ] Create mobile app prototype
- [ ] Add accessibility features

### Known Issues
- [#12] Some components need responsive improvements on mobile
- [#15] Countdown timer needs timezone validation
- [#20] Sponsor section could use better loading states

---

## 🚀 Get Involved!

We're excited about the potential of this project! Whether you want to:

- [ ] Contribute code
- [ ] Help with design
- [ ] Spread the word about the hackathon
- [ ] Provide feedback

Join our community and help make Infinity CodeWave the most innovative computational mathematics event in Nepal!

🌟 **Star this repository** to show your support and stay updated on our progress!

---

## 🎨 Design Inspiration

This project uses a modern, dark-themed aesthetic with:
- **Color Scheme**: Deep purple (#0a0510) with accent pink (#d946ef)
- **Typography**: Clean, modern fonts with good readability
- **Interactive Elements**: Subtle animations and hover effects
- **Responsive Design**: Works beautifully on all device sizes

The design was inspired by:
- [Tailwind CSS](https://tailwindcss.com/) utility-first approach
- [Next.js](https://nextjs.org/) performance optimizations
- [Lucide Icons](https://lucide.dev/) for beautiful, consistent icons
```

