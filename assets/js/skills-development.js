// CareerSync AI - Skills Development System

class SkillsDevelopment {
  constructor() {
    this.skills = this.initializeSkillsDatabase();
    this.userSkills = this.loadUserSkills();
    this.activePaths = this.loadActivePaths();
    this.filteredSkills = [...this.skills];
    this.currentFilters = {
      category: '',
      difficulty: '',
      demand: ''
    };
    this.init();
  }

  init() {
    console.log('Skills Development System initialized');
    this.setupEventListeners();
    this.renderActivePaths();
    this.renderSkills();
    this.updateDashboardStats();
  }

  setupEventListeners() {
    // Filter dropdowns
    document.getElementById('difficultyFilter').addEventListener('change', (e) => {
      this.currentFilters.difficulty = e.target.value;
      this.applyFilters();
    });

    document.getElementById('demandFilter').addEventListener('change', (e) => {
      this.currentFilters.demand = e.target.value;
      this.applyFilters();
    });

    // Modal close functionality
    document.getElementById('skillModal').addEventListener('click', (e) => {
      if (e.target.id === 'skillModal') {
        this.closeModal();
      }
    });
  }

  initializeSkillsDatabase() {
    return [
      {
        id: 1,
        name: "JavaScript Programming",
        category: "technical",
        difficulty: "intermediate",
        demand: "high",
        description: "Master modern JavaScript programming including ES6+, async programming, and frameworks.",
        duration: "8-12 weeks",
        prerequisites: ["Basic HTML/CSS", "Programming Fundamentals"],
        learningPath: [
          { title: "JavaScript Fundamentals", duration: "2 weeks", status: "available" },
          { title: "DOM Manipulation", duration: "1 week", status: "available" },
          { title: "Async JavaScript", duration: "2 weeks", status: "locked" },
          { title: "Modern ES6+ Features", duration: "2 weeks", status: "locked" },
          { title: "JavaScript Frameworks", duration: "3 weeks", status: "locked" }
        ],
        skills: ["Variables & Functions", "DOM API", "Promises", "Modules", "Testing"],
        careerRelevance: ["Software Engineer", "Frontend Developer", "Full Stack Developer"],
        averageSalary: "$85,000",
        jobGrowth: "22%",
        providers: ["Codecademy", "freeCodeCamp", "MDN", "JavaScript.info"],
        certification: "JavaScript Developer Certificate",
        inDemand: true,
        trending: true
      },
      {
        id: 2,
        name: "Data Analysis with Python",
        category: "technical",
        difficulty: "intermediate",
        demand: "high",
        description: "Learn to analyze data using Python, pandas, numpy, and visualization libraries.",
        duration: "10-14 weeks",
        prerequisites: ["Basic Python", "Statistics Fundamentals"],
        learningPath: [
          { title: "Python for Data Science", duration: "2 weeks", status: "available" },
          { title: "Pandas & NumPy", duration: "3 weeks", status: "available" },
          { title: "Data Visualization", duration: "2 weeks", status: "locked" },
          { title: "Statistical Analysis", duration: "3 weeks", status: "locked" },
          { title: "Machine Learning Basics", duration: "4 weeks", status: "locked" }
        ],
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Statistical Analysis"],
        careerRelevance: ["Data Scientist", "Data Analyst", "Business Analyst"],
        averageSalary: "$95,000",
        jobGrowth: "31%",
        providers: ["Coursera", "edX", "DataCamp", "Kaggle Learn"],
        certification: "Data Analysis Professional Certificate",
        inDemand: true,
        trending: true
      },
      {
        id: 3,
        name: "Digital Marketing",
        category: "business",
        difficulty: "beginner",
        demand: "high",
        description: "Master digital marketing strategies including SEO, social media, and content marketing.",
        duration: "6-8 weeks",
        prerequisites: ["Basic Computer Skills"],
        learningPath: [
          { title: "Digital Marketing Foundations", duration: "1 week", status: "available" },
          { title: "Search Engine Optimization", duration: "2 weeks", status: "available" },
          { title: "Social Media Marketing", duration: "2 weeks", status: "locked" },
          { title: "Content Marketing", duration: "1 week", status: "locked" },
          { title: "Analytics & Measurement", duration: "2 weeks", status: "locked" }
        ],
        skills: ["SEO", "Social Media", "Content Strategy", "Google Analytics", "PPC"],
        careerRelevance: ["Digital Marketer", "Marketing Manager", "Content Strategist"],
        averageSalary: "$65,000",
        jobGrowth: "15%",
        providers: ["Google", "HubSpot", "Facebook Blueprint", "Udemy"],
        certification: "Google Digital Marketing Certificate",
        inDemand: true,
        trending: false
      },
      {
        id: 4,
        name: "UX/UI Design",
        category: "creative",
        difficulty: "intermediate",
        demand: "high",
        description: "Learn user experience and interface design principles, tools, and methodologies.",
        duration: "12-16 weeks",
        prerequisites: ["Design Thinking", "Basic Computer Skills"],
        learningPath: [
          { title: "Design Fundamentals", duration: "2 weeks", status: "available" },
          { title: "User Research Methods", duration: "3 weeks", status: "available" },
          { title: "Wireframing & Prototyping", duration: "3 weeks", status: "locked" },
          { title: "Visual Design", duration: "4 weeks", status: "locked" },
          { title: "Usability Testing", duration: "4 weeks", status: "locked" }
        ],
        skills: ["User Research", "Figma", "Prototyping", "Visual Design", "Usability Testing"],
        careerRelevance: ["UX Designer", "UI Designer", "Product Designer"],
        averageSalary: "$85,000",
        jobGrowth: "13%",
        providers: ["Coursera", "Udacity", "Figma", "Nielsen Norman Group"],
        certification: "UX Design Professional Certificate",
        inDemand: true,
        trending: true
      },
      {
        id: 5,
        name: "Public Speaking",
        category: "communication",
        difficulty: "beginner",
        demand: "medium",
        description: "Develop confidence and skills for effective public speaking and presentations.",
        duration: "4-6 weeks",
        prerequisites: ["None"],
        learningPath: [
          { title: "Overcoming Speaking Anxiety", duration: "1 week", status: "available" },
          { title: "Speech Structure & Content", duration: "1 week", status: "available" },
          { title: "Delivery Techniques", duration: "1 week", status: "locked" },
          { title: "Visual Aids & Technology", duration: "1 week", status: "locked" },
          { title: "Advanced Presentation Skills", duration: "2 weeks", status: "locked" }
        ],
        skills: ["Presentation Skills", "Body Language", "Voice Control", "Audience Engagement", "Storytelling"],
        careerRelevance: ["Manager", "Sales Representative", "Trainer", "Executive"],
        averageSalary: "$75,000",
        jobGrowth: "8%",
        providers: ["Toastmasters", "Coursera", "LinkedIn Learning", "MasterClass"],
        certification: "Professional Speaking Certificate",
        inDemand: false,
        trending: false
      },
      {
        id: 6,
        name: "Project Management",
        category: "business",
        difficulty: "intermediate",
        demand: "high",
        description: "Learn project management methodologies, tools, and best practices for successful project delivery.",
        duration: "8-10 weeks",
        prerequisites: ["Work Experience", "Basic Business Knowledge"],
        learningPath: [
          { title: "Project Management Fundamentals", duration: "2 weeks", status: "available" },
          { title: "Agile & Scrum Methodology", duration: "2 weeks", status: "available" },
          { title: "Risk Management", duration: "2 weeks", status: "locked" },
          { title: "Stakeholder Management", duration: "2 weeks", status: "locked" },
          { title: "PMP Exam Preparation", duration: "2 weeks", status: "locked" }
        ],
        skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Management", "Leadership"],
        careerRelevance: ["Project Manager", "Scrum Master", "Program Manager"],
        averageSalary: "$90,000",
        jobGrowth: "11%",
        providers: ["PMI", "Coursera", "edX", "Udemy"],
        certification: "PMP Certification",
        inDemand: true,
        trending: false
      },
      {
        id: 7,
        name: "Cybersecurity Fundamentals",
        category: "technical",
        difficulty: "intermediate",
        demand: "high",
        description: "Learn essential cybersecurity concepts, threat analysis, and security best practices.",
        duration: "10-12 weeks",
        prerequisites: ["Networking Basics", "Operating Systems"],
        learningPath: [
          { title: "Security Fundamentals", duration: "2 weeks", status: "available" },
          { title: "Network Security", duration: "3 weeks", status: "available" },
          { title: "Threat Analysis", duration: "2 weeks", status: "locked" },
          { title: "Incident Response", duration: "2 weeks", status: "locked" },
          { title: "Security Tools & Practices", duration: "3 weeks", status: "locked" }
        ],
        skills: ["Network Security", "Threat Analysis", "Incident Response", "Security Tools", "Risk Assessment"],
        careerRelevance: ["Cybersecurity Analyst", "Security Engineer", "Information Security Manager"],
        averageSalary: "$105,000",
        jobGrowth: "35%",
        providers: ["Cybrary", "Coursera", "SANS", "CompTIA"],
        certification: "CompTIA Security+ Certification",
        inDemand: true,
        trending: true
      },
      {
        id: 8,
        name: "Creative Writing",
        category: "creative",
        difficulty: "beginner",
        demand: "medium",
        description: "Develop writing skills for various formats including fiction, non-fiction, and content creation.",
        duration: "6-8 weeks",
        prerequisites: ["Basic Writing Skills"],
        learningPath: [
          { title: "Writing Fundamentals", duration: "1 week", status: "available" },
          { title: "Story Structure & Plot", duration: "2 weeks", status: "available" },
          { title: "Character Development", duration: "2 weeks", status: "locked" },
          { title: "Dialogue & Voice", duration: "1 week", status: "locked" },
          { title: "Editing & Publishing", duration: "2 weeks", status: "locked" }
        ],
        skills: ["Storytelling", "Character Development", "Dialogue Writing", "Editing", "Publishing"],
        careerRelevance: ["Content Writer", "Copywriter", "Author", "Journalist"],
        averageSalary: "$55,000",
        jobGrowth: "9%",
        providers: ["MasterClass", "Coursera", "Writer's Digest", "Udemy"],
        certification: "Creative Writing Certificate",
        inDemand: false,
        trending: false
      }
    ];
  }

