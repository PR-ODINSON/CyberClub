# THE ZERO PROTOCOL - Cybersecurity Club Website

A modern, premium React.js website for THE ZERO PROTOCOL cybersecurity club. Built with cutting-edge technologies and featuring stunning animations, accessibility, and performance optimizations.

![THE ZERO PROTOCOL](https://img.shields.io/badge/THE%20ZERO%20PROTOCOL-Guardians%20of%20the%20Campus%20Network-0FF1B2)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-FF0055)

## 🚀 Features

### ✨ Modern Design & UX
- **Cyberpunk Aesthetic**: Neon colors, glitch effects, and futuristic design
- **Custom Cursor**: Interactive neon ring cursor with hover states and icons
- **Smooth Animations**: Framer Motion powered micro-interactions and page transitions
- **Glassmorphism**: Modern glass-like UI elements with backdrop blur
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experience

### 🎨 Visual Effects
- **Animated Gradient Backgrounds**: Dynamic radial and conic gradients
- **Scanning Line Effects**: Cyberpunk-style scanning animations
- **Floating Particles**: Ambient particle animations throughout the site
- **3D Hover Effects**: Perspective transforms and depth shadows
- **Typewriter Animation**: Animated text reveals in hero section

### ⚡ Performance & Accessibility
- **Code Splitting**: Lazy-loaded pages and components for optimal performance
- **Reduced Motion Support**: Respects `prefers-reduced-motion` for accessibility
- **Keyboard Navigation**: Full keyboard accessibility with focus indicators
- **Screen Reader Support**: Semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags, structured data, and social sharing

### 🛠 Technical Features
- **Dark/Light Theme**: Persistent theme switching with system preference detection
- **Custom Hooks**: Reusable hooks for theme, cursor, and motion preferences
- **TypeScript Ready**: Easy migration path to TypeScript (see instructions below)
- **ESLint & Prettier**: Code quality and formatting tools configured
- **Modern Build Tools**: Vite for fast development and optimized production builds

## 📁 Project Structure

```
zero-protocol-site/
├── public/                     # Static assets
├── src/
│   ├── assets/                # Images, icons, and media files
│   ├── components/            # Reusable UI components
│   │   ├── Cursor/           # Custom cursor implementation
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Hero.jsx          # Hero section
│   │   ├── FeatureCard.jsx   # Feature display cards
│   │   ├── AnimatedLoader.jsx # Loading screen
│   │   ├── Logo.jsx          # SVG logo component
│   │   └── Modal.jsx         # Modal dialogs
│   ├── hooks/                # Custom React hooks
│   │   ├── useTheme.js       # Theme management
│   │   ├── useCursor.js      # Custom cursor logic
│   │   └── usePrefersReducedMotion.js # Accessibility
│   ├── pages/                # Route components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About page
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Events.jsx        # Events calendar
│   │   ├── Patrons.jsx       # Patron organizations
│   │   ├── Contact.jsx       # Contact form
│   │   └── NotFound.jsx      # 404 error page
│   ├── data/                 # Sample JSON data
│   │   ├── projects.json     # Project information
│   │   └── events.json       # Event listings
│   ├── routes/               # Route configuration
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎯 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Modern web browser with ES6+ support

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd zero-protocol-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm test         # Run tests
```

## 🎨 Customization Guide

### Brand Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0FF1B2',    // Neon teal
  accent: '#7C3AED',     // Electric purple
  dark: '#05060A',       // Dark background
  // ... more colors
}
```

### Fonts
The project uses Google Fonts (Poppins + Inter). To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify the font family in `tailwind.config.js`
3. Update CSS classes throughout components

### Logo
Replace the SVG logo in `src/components/Logo.jsx` with your own design while maintaining the same component interface.

### Content
- **Events**: Update `src/data/events.json`
- **Projects**: Update `src/data/projects.json`
- **Copy**: Edit text content in page components
- **Images**: Add images to `public/` and update references

## 🔧 TypeScript Migration

To convert the project to TypeScript:

1. **Install TypeScript dependencies**
   ```bash
   npm install -D typescript @types/react @types/react-dom
   ```

2. **Rename files**
   - `.jsx` → `.tsx`
   - `.js` → `.ts`

3. **Add type definitions**
   - Create `src/types/` directory
   - Add interfaces for data structures
   - Type component props and state

4. **Update configuration**
   - Rename `vite.config.js` to `vite.config.ts`
   - Add `tsconfig.json`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository**
   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

3. **Environment Variables** (if needed)
   ```
   VITE_API_URL=your_api_endpoint
   VITE_DISCORD_INVITE=your_discord_link
   ```

### Other Platforms

- **Netlify**: Drag and drop the `dist/` folder after `npm run build`
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Docker**: Create a Dockerfile with nginx to serve static files

## 🧪 Testing

### Unit Tests
```bash
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

### Lighthouse Audit
Run Lighthouse in Chrome DevTools to check:
- ✅ Performance (target: 90+)
- ✅ Accessibility (target: 95+)
- ✅ Best Practices (target: 90+)
- ✅ SEO (target: 90+)

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (limited support, no animations)

## 🔗 Integration Points

### Backend APIs
The site is designed to work with these API endpoints:

```javascript
// Events API
GET /api/events          # List events
POST /api/events/rsvp    # RSVP to event

// Contact Form
POST /api/contact        # Submit contact form

// Membership
POST /api/membership     # Join club application

// CTF Scoreboard
GET /api/ctf/scores      # Live CTF scores
WS /ws/ctf              # WebSocket for live updates
```

### Third-party Services
- **Discord**: Update invite links in Footer.jsx
- **Email**: Configure contact form backend
- **Analytics**: Add Google Analytics or Plausible
- **CMS**: Integrate with Strapi or Contentful for content management

## 🎭 Animation Guidelines

### Performance Best Practices
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `will-change` for complex animations
- Respect `prefers-reduced-motion` setting
- Keep animation duration under 300ms for micro-interactions

### Custom Animations
Add new animations in `src/index.css`:

```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-class {
  animation: yourAnimation 1s ease-in-out;
}
```

## 🛡️ Security Considerations

- **Content Security Policy**: Configure CSP headers
- **HTTPS**: Always use HTTPS in production
- **Input Validation**: Validate all form inputs
- **Rate Limiting**: Implement rate limiting for contact forms
- **Dependencies**: Regularly update dependencies for security patches

## 📊 Performance Optimization

### Bundle Size
- Current bundle size: ~300KB gzipped
- Code splitting reduces initial load
- Lazy loading for non-critical components

### Image Optimization
- Use WebP format for better compression
- Implement responsive images with `srcset`
- Add loading="lazy" for below-fold images

### Caching Strategy
```javascript
// Vite build outputs with hashed filenames
// Configure CDN/server for long-term caching
Cache-Control: max-age=31536000  // 1 year for assets
Cache-Control: max-age=3600      // 1 hour for HTML
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use Prettier for formatting
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Cyberpunk 2077, Matrix aesthetics
- **Icons**: Feather Icons via react-icons
- **Animations**: Framer Motion community examples
- **Fonts**: Google Fonts (Poppins & Inter)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/zero-protocol/website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/zero-protocol/website/discussions)
- **Email**: contact@zero-protocol.edu
- **Discord**: [Join our server](https://discord.gg/zero-protocol)

---

**Built with ❤️ by THE ZERO PROTOCOL team**

*Guardians of the Campus Network*
