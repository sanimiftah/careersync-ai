# CareerSync AI

**Where Talent Meets Opportunity**

CareerSync AI is a comprehensive career matching platform that uses artificial intelligence to connect university students, career seekers, and HR departments/agencies for smarter, faster, and more meaningful career connections.

## Features

### For Students
- **Career Assessment**: Comprehensive 4-section AI-powered assessment covering interests, skills, values, and work preferences
- **Career Path Discovery**: Interactive exploration of 8 detailed career paths with salary insights and growth projections
- **Skills Development Platform**: Personalized learning paths with progress tracking and skill gap analysis
- **Job Opportunities**: Smart matching with internships and entry-level positions
- **Progress Dashboard**: Visual tracking of career development journey and achievements

### For Career Seekers
- **Advanced Career Assessment**: Multi-dimensional evaluation with AI-powered recommendations
- **Smart Job Matching**: AI algorithms with advanced filtering (location, salary, experience level, industry)
- **Skills Enhancement**: Interactive learning modules with certification tracking
- **Career Analytics**: Real-time market insights, salary data, and industry trends
- **Application Management**: Complete job search workflow with application tracking
- **Profile Optimization**: AI-powered resume and profile enhancement suggestions

### For HR Professionals
- **Talent Discovery**: AI-powered candidate matching with advanced search and filtering
- **Recruitment Pipeline**: Complete hiring workflow from sourcing to onboarding
- **Analytics Dashboard**: Comprehensive recruitment metrics, diversity insights, and performance tracking
- **Candidate Assessment**: Automated screening tools and skill evaluation systems
- **Talent Pool Management**: Build and maintain qualified candidate databases
- **Interview Scheduling**: Integrated calendar and communication tools

## Design System

