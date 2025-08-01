class OpportunitiesExplorer {
  constructor() {
    this.jobs = this.initializeJobsDatabase();
    this.filteredJobs = [...this.jobs];
    this.currentPage = 1;
    this.jobsPerPage = 10;
    
    this.initializeEventListeners();
    this.displayJobs();
    this.updateStats();
  }

  initializeJobsDatabase() {
    return [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        remote: true,
        type: "full-time",
        experience: "mid",
        salary: { min: 85000, max: 120000 },
        category: "technology",
        postedDate: "2025-01-08",
        featured: true,
        description: "Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern development practices.",
        requirements: [
          "3+ years experience with React and JavaScript",
          "Strong understanding of HTML5, CSS3, and responsive design",
          "Experience with TypeScript and modern development tools",
          "Knowledge of Git version control and CI/CD practices",
          "Bachelor's degree in Computer Science or related field"
        ],
        benefits: [
          "Competitive salary with equity options",
          "Comprehensive health, dental, and vision insurance",
          "Flexible working hours and remote work options",
          "Professional development budget ($3,000/year)",
          "Unlimited PTO policy"
        ],
        skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git"],
        companyInfo: {
          size: "500-1000 employees",
          industry: "Technology",
          founded: "2015",
          description: "Leading provider of cloud-based solutions for enterprise clients."
        }
      },
      {
        id: 2,
        title: "UX Designer",
        company: "Design Studio Pro",
        location: "New York, NY",
        remote: false,
        type: "full-time",
        experience: "entry",
        salary: { min: 65000, max: 85000 },
        category: "design",
        postedDate: "2025-01-07",
        featured: false,
        description: "Create intuitive and engaging user experiences for our digital products. Work closely with product managers and developers to bring designs to life.",
        requirements: [
          "1-3 years of UX/UI design experience",
          "Proficiency in Figma, Sketch, or Adobe Creative Suite",
          "Strong portfolio demonstrating design thinking process",
          "Understanding of user-centered design principles",
          "Excellent communication and collaboration skills"
        ],
        benefits: [
          "Health and wellness benefits",
          "Creative workspace in Manhattan",
          "Professional development opportunities",
          "Collaborative and innovative team environment",
          "20 days PTO plus holidays"
        ],
        skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
        companyInfo: {
          size: "50-100 employees",
          industry: "Design Agency",
          founded: "2012",
          description: "Award-winning design agency specializing in digital experiences."
        }
      },
      {
        id: 3,
        title: "Marketing Manager",
        company: "GrowthCo",
        location: "Austin, TX",
        remote: true,
        type: "full-time",
        experience: "mid",
        salary: { min: 70000, max: 95000 },
        category: "marketing",
        postedDate: "2025-01-06",
        featured: true,
        description: "Lead marketing initiatives to drive brand awareness and customer acquisition. Manage campaigns across multiple channels and analyze performance metrics.",
        requirements: [
          "3-5 years of marketing experience",
          "Experience with digital marketing channels (SEO, SEM, social media)",
          "Strong analytical skills and experience with marketing automation",
          "Excellent written and verbal communication skills",
          "MBA or relevant marketing certification preferred"
        ],
        benefits: [
          "Competitive base salary plus performance bonuses",
          "Stock options and equity participation",
          "Comprehensive benefits package",
          "Remote-first culture with quarterly team meetups",
          "Marketing conference and training budget"
        ],
        skills: ["Digital Marketing", "SEO/SEM", "Marketing Automation", "Analytics", "Content Strategy"],
        companyInfo: {
          size: "100-250 employees",
          industry: "SaaS",
          founded: "2018",
          description: "Fast-growing SaaS company helping businesses optimize their growth strategies."
        }
      },
      {
        id: 4,
        title: "Data Analyst Intern",
        company: "DataInsights LLC",
        location: "Seattle, WA",
        remote: true,
        type: "internship",
        experience: "entry",
        salary: { min: 20000, max: 25000 },
        category: "technology",
        postedDate: "2025-01-05",
        featured: false,
        description: "Gain hands-on experience in data analysis and visualization. Work with real datasets to generate insights that drive business decisions.",
        requirements: [
          "Currently pursuing degree in Data Science, Statistics, or related field",
          "Basic knowledge of SQL and Python",
          "Familiarity with data visualization tools (Tableau, Power BI)",
          "Strong analytical and problem-solving skills",
          "Ability to work independently and in a team environment"
        ],
        benefits: [
          "Mentorship from senior data scientists",
          "Hands-on experience with enterprise data systems",
          "Networking opportunities within the tech industry",
          "Flexible schedule to accommodate school commitments",
          "Potential for full-time offer upon graduation"
        ],
        skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis", "Excel"],
        companyInfo: {
          size: "250-500 employees",
          industry: "Data Analytics",
          founded: "2014",
          description: "Leading data analytics firm serving Fortune 500 companies."
        }
      },
      {
        id: 5,
        title: "Sales Representative",
        company: "SalesForce Pro",
        location: "Remote",
        remote: true,
        type: "full-time",
        experience: "entry",
        salary: { min: 45000, max: 65000 },
        category: "sales",
        postedDate: "2025-01-04",
        featured: false,
        description: "Drive revenue growth by identifying and closing new business opportunities. Build relationships with prospects and customers to exceed sales targets.",
        requirements: [
          "1-2 years of sales experience preferred but not required",
          "Excellent communication and interpersonal skills",
          "Self-motivated with a results-driven approach",
          "Experience with CRM software (Salesforce preferred)",
          "Bachelor's degree or equivalent experience"
        ],
        benefits: [
          "Base salary plus uncapped commission structure",
          "Comprehensive training program",
          "Career advancement opportunities",
          "Health benefits and 401(k) matching",
          "Remote work flexibility"
        ],
        skills: ["Sales Prospecting", "CRM Software", "Negotiation", "Customer Relations", "Lead Generation"],
        companyInfo: {
          size: "1000+ employees",
          industry: "Sales Technology",
          founded: "2010",
          description: "Premier sales technology platform helping businesses scale their revenue operations."
        }
      },
      {
        id: 6,
        title: "Financial Analyst",
        company: "InvestCorp",
        location: "New York, NY",
        remote: false,
        type: "full-time",
        experience: "mid",
        salary: { min: 75000, max: 95000 },
        category: "finance",
        postedDate: "2025-01-03",
        featured: true,
        description: "Analyze financial data and market trends to support investment decisions. Create detailed financial models and present findings to senior management.",
        requirements: [
          "2-4 years of financial analysis experience",
          "Strong proficiency in Excel and financial modeling",
          "Knowledge of accounting principles and financial statements",
          "Experience with Bloomberg Terminal preferred",
          "CFA Level 1 or equivalent finance certification"
        ],
        benefits: [
          "Competitive salary with annual bonus potential",
          "Comprehensive benefits including health and dental",
          "Professional development and CFA exam support",
          "Downtown office with modern amenities",
          "Opportunity to work with high-profile clients"
        ],
        skills: ["Financial Modeling", "Excel", "Bloomberg Terminal", "Financial Analysis", "Investment Research"],
        companyInfo: {
          size: "500-1000 employees",
          industry: "Investment Management",
          founded: "1995",
          description: "Global investment management firm with over $50B in assets under management."
        }
      },
      {
        id: 7,
        title: "Registered Nurse",
        company: "Metropolitan Hospital",
        location: "San Francisco, CA",
        remote: false,
        type: "full-time",
        experience: "mid",
        salary: { min: 80000, max: 110000 },
        category: "healthcare",
        postedDate: "2025-01-02",
        featured: false,
        description: "Provide compassionate patient care in our progressive medical environment. Work collaboratively with healthcare teams to ensure optimal patient outcomes.",
        requirements: [
          "Valid RN license in California",
          "2+ years of clinical nursing experience",
          "BLS and ACLS certification required",
          "Strong communication and critical thinking skills",
          "Experience with electronic health records (Epic preferred)"
        ],
        benefits: [
          "Competitive salary with shift differentials",
          "Comprehensive health benefits and retirement plan",
          "Tuition reimbursement for continuing education",
          "Flexible scheduling options",
          "Professional development opportunities"
        ],
        skills: ["Patient Care", "Clinical Assessment", "Medical Documentation", "Team Collaboration", "Critical Thinking"],
        companyInfo: {
          size: "5000+ employees",
          industry: "Healthcare",
          founded: "1952",
          description: "Leading academic medical center providing comprehensive healthcare services."
        }
      },
      {
        id: 8,
        title: "Content Marketing Specialist",
        company: "BrandBuilder Agency",
        location: "Austin, TX",
        remote: true,
        type: "part-time",
        experience: "entry",
        salary: { min: 35000, max: 45000 },
        category: "marketing",
        postedDate: "2025-01-01",
        featured: false,
        description: "Create engaging content across multiple platforms to build brand awareness and drive customer engagement. Collaborate with design and marketing teams.",
        requirements: [
          "1-2 years of content creation experience",
          "Excellent writing and editing skills",
          "Knowledge of social media platforms and content management systems",
          "Basic understanding of SEO principles",
          "Portfolio of published content required"
        ],
        benefits: [
          "Flexible part-time schedule (20-25 hours/week)",
          "Remote work opportunity",
          "Creative and collaborative work environment",
          "Opportunity to build diverse portfolio",
          "Potential for full-time advancement"
        ],
        skills: ["Content Writing", "Social Media", "SEO", "Content Strategy", "Copywriting"],
        companyInfo: {
          size: "25-50 employees",
          industry: "Marketing Agency",
          founded: "2019",
          description: "Boutique marketing agency specializing in brand development for startups and SMBs."
        }
      },
      {
        id: 9,
        title: "Product Manager",
        company: "InnovateTech",
        location: "Seattle, WA",
        remote: true,
        type: "full-time",
        experience: "senior",
        salary: { min: 120000, max: 150000 },
        category: "technology",
        postedDate: "2024-12-30",
        featured: true,
        description: "Lead product strategy and development for our flagship SaaS platform. Drive product roadmap and collaborate with engineering, design, and marketing teams.",
        requirements: [
          "5+ years of product management experience",
          "Experience with agile development methodologies",
          "Strong analytical and data-driven decision making skills",
          "Excellent leadership and communication abilities",
          "Technical background or MBA preferred"
        ],
        benefits: [
          "Competitive salary with equity package",
          "Comprehensive benefits and 401(k) matching",
          "Flexible work arrangements and unlimited PTO",
          "Professional development budget and conference attendance",
          "Opportunity to shape product direction and company growth"
        ],
        skills: ["Product Strategy", "Agile/Scrum", "Data Analysis", "User Research", "Roadmap Planning"],
        companyInfo: {
          size: "200-500 employees",
          industry: "SaaS Technology",
          founded: "2016",
          description: "Innovative technology company building solutions for digital transformation."
        }
      },
      {
        id: 10,
        title: "Graphic Design Intern",
        company: "Creative Minds Studio",
        location: "New York, NY",
        remote: false,
        type: "internship",
        experience: "entry",
        salary: { min: 15000, max: 20000 },
        category: "design",
        postedDate: "2024-12-29",
        featured: false,
        description: "Support our creative team in developing visual assets for client campaigns. Gain exposure to brand identity, digital design, and print production.",
        requirements: [
          "Currently enrolled in graphic design or related program",
          "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
          "Strong portfolio demonstrating design fundamentals",
          "Attention to detail and ability to take creative direction",
          "Enthusiasm for learning and contributing to team projects"
        ],
        benefits: [
          "Mentorship from experienced designers",
          "Exposure to diverse client projects and industries",
          "Networking opportunities in the creative industry",
          "Portfolio development guidance",
          "Potential for full-time opportunity"
        ],
        skills: ["Adobe Creative Suite", "Brand Design", "Print Design", "Digital Design", "Typography"],
        companyInfo: {
          size: "10-25 employees",
          industry: "Creative Agency",
          founded: "2013",
          description: "Boutique creative agency working with innovative brands and startups."
        }
      },
      {
        id: 11,
        title: "Customer Success Manager",
        company: "ClientFirst Solutions",
        location: "Remote",
        remote: true,
        type: "full-time",
        experience: "mid",
        salary: { min: 65000, max: 85000 },
        category: "sales",
        postedDate: "2024-12-28",
        featured: false,
        description: "Ensure customer satisfaction and drive retention through proactive relationship management. Help customers achieve their goals using our platform.",
        requirements: [
          "2-4 years of customer success or account management experience",
          "Strong communication and relationship building skills",
          "Experience with CRM and customer success platforms",
          "Problem-solving mindset with attention to detail",
          "SaaS industry experience preferred"
        ],
        benefits: [
          "Competitive salary with performance bonuses",
          "Fully remote work environment",
          "Professional development opportunities",
          "Health benefits and 401(k) matching",
          "Collaborative and supportive team culture"
        ],
        skills: ["Customer Relations", "Account Management", "CRM Software", "Problem Solving", "Communication"],
        companyInfo: {
          size: "100-250 employees",
          industry: "SaaS",
          founded: "2017",
          description: "Customer success platform helping businesses improve customer retention and growth."
        }
      },
      {
        id: 12,
        title: "DevOps Engineer",
        company: "CloudScale Systems",
        location: "Austin, TX",
        remote: true,
        type: "full-time",
        experience: "senior",
        salary: { min: 110000, max: 140000 },
        category: "technology",
        postedDate: "2024-12-27",
        featured: true,
        description: "Design and maintain scalable cloud infrastructure. Implement CI/CD pipelines and ensure high availability of production systems.",
        requirements: [
          "4+ years of DevOps or infrastructure engineering experience",
          "Strong experience with AWS, Docker, and Kubernetes",
          "Proficiency in infrastructure as code (Terraform, CloudFormation)",
          "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
          "Scripting skills in Python, Bash, or similar languages"
        ],
        benefits: [
          "Competitive salary with stock options",
          "Comprehensive benefits package",
          "Flexible remote work policy",
          "Technology and training budget",
          "Opportunity to work with cutting-edge technologies"
        ],
        skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        companyInfo: {
          size: "500-1000 employees",
          industry: "Cloud Infrastructure",
          founded: "2014",
          description: "Leading provider of cloud infrastructure solutions for enterprise clients."
        }
      }
    ];
  }

  initializeEventListeners() {
    // Search functionality
    document.getElementById('jobSearch').addEventListener('input', (e) => {
      this.searchJobs(e.target.value);
    });

    // Filter functionality
    document.getElementById('jobTypeFilter').addEventListener('change', () => this.applyFilters());
    document.getElementById('experienceFilter').addEventListener('change', () => this.applyFilters());
    document.getElementById('locationFilter').addEventListener('change', () => this.applyFilters());
    document.getElementById('salaryFilter').addEventListener('change', () => this.applyFilters());

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', () => {
      this.clearAllFilters();
    });

    // Sort functionality
    document.getElementById('sortBy').addEventListener('change', (e) => {
      this.sortJobs(e.target.value);
    });

    // Load more jobs
    document.getElementById('loadMoreJobs').addEventListener('click', () => {
      this.loadMoreJobs();
    });

    // Modal close functionality
    document.getElementById('jobModal').addEventListener('click', (e) => {
      if (e.target.id === 'jobModal') {
        this.closeJobModal();
      }
    });
  }

  searchJobs(searchTerm) {
    if (!searchTerm.trim()) {
      this.filteredJobs = [...this.jobs];
    } else {
      const term = searchTerm.toLowerCase();
      this.filteredJobs = this.jobs.filter(job => 
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }
    this.currentPage = 1;
    this.displayJobs();
    this.updateResultsCount();
  }

  applyFilters() {
    const jobType = document.getElementById('jobTypeFilter').value;
    const experience = document.getElementById('experienceFilter').value;
    const location = document.getElementById('locationFilter').value;
    const salary = document.getElementById('salaryFilter').value;

    this.filteredJobs = this.jobs.filter(job => {
      let matches = true;

      if (jobType && job.type !== jobType) matches = false;
      if (experience && job.experience !== experience) matches = false;
      if (location) {
        if (location === 'remote' && !job.remote) matches = false;
        if (location !== 'remote' && !job.location.toLowerCase().includes(location.replace('-', ' '))) matches = false;
      }
      if (salary) {
        const [min, max] = salary.split('-').map(s => s === '+' ? Infinity : parseInt(s) * 1000);
        if (max) {
          if (job.salary.min < min || job.salary.max > max) matches = false;
        } else {
          if (job.salary.min < min) matches = false;
        }
      }

      return matches;
    });

    this.currentPage = 1;
    this.displayJobs();
    this.updateResultsCount();
  }

  clearAllFilters() {
    document.getElementById('jobTypeFilter').value = '';
    document.getElementById('experienceFilter').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('salaryFilter').value = '';
    document.getElementById('jobSearch').value = '';
    
    this.filteredJobs = [...this.jobs];
    this.currentPage = 1;
    this.displayJobs();
    this.updateResultsCount();
  }

  sortJobs(sortBy) {
    switch (sortBy) {
      case 'date':
        this.filteredJobs.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        break;
      case 'salary':
        this.filteredJobs.sort((a, b) => b.salary.max - a.salary.max);
        break;
      case 'company':
        this.filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
        break;
      default: // relevance
        this.filteredJobs.sort((a, b) => {
          if (a.featured !== b.featured) return b.featured ? 1 : -1;
          return new Date(b.postedDate) - new Date(a.postedDate);
        });
    }
    this.currentPage = 1;
    this.displayJobs();
  }

  displayJobs() {
    const container = document.getElementById('jobListings');
    const startIndex = 0;
    const endIndex = this.currentPage * this.jobsPerPage;
    const jobsToShow = this.filteredJobs.slice(startIndex, endIndex);

    container.innerHTML = jobsToShow.map(job => this.createJobCard(job)).join('');

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreJobs');
    if (endIndex >= this.filteredJobs.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }

  createJobCard(job) {
    const postedDate = this.formatDate(job.postedDate);
    const salaryRange = `$${(job.salary.min / 1000).toFixed(0)}k - $${(job.salary.max / 1000).toFixed(0)}k`;
    
    return `
      <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 ${job.featured ? 'border-green-500' : 'border-transparent'}">
        <div class="flex justify-between items-start mb-4">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-xl font-semibold text-gray-900">${job.title}</h3>
              ${job.featured ? '<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Featured</span>' : ''}
            </div>
            <p class="text-lg font-medium text-blue-600 mb-1">${job.company}</p>
            <div class="flex items-center gap-4 text-gray-600 text-sm">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                ${job.location}
              </span>
              ${job.remote ? '<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Remote</span>' : ''}
              <span class="capitalize">${job.type.replace('-', ' ')}</span>
              <span class="capitalize">${job.experience} level</span>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-semibold text-gray-900">${salaryRange}</p>
            <p class="text-sm text-gray-500">${postedDate}</p>
          </div>
        </div>
        
        <p class="text-gray-700 mb-4 line-clamp-2">${job.description}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          ${job.skills.slice(0, 4).map(skill => 
            `<span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">${skill}</span>`
          ).join('')}
          ${job.skills.length > 4 ? `<span class="text-gray-500 text-xs">+${job.skills.length - 4} more</span>` : ''}
        </div>
        
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4 text-sm text-gray-600">
            <span>${job.companyInfo.size}</span>
            <span>${job.companyInfo.industry}</span>
          </div>
          <button onclick="opportunitiesExplorer.openJobModal(${job.id})" 
                  class="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    `;
  }

  openJobModal(jobId) {
    const job = this.jobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('jobModal');
    const content = document.getElementById('jobModalContent');
    
    content.innerHTML = this.createJobModalContent(job);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  createJobModalContent(job) {
    const salaryRange = `$${(job.salary.min / 1000).toFixed(0)}k - $${(job.salary.max / 1000).toFixed(0)}k`;
    const postedDate = this.formatDate(job.postedDate);

    return `
      <div class="p-8">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">${job.title}</h2>
            <p class="text-xl text-blue-600 font-medium mb-2">${job.company}</p>
            <div class="flex items-center gap-4 text-gray-600">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                ${job.location}
              </span>
              ${job.remote ? '<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Remote Available</span>' : ''}
              <span class="capitalize">${job.type.replace('-', ' ')}</span>
              <span class="capitalize">${job.experience} level</span>
            </div>
          </div>
          <button onclick="opportunitiesExplorer.closeJobModal()" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Salary and Posted Date -->
        <div class="bg-green-50 rounded-lg p-4 mb-6">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-600">Salary Range</p>
              <p class="text-2xl font-bold text-green-600">${salaryRange}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Posted</p>
              <p class="text-lg font-medium text-gray-900">${postedDate}</p>
            </div>
          </div>
        </div>

        <!-- Job Description -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
          <p class="text-gray-700 leading-relaxed">${job.description}</p>
        </div>

        <!-- Requirements -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
          <ul class="space-y-2">
            ${job.requirements.map(req => 
              `<li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">${req}</span>
              </li>`
            ).join('')}
          </ul>
        </div>

        <!-- Benefits -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Benefits & Perks</h3>
          <ul class="space-y-2">
            ${job.benefits.map(benefit => 
              `<li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-gray-700">${benefit}</span>
              </li>`
            ).join('')}
          </ul>
        </div>

        <!-- Skills -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Required Skills</h3>
          <div class="flex flex-wrap gap-2">
            ${job.skills.map(skill => 
              `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">${skill}</span>`
            ).join('')}
          </div>
        </div>

        <!-- Company Info -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">About ${job.company}</h3>
          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-gray-700 mb-3">${job.companyInfo.description}</p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span class="font-medium text-gray-900">Company Size:</span>
                <p class="text-gray-600">${job.companyInfo.size}</p>
              </div>
              <div>
                <span class="font-medium text-gray-900">Industry:</span>
                <p class="text-gray-600">${job.companyInfo.industry}</p>
              </div>
              <div>
                <span class="font-medium text-gray-900">Founded:</span>
                <p class="text-gray-600">${job.companyInfo.founded}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <button class="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Apply Now
          </button>
          <button class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Save Job
          </button>
          <button class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Share
          </button>
        </div>
      </div>
    `;
  }

  closeJobModal() {
    const modal = document.getElementById('jobModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  loadMoreJobs() {
    this.currentPage++;
    this.displayJobs();
  }

  updateStats() {
    const totalJobs = this.jobs.length;
    const newJobs = this.jobs.filter(job => {
      const daysDiff = (new Date() - new Date(job.postedDate)) / (1000 * 60 * 60 * 24);
      return daysDiff <= 7;
    }).length;
    const remoteJobs = this.jobs.filter(job => job.remote).length;
    const internships = this.jobs.filter(job => job.type === 'internship').length;

    document.getElementById('totalJobs').textContent = totalJobs.toLocaleString();
    document.getElementById('newJobs').textContent = newJobs;
    document.getElementById('remoteJobs').textContent = remoteJobs;
    document.getElementById('internships').textContent = internships;
  }

  updateResultsCount() {
    const total = this.filteredJobs.length;
    const showing = Math.min(this.currentPage * this.jobsPerPage, total);
    document.getElementById('resultsCount').textContent = 
      `Showing ${showing} of ${total.toLocaleString()} jobs`;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) return 'Today';
    if (daysDiff === 1) return 'Yesterday';
    if (daysDiff < 7) return `${daysDiff} days ago`;
    if (daysDiff < 30) return `${Math.floor(daysDiff / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined 
    });
  }
}