  loadUserSkills() {
    // In a real app, this would come from a backend/local storage
    return {
      assessed: 12,
      strong: 8,
      improving: 4,
      completed: 3
    };
  }

  loadActivePaths() {
    // In a real app, this would come from user's learning progress
    return [
      {
        id: 1,
        name: "JavaScript Programming",
        progress: 65,
        currentModule: "Async JavaScript",
        timeRemaining: "3 weeks",
        lastAccessed: "2 days ago"
      },
      {
        id: 4,
        name: "UX/UI Design",
        progress: 40,
        currentModule: "User Research Methods",
        timeRemaining: "8 weeks",
        lastAccessed: "1 week ago"
      }
    ];
  }

  applyFilters() {
    this.filteredSkills = this.skills.filter(skill => {
      const matchesCategory = !this.currentFilters.category || skill.category === this.currentFilters.category;
      const matchesDifficulty = !this.currentFilters.difficulty || skill.difficulty === this.currentFilters.difficulty;
      const matchesDemand = !this.currentFilters.demand || skill.demand === this.currentFilters.demand;

      return matchesCategory && matchesDifficulty && matchesDemand;
    });

    this.renderSkills();
  }

  renderActivePaths() {
    const container = document.getElementById('activePaths');
    
    if (this.activePaths.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-gray-500">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <p>No active learning paths. Start learning a new skill to see your progress here!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.activePaths.map(path => `
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-lg font-semibold text-gray-900">${path.name}</h4>
            <p class="text-sm text-gray-600">Current: ${path.currentModule}</p>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${path.progress}% Complete</span>
        </div>
        
        <div class="mb-4">
          <div class="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>${path.progress}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: ${path.progress}%"></div>
          </div>
        </div>
        
        <div class="flex justify-between items-center text-sm text-gray-600">
          <span>Time remaining: ${path.timeRemaining}</span>
          <span>Last accessed: ${path.lastAccessed}</span>
        </div>
        
        <div class="mt-4 flex gap-2">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Continue Learning
          </button>
          <button class="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    `).join('');
  }

  renderSkills() {
    const grid = document.getElementById('skillsGrid');
    
    grid.innerHTML = this.filteredSkills.map(skill => this.createSkillCard(skill)).join('');
  }

  createSkillCard(skill) {
    const demandColor = {
      'high': 'bg-green-100 text-green-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-gray-100 text-gray-800'
    };

    const difficultyColor = {
      'beginner': 'bg-blue-100 text-blue-800',
      'intermediate': 'bg-purple-100 text-purple-800',
      'advanced': 'bg-red-100 text-red-800'
    };

    const trendingBadge = skill.trending ? 
      '<span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">🔥 Trending</span>' : '';

    return `
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
           onclick="skillsDev.showSkillDetail(${skill.id})">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-bold text-gray-900">${skill.name}</h3>
          <div class="flex flex-col gap-1">
            <span class="${demandColor[skill.demand]} text-xs px-2 py-1 rounded-full">${skill.demand.toUpperCase()} Demand</span>
            ${trendingBadge}
          </div>
        </div>
        
        <p class="text-gray-600 mb-4 text-sm">${skill.description}</p>
        
        <div class="space-y-2 mb-4">
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-700">Difficulty:</span>
            <span class="${difficultyColor[skill.difficulty]} px-2 py-1 rounded-full text-xs">${skill.difficulty.toUpperCase()}</span>
          </div>
          
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-700">Duration:</span>
            <span class="text-gray-900 font-medium">${skill.duration}</span>
          </div>
          
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-700">Avg Salary:</span>
            <span class="text-green-600 font-semibold">${skill.averageSalary}</span>
          </div>
        </div>
        
        <div class="mb-4">
          <span class="text-sm font-medium text-gray-700">Career Paths:</span>
          <div class="flex flex-wrap gap-1 mt-1">
            ${skill.careerRelevance.slice(0, 2).map(career => 
              `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">${career}</span>`
            ).join('')}
            ${skill.careerRelevance.length > 2 ? 
              `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">+${skill.careerRelevance.length - 2}</span>` : ''}
          </div>
        </div>
        