- **Primary Colors**: Blue (#3B82F6) and Green (#10B981)
- **Accent Color**: Purple (#8B5CF6)
- **Typography**: Modern, clean fonts with excellent readability
- **Mobile-First**: Fully responsive design optimized for all devices (mobile, tablet, desktop)
- **Touch-Friendly**: Large buttons, intuitive navigation, and optimized touch targets
- **Accessibility**: WCAG 2.1 compliant design with keyboard navigation support

## Technology Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Responsive Framework**: Mobile-first design with adaptive layouts and touch-friendly interfaces
- **Data Persistence**: localStorage for client-side data management
- **Development Server**: Python HTTP server for local development and testing
- **Icons**: Heroicons for consistent and beautiful SVG iconography
- **Deployment**: GitHub Pages ready with PWA capabilities

## 🚀 Live Demo

**Experience CareerSync AI now:** [https://sanimiftah.github.io/careersync-ai/](https://sanimiftah.github.io/careersync-ai/)

Try the platform directly in your browser - no installation required! Test all features including career assessment, job matching, and dashboard functionalities across different user types.

## Quick Start

### Option 1: Try Online (Recommended)
Visit the live demo: **[https://sanimiftah.github.io/careersync-ai/](https://sanimiftah.github.io/careersync-ai/)**

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanimiftah/careersync-ai.git
   cd careersync-ai
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   python3 -m http.server 8000
   ```

3. **Open your browser**
   ```
   http://localhost:8000
   ```

## Project Structure

```
careersync-ai/
├── index.html              # Landing page with user type selection
├── package.json            # Project configuration
├── README.md              # Comprehensive project documentation
├── assets/
│   ├── css/
│   │   └── styles.css     # Custom styling and responsive enhancements
│   └── js/
│       ├── main.js              # Core functionality and navigation
│       ├── student-dashboard.js # Student dashboard with assessment tools
│       ├── career-dashboard.js  # Career seeker dashboard with job matching
│       └── hr-dashboard.js      # HR dashboard with talent management
├── pages/
│   ├── student-dashboard.html    # Student interface with career tools
│   ├── career-dashboard.html     # Career seeker interface with job search
│   ├── hr-dashboard.html         # HR interface with recruitment tools
│   ├── career-assessment.html    # Comprehensive 4-section assessment
│   ├── career-paths.html         # Interactive career exploration
│   ├── skills-development.html   # Learning platform with progress tracking
│   └── opportunities.html        # Job search with advanced filtering
├── components/            # Reusable UI components (planned)
└── data/                 # Mock data and schemas (planned)
```

## Core Features Implementation

### AI Matching Algorithm
- **Skills-based matching**: Analyzes technical and soft skills with comprehensive assessment tools
- **Experience alignment**: Considers career level, progression, and growth potential
- **Cultural fit**: Evaluates company culture compatibility and work preferences
- **Personalized recommendations**: Machine learning-driven career path suggestions
- **Salary intelligence**: Real-time market data with compensation analysis and insights

### Comprehensive Assessment System
- **4-Section Career Assessment**: Interests, Skills, Values, and Work Preferences evaluation
- **Interactive Career Paths**: 8 detailed career tracks with salary insights and growth projections
- **Skills Development Platform**: Personalized learning paths with progress tracking
- **Job Matching Engine**: Advanced filtering by location, salary, experience, and industry

### User Experience & Interface
- **Role-based dashboards**: Customized interfaces for Students, Career Seekers, and HR Professionals
- **Mobile-responsive design**: Seamless experience across all devices with touch-friendly navigation
- **Real-time updates**: Dynamic content loading and progress tracking
- **Intuitive navigation**: Clean, modern design with easy access to key features

## Responsive Design

CareerSync AI is built with a mobile-first approach:
- **Breakpoints**: Optimized for mobile, tablet, and desktop
- **Touch-friendly**: Large buttons and touch targets
- **Fast loading**: Optimized assets and minimal dependencies
- **Progressive enhancement**: Works without JavaScript

## Data Privacy & Security

- **Privacy by design**: Minimal data collection
- **Secure storage**: Encrypted local storage (demo)
- **GDPR compliant**: European privacy standards
- **Transparent policies**: Clear data usage terms

## Development Roadmap

### Phase 1: Core Platform ✅ COMPLETED
- [x] Landing page with user type selection and navigation
- [x] Comprehensive user registration and dashboard system
- [x] Student dashboard with career assessment tools
- [x] Career seeker dashboard with job matching engine
- [x] HR professional dashboard with talent management
- [x] 4-section career assessment system
- [x] Interactive career paths exploration (8 career tracks)
- [x] Skills development platform with progress tracking
- [x] Job opportunities search with advanced filtering
- [x] Mobile-responsive design across all devices
- [x] Complete navigation system with mobile optimization

### Phase 2: Enhanced Features ⭐ CURRENT
- [x] Advanced AI matching algorithm implementation
- [x] Comprehensive skill assessment tools
- [x] Application tracking system integration
- [x] Real-time analytics and progress tracking
- [ ] Communication features and messaging system
- [ ] Advanced profile customization options

### Phase 3: Enterprise Features
- [ ] Company profiles and branding
- [ ] Advanced analytics and reporting
- [ ] API integrations
- [ ] Premium features

### Phase 4: Mobile App
- [ ] React Native mobile application
- [ ] Push notifications
- [ ] Offline functionality
- [ ] Native mobile features

## Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex functionality
- Test your changes on multiple devices
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Tailwind CSS for the amazing utility-first CSS framework
- Heroicons for beautiful SVG icons
- The open-source community for inspiration and tools

## Project Background

This project was developed as a personal initiative during **Cognizant Vibe Coding Week**, with guidance and mentorship from **Nuramima Ram**, Social Impact Lead at Cognizant Singapore, Malaysia and Thailand. The platform represents a commitment to leveraging technology for positive social impact in career development and talent matching.

**Cognizant Vibe Coding Week** focuses on building solutions that create meaningful change in communities, and CareerSync AI embodies this mission by democratizing access to career guidance and opportunities through intelligent technology.

## Contact & Support

- **Website**: [CareerSync AI](https://sanimiftah.github.io/careersync-ai/)
- **GitHub Repository**: [CareerSync AI](https://github.com/sanimiftah/careersync-ai)
- **Developer**: [Sani Miftah](https://github.com/sanimiftah)
- **Issues & Bug Reports**: [GitHub Issues](https://github.com/sanimiftah/careersync-ai/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/sanimiftah/careersync-ai/discussions)

### Project Showcase
This project represents innovative work completed during **Cognizant Vibe Coding Week** and demonstrates advanced full-stack development skills, AI integration, and mobile-responsive design principles. Perfect for portfolio presentation and technical interviews.

---

**Built with care for the future of career development**

*CareerSync AI - Connecting talent with opportunity through intelligent matching*
