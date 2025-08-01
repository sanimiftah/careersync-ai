// CareerSync AI - Main JavaScript File

// Global State Management
const CareerSync = {
  currentUser: null,
  userType: null,
  authModal: null,
  mobileMenu: null,
  
  // Initialize the application
  init() {
    this.setupEventListeners();
    this.checkAuthState();
    this.initializeModals();
    this.setupMobileMenu();
    console.log('CareerSync AI initialized successfully');
  },
  
  // Setup event listeners
  setupEventListeners() {
    // Page load animations
    window.addEventListener('load', this.animateOnLoad);
    
    // Scroll animations
    window.addEventListener('scroll', this.handleScroll);
    
    // Form submissions
    document.addEventListener('submit', this.handleFormSubmission);
    
    // Click events
    document.addEventListener('click', this.handleGlobalClicks);
  },
  
  // Check if user is already authenticated
  checkAuthState() {
    const userData = localStorage.getItem('careersync_user');
    if (userData) {
      this.currentUser = JSON.parse(userData);
      this.userType = this.currentUser.type;
      this.updateUIForAuthenticatedUser();
    }
  },
  
  // Initialize modals
  initializeModals() {
    this.authModal = document.getElementById('authModal');
  },
  
  // Setup mobile menu
  setupMobileMenu() {
    this.mobileMenu = document.getElementById('mobileMenu');
  },
  
  // Handle page load animations
  animateOnLoad() {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fadeIn');
      }, index * 100);
    });
  },
  
  // Handle scroll animations and effects
  handleScroll() {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('nav');
    
    // Navbar background on scroll
    if (scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
      const elementTop = el.offsetTop;
      const elementHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (scrollY > elementTop - windowHeight + elementHeight / 2) {
        el.classList.add('animate-fadeIn');
      }
    });
  },
  
  // Handle global click events
  handleGlobalClicks(event) {
    const target = event.target;
    
    // Close modal when clicking outside
    if (target === this.authModal) {
      this.hideAuthModal();
    }
    
    // Close mobile menu when clicking outside
    if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
      this.closeMobileMenu();
    }
  },
  
  // Handle form submissions
  handleFormSubmission(event) {
    const form = event.target;
    
    if (form.classList.contains('auth-form')) {
      event.preventDefault();
      this.processAuthForm(form);
    }
    
    if (form.classList.contains('profile-form')) {
      event.preventDefault();
      this.processProfileForm(form);
    }
  },
  
  // Update UI for authenticated users
  updateUIForAuthenticatedUser() {
    const signInButton = document.querySelector('[onclick="showLoginModal()"]');
    if (signInButton) {
      signInButton.innerHTML = `Dashboard`;
      signInButton.onclick = () => this.goToDashboard();
    }
  }
};

// User Type Selection
function selectUserType(type) {
  CareerSync.userType = type;
  showRegistrationForm(type);
}