        <div class="pt-4 border-t border-gray-200">
          <button class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    `;
  }

  showSkillDetail(skillId) {
    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return;

    const modal = document.getElementById('skillModal');
    const content = document.getElementById('skillModalContent');
    
    content.innerHTML = `
      <div class="p-8">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">${skill.name}</h2>
            <div class="flex gap-2">
              <span class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">${skill.difficulty.toUpperCase()}</span>
              <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">${skill.demand.toUpperCase()} Demand</span>
              ${skill.trending ? '<span class="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">🔥 Trending</span>' : ''}
            </div>
          </div>
          <button onclick="skillsDev.closeModal()" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <!-- Description -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
              <p class="text-gray-700 leading-relaxed">${skill.description}</p>
            </div>

            <!-- Learning Path -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Learning Path</h3>
              <div class="space-y-3">
                ${skill.learningPath.map((module, index) => {
                  const statusIcon = module.status === 'available' ? 
                    '<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' :
                    '<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>';
                  
                  return `
                    <div class="flex items-center p-4 border border-gray-200 rounded-lg ${module.status === 'available' ? 'bg-green-50' : 'bg-gray-50'}">
                      <div class="flex items-center justify-center w-8 h-8 rounded-full ${module.status === 'available' ? 'bg-green-100' : 'bg-gray-200'} mr-4">
                        ${statusIcon}
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900">${module.title}</h4>
                        <p class="text-sm text-gray-600">${module.duration}</p>
                      </div>
                      ${module.status === 'available' ? 
                        '<button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">Start</button>' :
                        '<span class="text-sm text-gray-500">Locked</span>'
                      }
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Skills You'll Learn -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Skills You'll Learn</h3>
              <div class="flex flex-wrap gap-2">
                ${skill.skills.map(skillItem => 
                  `<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">${skillItem}</span>`
                ).join('')}
              </div>
            </div>

            <!-- Prerequisites -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Prerequisites</h3>
              <ul class="space-y-2">
                ${skill.prerequisites.map(prereq => 
                  `<li class="flex items-center">
                    <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-gray-700">${prereq}</span>
                  </li>`
                ).join('')}
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Career Impact -->
            <div class="bg-green-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Career Impact</h3>
              <div class="space-y-3">
                <div>
                  <span class="text-sm font-medium text-gray-700">Average Salary</span>
                  <p class="text-lg font-bold text-green-600">${skill.averageSalary}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-700">Job Growth</span>
                  <p class="text-lg font-bold text-blue-600">${skill.jobGrowth}</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-700">Duration</span>
                  <p class="text-lg font-bold text-gray-900">${skill.duration}</p>
                </div>
              </div>
            </div>

            <!-- Career Paths -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Career Paths</h3>
              <div class="space-y-2">
                ${skill.careerRelevance.map(career => 
                  `<div class="text-sm text-gray-700">${career}</div>`
                ).join('')}
              </div>
            </div>

            <!-- Learning Providers -->
            <div class="bg-purple-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Learning Providers</h3>
              <div class="space-y-2">
                ${skill.providers.map(provider => 
                  `<div class="text-sm text-gray-700">${provider}</div>`
                ).join('')}
              </div>
            </div>

            <!-- Certification -->
            <div class="bg-yellow-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
              <p class="text-sm text-gray-700">${skill.certification}</p>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Learning Path
              </button>
              <button class="w-full bg-white text-purple-600 border border-purple-600 py-3 px-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Add to Wishlist
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
    const modal = document.getElementById('skillModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  filterSkills(category) {
    this.currentFilters.category = this.currentFilters.category === category ? '' : category;
    this.applyFilters();
    
    // Update active category button
    document.querySelectorAll('.skill-category-btn').forEach(btn => {
      btn.classList.remove('ring-2', 'ring-purple-500');
    });
    
    if (this.currentFilters.category) {
      event.target.closest('.skill-category-btn').classList.add('ring-2', 'ring-purple-500');
    }
  }

  updateDashboardStats() {
    document.getElementById('skillsAssessed').textContent = this.userSkills.assessed;
    document.getElementById('strongSkills').textContent = this.userSkills.strong;
    document.getElementById('improvingSkills').textContent = this.userSkills.improving;
    document.getElementById('completedCourses').textContent = this.userSkills.completed;
  }
}

// Global functions
function filterSkills(category) {
  skillsDev.filterSkills(category);
}

function startSkillAssessment() {
  alert('Skill Assessment feature will be integrated with the career assessment system.');
}

// Initialize when page loads
const skillsDev = new SkillsDevelopment();