// Category filter function (global)
function filterByCategory(category) {
  // Update visual state of category buttons
  document.querySelectorAll('.job-category-btn').forEach(btn => {
    btn.classList.remove('bg-blue-200', 'bg-purple-200', 'bg-green-200', 'bg-yellow-200', 'bg-indigo-200', 'bg-red-200');
    btn.classList.add('bg-gray-100');
  });
  
  event.target.classList.remove('bg-gray-100');
  if (category === 'technology') event.target.classList.add('bg-blue-200');
  else if (category === 'design') event.target.classList.add('bg-purple-200');
  else if (category === 'marketing') event.target.classList.add('bg-green-200');
  else if (category === 'sales') event.target.classList.add('bg-yellow-200');
  else if (category === 'finance') event.target.classList.add('bg-indigo-200');
  else if (category === 'healthcare') event.target.classList.add('bg-red-200');

  // Filter jobs by category
  opportunitiesExplorer.filteredJobs = opportunitiesExplorer.jobs.filter(job => job.category === category);
  opportunitiesExplorer.currentPage = 1;
  opportunitiesExplorer.displayJobs();
  opportunitiesExplorer.updateResultsCount();
}

// Initialize the opportunities explorer when the page loads
let opportunitiesExplorer;
document.addEventListener('DOMContentLoaded', () => {
  opportunitiesExplorer = new OpportunitiesExplorer();
});