// Authentication Modal Functions
function showLoginModal() {
  const modal = document.getElementById('authModal');
  const content = document.getElementById('authContent');
  
  content.innerHTML = `
    <div class="space-y-6">
      <div class="text-center">
        <p class="text-gray-600">Sign in to your account or create a new one</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button onclick="showSignInForm()" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Sign In
        </button>
        <button onclick="showUserTypeSelection()" class="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Register
        </button>
      </div>
      
      <div class="text-center">
        <p class="text-sm text-gray-500">
          New to CareerSync AI? 
          <button onclick="showUserTypeSelection()" class="text-blue-600 hover:text-blue-700 font-medium">
            Choose your path
          </button>
        </p>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function hideAuthModal() {
  const modal = document.getElementById('authModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function showUserTypeSelection() {
  const content = document.getElementById('authContent');
  content.innerHTML = `
    <div class="space-y-6">
      <div class="text-center">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Choose Your Path</h3>
        <p class="text-gray-600">Select the option that best describes you</p>
      </div>
      
      <div class="space-y-3">
        <button onclick="showRegistrationForm('student')" class="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">I'm a Student</h4>
              <p class="text-sm text-gray-600">Explore career paths and find opportunities</p>
            </div>
          </div>
        </button>
        
        <button onclick="showRegistrationForm('career_seeker')" class="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">I'm Job Seeking</h4>
              <p class="text-sm text-gray-600">Find your next career opportunity</p>
            </div>
          </div>
        </button>
        
        <button onclick="showRegistrationForm('hr')" class="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">I'm Hiring</h4>
              <p class="text-sm text-gray-600">Discover and recruit top talent</p>
            </div>
          </div>
        </button>
      </div>
      
      <div class="text-center">
        <button onclick="showLoginModal()" class="text-sm text-gray-500 hover:text-gray-700">
          Already have an account? Sign in
        </button>
      </div>
    </div>
  `;
}

function showRegistrationForm(userType) {
  const content = document.getElementById('authContent');
  const userTypeConfig = {
    student: {
      title: 'Student Registration',
      color: 'green',
      fields: ['university', 'major', 'graduationYear', 'interests']
    },
    career_seeker: {
      title: 'Career Seeker Registration',
      color: 'blue',
      fields: ['currentRole', 'experience', 'desiredRole', 'skills']
    },
    hr: {
      title: 'HR Professional Registration',
      color: 'purple',
      fields: ['company', 'position', 'industry', 'companySize']
    }
  };
  
  const config = userTypeConfig[userType];
  
  content.innerHTML = `
    <div class="space-y-6">
      <div class="text-center">
        <h3 class="text-xl font-bold text-gray-900 mb-2">${config.title}</h3>
        <p class="text-gray-600">Create your account to get started</p>
      </div>
      
      <form class="auth-form space-y-4" data-user-type="${userType}">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">First Name</label>
            <input type="text" name="firstName" required class="form-input w-full" placeholder="Enter your first name">
          </div>
          <div>
            <label class="form-label">Last Name</label>
            <input type="text" name="lastName" required class="form-input w-full" placeholder="Enter your last name">
          </div>
        </div>
        
        <div>
          <label class="form-label">Email Address</label>
          <input type="email" name="email" required class="form-input w-full" placeholder="Enter your email">
        </div>
        
        <div>
          <label class="form-label">Password</label>
          <input type="password" name="password" required class="form-input w-full" placeholder="Create a password">
        </div>
        
        ${generateSpecificFields(userType, config.fields)}
        
        <div class="flex items-center">
          <input type="checkbox" id="terms" name="terms" required class="mr-2">
          <label for="terms" class="text-sm text-gray-600">
            I agree to the <a href="#" class="text-${config.color}-600 hover:text-${config.color}-700">Terms of Service</a> and 
            <a href="#" class="text-${config.color}-600 hover:text-${config.color}-700">Privacy Policy</a>
          </label>
        </div>
        
        <button type="submit" class="w-full bg-${config.color}-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-${config.color}-700 transition-colors">
          Create Account
        </button>
      </form>
      
      <div class="text-center">
        <button onclick="showLoginModal()" class="text-sm text-gray-500 hover:text-gray-700">
          Already have an account? Sign in
        </button>
      </div>
    </div>
  `;
}

function generateSpecificFields(userType, fields) {
  const fieldTemplates = {
    university: '<div><label class="form-label">University</label><input type="text" name="university" class="form-input w-full" placeholder="Your university name"></div>',
    major: '<div><label class="form-label">Major/Field of Study</label><input type="text" name="major" class="form-input w-full" placeholder="Your major"></div>',
    graduationYear: '<div><label class="form-label">Expected Graduation Year</label><select name="graduationYear" class="form-input w-full"><option value="">Select year</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option></select></div>',
    interests: '<div><label class="form-label">Career Interests</label><input type="text" name="interests" class="form-input w-full" placeholder="e.g., Technology, Marketing, Finance"></div>',
    currentRole: '<div><label class="form-label">Current Role</label><input type="text" name="currentRole" class="form-input w-full" placeholder="Your current position"></div>',
    experience: '<div><label class="form-label">Years of Experience</label><select name="experience" class="form-input w-full"><option value="">Select experience</option><option value="0-1">0-1 years</option><option value="2-5">2-5 years</option><option value="6-10">6-10 years</option><option value="10+">10+ years</option></select></div>',
    desiredRole: '<div><label class="form-label">Desired Role</label><input type="text" name="desiredRole" class="form-input w-full" placeholder="Role you\'re seeking"></div>',
    skills: '<div><label class="form-label">Key Skills</label><input type="text" name="skills" class="form-input w-full" placeholder="e.g., JavaScript, Project Management"></div>',
    company: '<div><label class="form-label">Company</label><input type="text" name="company" class="form-input w-full" placeholder="Your company name"></div>',
    position: '<div><label class="form-label">Position</label><input type="text" name="position" class="form-input w-full" placeholder="Your job title"></div>',
    industry: '<div><label class="form-label">Industry</label><input type="text" name="industry" class="form-input w-full" placeholder="Your industry"></div>',
    companySize: '<div><label class="form-label">Company Size</label><select name="companySize" class="form-input w-full"><option value="">Select size</option><option value="1-10">1-10 employees</option><option value="11-50">11-50 employees</option><option value="51-200">51-200 employees</option><option value="201-1000">201-1000 employees</option><option value="1000+">1000+ employees</option></select></div>'
  };
  
  return fields.map(field => fieldTemplates[field]).join('');
}

function showSignInForm() {
  const content = document.getElementById('authContent');
  content.innerHTML = `
    <div class="space-y-6">
      <div class="text-center">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Welcome Back</h3>
        <p class="text-gray-600">Sign in to your CareerSync AI account</p>
      </div>
      
      <form class="auth-form space-y-4" data-action="signin">
        <div>
          <label class="form-label">Email Address</label>
          <input type="email" name="email" required class="form-input w-full" placeholder="Enter your email">
        </div>
        
        <div>
          <label class="form-label">Password</label>
          <input type="password" name="password" required class="form-input w-full" placeholder="Enter your password">
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input type="checkbox" id="remember" name="remember" class="mr-2">
            <label for="remember" class="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#" class="text-sm text-blue-600 hover:text-blue-700">Forgot password?</a>
        </div>
        
        <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </form>
      
      <div class="text-center">
        <button onclick="showUserTypeSelection()" class="text-sm text-gray-500 hover:text-gray-700">
          Don't have an account? Register
        </button>
      </div>
    </div>
  `;
}

// Mobile Menu Functions
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// Form Processing
CareerSync.processAuthForm = function(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const action = form.dataset.action;
  const userType = form.dataset.userType;
  
  if (action === 'signin') {
    this.processSignIn(data);
  } else if (userType) {
    this.processRegistration(data, userType);
  }
};

CareerSync.processSignIn = function(data) {
  // Simulate sign in process
  const users = JSON.parse(localStorage.getItem('careersync_users') || '[]');
  const user = users.find(u => u.email === data.email && u.password === data.password);
  
  if (user) {
    this.currentUser = user;
    this.userType = user.type;
    localStorage.setItem('careersync_user', JSON.stringify(user));
    this.updateUIForAuthenticatedUser();
    this.hideAuthModal();
    this.showSuccessMessage('Welcome back!');
    setTimeout(() => this.goToDashboard(), 1500);
  } else {
    this.showErrorMessage('Invalid email or password');
  }
};

CareerSync.processRegistration = function(data, userType) {
  // Create user object
  const user = {
    id: Date.now().toString(),
    type: userType,
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    createdAt: new Date().toISOString(),
    profile: { ...data }
  };
  
  // Save to localStorage
  const users = JSON.parse(localStorage.getItem('careersync_users') || '[]');
  users.push(user);
  localStorage.setItem('careersync_users', JSON.stringify(users));
  
  // Set current user
  this.currentUser = user;
  this.userType = userType;
  localStorage.setItem('careersync_user', JSON.stringify(user));
  
  this.updateUIForAuthenticatedUser();
  this.hideAuthModal();
  this.showSuccessMessage('Account created successfully!');
  setTimeout(() => this.goToDashboard(), 1500);
};

// Navigation Functions
CareerSync.goToDashboard = function() {
  if (!this.currentUser) {
    showLoginModal();
    return;
  }
  
  const dashboardUrls = {
    student: 'pages/student-dashboard.html',
    career_seeker: 'pages/career-dashboard.html',
    hr: 'pages/hr-dashboard.html'
  };
  
  window.location.href = dashboardUrls[this.userType] || 'pages/student-dashboard.html';
};

// Utility Functions
CareerSync.showSuccessMessage = function(message) {
  this.showNotification(message, 'success');
};

CareerSync.showErrorMessage = function(message) {
  this.showNotification(message, 'error');
};

CareerSync.showNotification = function(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;
  
  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white'
  };
  
  notification.className += ` ${colors[type]}`;
  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  CareerSync.init();
});

// Export for use in other files
window.CareerSync = CareerSync;

// Direct navigation functions for landing page
function goToStudentDashboard() {
  window.location.href = 'pages/student-dashboard.html';
}

function goToCareerDashboard() {
  window.location.href = 'pages/career-dashboard.html';
}

function goToHRDashboard() {
  window.location.href = 'pages/hr-dashboard.html';
}
