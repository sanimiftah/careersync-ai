// CareerSync AI - Career Paths Explorer

class CareerPathsExplorer {
  constructor() {
    this.careers = this.initializeCareersDatabase();
    this.filteredCareers = [...this.careers];
    this.displayedCount = 8;
    this.currentFilters = {
      search: '',
      industry: '',
      salary: '',
      category: ''
    };
    this.init();
  }

  init() {
    console.log('Career Paths Explorer initialized');
    this.setupEventListeners();
    this.renderCareers();
    this.updateResultsCount();
  }

  setupEventListeners() {
    // Search functionality
    document.getElementById('careerSearch').addEventListener('input', (e) => {
      this.currentFilters.search = e.target.value.toLowerCase();
      this.applyFilters();
    });

    // Filter dropdowns
    document.getElementById('industryFilter').addEventListener('change', (e) => {
      this.currentFilters.industry = e.target.value;
      this.applyFilters();
    });

    document.getElementById('salaryFilter').addEventListener('change', (e) => {
      this.currentFilters.salary = e.target.value;
      this.applyFilters();
    });

    // Load more button
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
      this.loadMore();
    });

    // Modal close functionality
    document.getElementById('careerModal').addEventListener('click', (e) => {
      if (e.target.id === 'careerModal') {
        this.closeModal();
      }
    });
  }

  initializeCareersDatabase() {
    return [
      {
        id: 1,
        title: "Software Engineer",
        industry: "technology",
        category: "technology",
        description: "Design, develop, and maintain software applications and systems using various programming languages and frameworks.",
        salary: { min: 75000, max: 180000, median: 110000 },
        salaryRange: "mid",
        growth: "22%",
        education: "Bachelor's in Computer Science or related field",
        experience: "0-2 years for entry level",
        skills: ["Programming", "Problem Solving", "System Design", "Testing", "Version Control"],
        responsibilities: [
          "Write clean, maintainable code",
          "Collaborate with cross-functional teams",
          "Debug and troubleshoot applications",
          "Participate in code reviews",
          "Stay updated with latest technologies"
        ],
        careerPath: [
          "Junior Software Engineer",
          "Software Engineer", 
          "Senior Software Engineer",
          "Lead Engineer",
          "Engineering Manager / Principal Engineer"
        ],
        companies: ["Google", "Microsoft", "Amazon", "Netflix", "Spotify"],
        remote: true,
        inDemand: true
      },
      {
        id: 2,
        title: "Data Scientist",
        industry: "technology",
        category: "technology", 
        description: "Analyze complex data sets to extract insights and help organizations make data-driven decisions using statistical methods and machine learning.",
        salary: { min: 85000, max: 200000, median: 125000 },
        salaryRange: "senior",
        growth: "31%",
        education: "Bachelor's in Statistics, Mathematics, or Computer Science",
        experience: "2-3 years experience preferred",
        skills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
        responsibilities: [
          "Collect and clean large datasets",
          "Build predictive models",
          "Create data visualizations",
          "Present findings to stakeholders",
          "Develop data pipelines"
        ],
        careerPath: [
          "Data Analyst",
          "Junior Data Scientist",
          "Data Scientist",
          "Senior Data Scientist", 
          "Principal Data Scientist / Data Science Manager"
        ],
        companies: ["Netflix", "Uber", "Airbnb", "LinkedIn", "Palantir"],
        remote: true,
        inDemand: true
      },
      {
        id: 3,
        title: "UX Designer",
        industry: "design",
        category: "design",
        description: "Create intuitive and engaging user experiences for digital products through research, design, and testing.",
        salary: { min: 65000, max: 150000, median: 95000 },
        salaryRange: "mid",
        growth: "13%",
        education: "Bachelor's in Design, Psychology, or related field",
        experience: "1-3 years portfolio experience",
        skills: ["User Research", "Prototyping", "Visual Design", "Figma/Sketch", "User Testing"],
        responsibilities: [
          "Conduct user research and interviews",
          "Create wireframes and prototypes",
          "Design user interfaces",
          "Collaborate with developers",
          "Test and iterate on designs"
        ],
        careerPath: [
          "Junior UX Designer",
          "UX Designer",
          "Senior UX Designer",
          "Lead UX Designer",
          "UX Director / Design Manager"
        ],
        companies: ["Apple", "Google", "Adobe", "Figma", "Shopify"],
        remote: true,
        inDemand: true
      },
      {
        id: 4,
        title: "Marketing Manager",
        industry: "marketing",
        category: "marketing",
        description: "Develop and execute marketing strategies to promote products, build brand awareness, and drive customer acquisition.",
        salary: { min: 55000, max: 140000, median: 85000 },
        salaryRange: "mid",
        growth: "10%",
        education: "Bachelor's in Marketing, Business, or Communications",
        experience: "3-5 years marketing experience",
        skills: ["Digital Marketing", "Analytics", "Content Strategy", "SEO/SEM", "Project Management"],
        responsibilities: [
          "Develop marketing campaigns",
          "Analyze market trends",
          "Manage marketing budget",
          "Coordinate with creative teams",
          "Track campaign performance"
        ],
        careerPath: [
          "Marketing Coordinator",
          "Marketing Specialist",
          "Marketing Manager",
          "Senior Marketing Manager",
          "Marketing Director / VP Marketing"
        ],
        companies: ["HubSpot", "Salesforce", "Coca-Cola", "Nike", "Tesla"],
        remote: false,
        inDemand: true
      },
      {
        id: 5,
        title: "Registered Nurse",
        industry: "healthcare",
        category: "healthcare",
        description: "Provide patient care, administer medications, and support patients and families in healthcare settings.",
        salary: { min: 60000, max: 120000, median: 80000 },
        salaryRange: "mid",
        growth: "7%",
        education: "Associate or Bachelor's in Nursing + RN License",
        experience: "Clinical training required",
        skills: ["Patient Care", "Medical Knowledge", "Communication", "Critical Thinking", "Compassion"],
        responsibilities: [
          "Assess patient conditions",
          "Administer medications",
          "Collaborate with medical team",
          "Educate patients and families",
          "Maintain patient records"
        ],
        careerPath: [
          "Staff Nurse",
          "Charge Nurse",
          "Nurse Manager",
          "Director of Nursing",
          "Chief Nursing Officer"
        ],
        companies: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "Johns Hopkins", "Mass General"],
        remote: false,
        inDemand: true
      },
      {
        id: 6,
        title: "Financial Analyst",
        industry: "finance",
        category: "finance",
        description: "Analyze financial data, create models, and provide insights to guide investment and business decisions.",
        salary: { min: 60000, max: 150000, median: 85000 },
        salaryRange: "mid",
        growth: "8%",
        education: "Bachelor's in Finance, Economics, or Business",
        experience: "0-2 years for entry level",
        skills: ["Financial Modeling", "Excel", "Data Analysis", "Presentation", "Business Acumen"],
        responsibilities: [
          "Build financial models",
          "Analyze investment opportunities",
          "Create reports and presentations",
          "Monitor market trends",
          "Support strategic decisions"
        ],
        careerPath: [
          "Financial Analyst",
          "Senior Financial Analyst",
          "Finance Manager",
          "Finance Director",
          "CFO / VP Finance"
        ],
        companies: ["Goldman Sachs", "JP Morgan", "BlackRock", "Vanguard", "Fidelity"],
        remote: false,
        inDemand: true
      },
      {
        id: 7,
        title: "Teacher",
        industry: "education",
        category: "education",
        description: "Educate and inspire students, develop curriculum, and support student learning and development.",
        salary: { min: 40000, max: 80000, median: 55000 },
        salaryRange: "entry",
        growth: "5%",
        education: "Bachelor's in Education or subject area + teaching certification",
        experience: "Student teaching required",
        skills: ["Teaching", "Communication", "Curriculum Design", "Classroom Management", "Patience"],
        responsibilities: [
          "Plan and deliver lessons",
          "Assess student progress",
          "Manage classroom environment",
          "Communicate with parents",
          "Professional development"
        ],
        careerPath: [
          "Student Teacher",
          "Classroom Teacher",
          "Department Head",
          "Assistant Principal",
          "Principal / Superintendent"
        ],
        companies: ["Public Schools", "Private Schools", "Charter Schools", "International Schools", "Online Schools"],
        remote: false,
        inDemand: true
      },
      {
        id: 8,
        title: "Project Manager",
        industry: "technology",
        category: "management",
        description: "Plan, execute, and deliver projects on time and within budget while coordinating teams and resources.",
        salary: { min: 70000, max: 160000, median: 100000 },
        salaryRange: "mid",
        growth: "11%",
        education: "Bachelor's degree + Project Management certification",
        experience: "3-5 years project experience",
        skills: ["Project Planning", "Leadership", "Communication", "Risk Management", "Agile/Scrum"],
        responsibilities: [
          "Define project scope and objectives",
          "Create project plans and timelines",
          "Coordinate team members",
          "Monitor project progress",
          "Manage stakeholder expectations"
        ],
        careerPath: [
          "Project Coordinator",
          "Project Manager",
          "Senior Project Manager",
          "Program Manager",
          "Director of PMO"
        ],
        companies: ["Microsoft", "Amazon", "IBM", "Accenture", "Deloitte"],
        remote: true,
        inDemand: true
      }
    ];
  }

  applyFilters() {
    this.filteredCareers = this.careers.filter(career => {
      const matchesSearch = !this.currentFilters.search || 
        career.title.toLowerCase().includes(this.currentFilters.search) ||
        career.description.toLowerCase().includes(this.currentFilters.search) ||
        career.skills.some(skill => skill.toLowerCase().includes(this.currentFilters.search));

      const matchesIndustry = !this.currentFilters.industry || 
        career.industry === this.currentFilters.industry;

      const matchesSalary = !this.currentFilters.salary || 
        career.salaryRange === this.currentFilters.salary;

      const matchesCategory = !this.currentFilters.category || 
        career.category === this.currentFilters.category;

      return matchesSearch && matchesIndustry && matchesSalary && matchesCategory;
    });

    this.displayedCount = 8; // Reset displayed count
    this.renderCareers();
    this.updateResultsCount();
  }

  renderCareers() {
    const grid = document.getElementById('careerGrid');
    const careersToShow = this.filteredCareers.slice(0, this.displayedCount);
    
    grid.innerHTML = careersToShow.map(career => this.createCareerCard(career)).join('');
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.style.display = this.displayedCount >= this.filteredCareers.length ? 'none' : 'block';
  }

  createCareerCard(career) {
    const demandBadge = career.inDemand ? 
      '<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">High Demand</span>' : '';
    
    const remoteBadge = career.remote ? 
      '<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Remote OK</span>' : '';

    return `
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
           onclick="careerPaths.showCareerDetail(${career.id})">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-gray-900">${career.title}</h3>
          <div class="flex flex-col gap-1">
            ${demandBadge}
            ${remoteBadge}
          </div>
        </div>
        
        <p class="text-gray-600 mb-4 line-clamp-2">${career.description}</p>
        
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-700">Salary Range:</span>
            <span class="text-sm text-gray-900 font-semibold">$${career.salary.min.toLocaleString()} - $${career.salary.max.toLocaleString()}</span>
          </div>
          
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-700">Growth Rate:</span>
            <span class="text-sm text-green-600 font-semibold">${career.growth}</span>
          </div>
          
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-700">Education:</span>
            <span class="text-sm text-gray-900">${career.education.substring(0, 30)}${career.education.length > 30 ? '...' : ''}</span>
          </div>
        </div>
        
        <div class="mt-4">
          <span class="text-sm font-medium text-gray-700">Top Skills:</span>
          <div class="flex flex-wrap gap-1 mt-2">
            ${career.skills.slice(0, 3).map(skill => 
              `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">${skill}</span>`
            ).join('')}
            ${career.skills.length > 3 ? 
              `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">+${career.skills.length - 3} more</span>` : ''}
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    `;
  }

  showCareerDetail(careerId) {
    const career = this.careers.find(c => c.id === careerId);
    if (!career) return;

    const modal = document.getElementById('careerModal');
    const content = document.getElementById('careerModalContent');
    
    content.innerHTML = `
      <div class="p-8">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">${career.title}</h2>
            <div class="flex gap-2">
              ${career.inDemand ? '<span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">High Demand</span>' : ''}
              ${career.remote ? '<span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Remote Available</span>' : ''}
            </div>
          </div>
          <button onclick="careerPaths.closeModal()" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <!-- Description -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
              <p class="text-gray-700 leading-relaxed">${career.description}</p>
            </div>

            <!-- Responsibilities -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
              <ul class="space-y-2">
                ${career.responsibilities.map(resp => 
                  `<li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-gray-700">${resp}</span>
                  </li>`
                ).join('')}
              </ul>
            </div>

            <!-- Career Path -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Career Progression</h3>
              <div class="space-y-2">
                ${career.careerPath.map((level, index) => 
                  `<div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      ${index + 1}
                    </div>
                    <span class="text-gray-700">${level}</span>
                  </div>`
                ).join('')}
              </div>
            </div>

            <!-- Skills -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Required Skills</h3>
              <div class="flex flex-wrap gap-2">
                ${career.skills.map(skill => 
                  `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">${skill}</span>`
                ).join('')}
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Salary Info -->
            <div class="bg-green-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Compensation</h3>
              <div class="space-y-3">
                <div>
                  <span class="text-sm font-medium text-gray-700">Salary Range</span>
                  <p class="text-lg font-bold text-green-600">$${career.salary.min.toLocaleString()} - $${career.salary.max.toLocaleString()}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-700">Median Salary</span>
                  <p class="text-lg font-bold text-gray-900">$${career.salary.median.toLocaleString()}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-700">Job Growth</span>
                  <p class="text-lg font-bold text-blue-600">${career.growth}</p>
                </div>
              </div>
            </div>

            <!-- Requirements -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
              <div class="space-y-3">
                <div>
                  <span class="text-sm font-medium text-gray-700">Education</span>
                  <p class="text-sm text-gray-900">${career.education}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-700">Experience</span>
                  <p class="text-sm text-gray-900">${career.experience}</p>
                </div>
              </div>
            </div>

            <!-- Top Companies -->
            <div class="bg-purple-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Top Employers</h3>
              <div class="space-y-2">
                ${career.companies.slice(0, 5).map(company => 
                  `<div class="text-sm text-gray-700">${company}</div>`
                ).join('')}
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Learning Path
              </button>
              <button class="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Similar Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeModal() {
    const modal = document.getElementById('careerModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  filterByCategory(category) {
    this.currentFilters.category = category;
    this.applyFilters();
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.remove('ring-2', 'ring-blue-500');
    });
    event.target.closest('.category-btn').classList.add('ring-2', 'ring-blue-500');
  }

  loadMore() {
    this.displayedCount += 8;
    this.renderCareers();
  }

  updateResultsCount() {
    const count = document.getElementById('resultsCount');
    const showing = Math.min(this.displayedCount, this.filteredCareers.length);
    count.textContent = `Showing ${showing} of ${this.filteredCareers.length} careers`;
  }
}

// Global functions
function filterByCategory(category) {
  careerPaths.filterByCategory(category);
}

// Initialize when page loads
const careerPaths = new CareerPathsExplorer();
