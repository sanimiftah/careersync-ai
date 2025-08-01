// CareerSync AI - Advanced Career Assessment Engine

class CareerAssessment {
  constructor() {
    this.currentQuestion = 0;
    this.currentSection = 0;
    this.answers = {
      interests: [],
      skills: [],
      personality: [],
      values: []
    };
    this.assessmentData = this.initializeAssessmentData();
    this.careerDatabase = this.initializeCareerDatabase();
    this.init();
  }

  init() {
    console.log('CareerSync AI Assessment initialized');
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Add any global event listeners here
  }

  initializeAssessmentData() {
    return {
      sections: [
        {
          title: "Interests & Preferences",
          description: "Discover what motivates and excites you",
          icon: "🎯",
          questions: [
            {
              type: "rating",
              question: "How much do you enjoy working with technology and computers?",
              options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
              category: "technology"
            },
            {
              type: "rating",
              question: "How interested are you in helping and working with people?",
              options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
              category: "people"
            },
            {
              type: "rating",
              question: "How much do you enjoy creative and artistic activities?",
              options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
              category: "creative"
            },
            {
              type: "rating",
              question: "How interested are you in business and entrepreneurship?",
              options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
              category: "business"
            },
            {
              type: "rating",
              question: "How much do you enjoy analyzing data and solving problems?",
              options: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
              category: "analytical"
            },
            {
              type: "multiple",
              question: "Which work environments appeal to you most? (Select up to 3)",
              options: ["Remote/Work from home", "Office environment", "Outdoor settings", "Laboratory", "Hospital/Healthcare", "Classroom/Educational", "Workshop/Studio", "Travel frequently"],
              maxSelections: 3,
              category: "environment"
            }
          ]
        },
        {
          title: "Skills & Competencies",
          description: "Assess your current abilities and strengths",
          icon: "⚡",
          questions: [
            {
              type: "rating",
              question: "How would you rate your communication and presentation skills?",
              options: ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"],
              category: "communication"
            },
            {
              type: "rating",
              question: "How would you rate your problem-solving and critical thinking abilities?",
              options: ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"],
              category: "problemSolving"
            },
            {
              type: "rating",
              question: "How would you rate your leadership and team management skills?",
              options: ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"],
              category: "leadership"
            },
            {
              type: "rating",
              question: "How would you rate your technical/computer skills?",
              options: ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"],
              category: "technical"
            },
            {
              type: "multiple",
              question: "Which skills would you like to develop further? (Select up to 4)",
              options: ["Programming/Coding", "Data Analysis", "Project Management", "Digital Marketing", "Design", "Writing", "Public Speaking", "Financial Analysis", "Research", "Languages"],
              maxSelections: 4,
              category: "development"
            }
          ]
        },
        {
          title: "Personality Traits",
          description: "Understand your work style and preferences",
          icon: "🧠",
          questions: [
            {
              type: "choice",
              question: "You prefer to:",
              options: ["Work independently", "Work in teams"],
              category: "workStyle"
            },
            {
              type: "choice",
              question: "When making decisions, you tend to:",
              options: ["Rely on logic and data", "Trust your intuition and feelings"],
              category: "decisionMaking"
            },
            {
              type: "choice",
              question: "You are more comfortable with:",
              options: ["Routine and predictable tasks", "Variety and new challenges"],
              category: "changePreference"
            },
            {
              type: "choice",
              question: "In social situations, you tend to be:",
              options: ["More reserved and thoughtful", "More outgoing and energetic"],
              category: "socialStyle"
            },
            {
              type: "rating",
              question: "How important is work-life balance to you?",
              options: ["Not important", "Slightly important", "Moderately important", "Very important", "Extremely important"],
              category: "workLifeBalance"
            }
          ]
        },
        {
          title: "Career Goals & Values",
          description: "Define what success means to you",
          icon: "🎯",
          questions: [
            {
              type: "ranking",
              question: "Rank these career factors by importance to you (1 = most important):",
              options: ["High salary", "Job security", "Growth opportunities", "Work-life balance", "Making a difference", "Recognition"],
              category: "priorities"
            },
            {
              type: "rating",
              question: "How important is it for your work to have a positive social impact?",
              options: ["Not important", "Slightly important", "Moderately important", "Very important", "Extremely important"],
              category: "socialImpact"
            },
            {
              type: "choice",
              question: "Your ideal career timeline:",
              options: ["Quick entry into workforce", "Graduate school then career", "Extended education/training"],
              category: "timeline"
            },
            {
              type: "multiple",
              question: "Which industries interest you? (Select up to 5)",
              options: ["Technology", "Healthcare", "Education", "Finance", "Entertainment", "Non-profit", "Government", "Manufacturing", "Retail", "Consulting", "Research", "Real Estate"],
              maxSelections: 5,
              category: "industries"
            }
          ]
        }
      ]
    };
  }

  initializeCareerDatabase() {
    return {
      "Software Engineer": {
        match: { technology: 5, analytical: 5, problemSolving: 4, technical: 5 },
        salary: { min: 75000, max: 180000, median: 110000 },
        growth: "22%",
        description: "Design, develop, and maintain software applications and systems",
        skills: ["Programming", "Problem Solving", "System Design", "Testing"],
        education: "Bachelor's in Computer Science or related field"
      },
      "Data Scientist": {
        match: { analytical: 5, technology: 4, problemSolving: 5, technical: 4 },
        salary: { min: 85000, max: 200000, median: 125000 },
        growth: "31%",
        description: "Analyze complex data to help organizations make informed decisions",
        skills: ["Statistics", "Machine Learning", "Python/R", "Data Visualization"],
        education: "Bachelor's in Statistics, Math, or Computer Science"
      },
      "UX Designer": {
        match: { creative: 5, technology: 3, people: 4, problemSolving: 4 },
        salary: { min: 65000, max: 150000, median: 95000 },
        growth: "13%",
        description: "Design user-friendly interfaces and improve user experiences",
        skills: ["Design Thinking", "Prototyping", "User Research", "Visual Design"],
        education: "Bachelor's in Design, Psychology, or related field"
      },
      "Marketing Manager": {
        match: { business: 5, creative: 4, communication: 5, people: 4 },
        salary: { min: 55000, max: 140000, median: 85000 },
        growth: "10%",
        description: "Plan and execute marketing strategies to promote products/services",
        skills: ["Digital Marketing", "Analytics", "Communication", "Strategy"],
        education: "Bachelor's in Marketing, Business, or Communications"
      },
      "Healthcare Professional": {
        match: { people: 5, socialImpact: 5, problemSolving: 4, communication: 4 },
        salary: { min: 60000, max: 200000, median: 95000 },
        growth: "15%",
        description: "Provide medical care and improve patient health outcomes",
        skills: ["Medical Knowledge", "Patient Care", "Communication", "Problem Solving"],
        education: "Medical degree or healthcare certification"
      },
      "Financial Analyst": {
        match: { analytical: 5, business: 5, problemSolving: 4, technical: 3 },
        salary: { min: 60000, max: 150000, median: 85000 },
        growth: "8%",
        description: "Analyze financial data to guide investment and business decisions",
        skills: ["Financial Modeling", "Excel", "Data Analysis", "Presentation"],
        education: "Bachelor's in Finance, Economics, or Business"
      },
      "Teacher/Educator": {
        match: { people: 5, communication: 5, socialImpact: 5, creative: 3 },
        salary: { min: 40000, max: 80000, median: 55000 },
        growth: "5%",
        description: "Educate and inspire students to reach their potential",
        skills: ["Teaching", "Communication", "Curriculum Design", "Patience"],
        education: "Bachelor's in Education or subject area + teaching certification"
      },
      "Project Manager": {
        match: { leadership: 5, communication: 5, problemSolving: 4, business: 4 },
        salary: { min: 70000, max: 160000, median: 100000 },
        growth: "11%",
        description: "Lead teams and manage projects from conception to completion",
        skills: ["Leadership", "Planning", "Communication", "Risk Management"],
        education: "Bachelor's degree + project management certification"
      }
    };
  }

  startAssessment() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('assessmentContainer').classList.remove('hidden');
    this.showQuestion();
  }

  showQuestion() {
    const section = this.assessmentData.sections[this.currentSection];
    const question = section.questions[this.currentQuestion];
    
    // Update progress
    const totalQuestions = this.assessmentData.sections.reduce((sum, s) => sum + s.questions.length, 0);
    const currentQuestionNumber = this.getCurrentQuestionNumber();
    const progress = ((currentQuestionNumber - 1) / totalQuestions) * 100;
    
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}% Complete`;

    // Render question
    const container = document.getElementById('assessmentContainer');
    container.innerHTML = this.renderQuestion(section, question, currentQuestionNumber, totalQuestions);
  }

  getCurrentQuestionNumber() {
    let questionNumber = 1;
    for (let i = 0; i < this.currentSection; i++) {
      questionNumber += this.assessmentData.sections[i].questions.length;
    }
    return questionNumber + this.currentQuestion;
  }

  renderQuestion(section, question, questionNumber, totalQuestions) {
    const sectionProgress = `Question ${this.currentQuestion + 1} of ${section.questions.length} in "${section.title}"`;
    
    let optionsHTML = '';
    
    switch (question.type) {
      case 'rating':
        optionsHTML = question.options.map((option, index) => `
          <label class="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="radio" name="answer" value="${index}" class="mr-3 text-blue-600">
            <span class="font-medium">${option}</span>
          </label>
        `).join('');
        break;
        
      case 'choice':
        optionsHTML = question.options.map((option, index) => `
          <label class="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="radio" name="answer" value="${index}" class="mr-3 text-blue-600">
            <span class="font-medium">${option}</span>
          </label>
        `).join('');
        break;
        
      case 'multiple':
        optionsHTML = question.options.map((option, index) => `
          <label class="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" name="answer" value="${index}" class="mr-3 text-blue-600">
            <span class="font-medium">${option}</span>
          </label>
        `).join('');
        optionsHTML += `<p class="text-sm text-gray-600 mt-2">Select up to ${question.maxSelections} options</p>`;
        break;
        
      case 'ranking':
        optionsHTML = `
          <div class="space-y-3">
            <p class="text-sm text-gray-600 mb-4">Drag to reorder by importance (1 = most important)</p>
            <div id="rankingContainer" class="space-y-2">
              ${question.options.map((option, index) => `
                <div class="ranking-item p-4 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100 transition-colors" data-value="${index}">
                  <span class="ranking-number font-bold text-blue-600 mr-3">${index + 1}.</span>
                  <span class="font-medium">${option}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        break;
    }

    return `
      <div class="bg-white rounded-xl shadow-lg p-8">
        <div class="mb-6">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">${section.icon}</span>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">${section.title}</h3>
              <p class="text-sm text-gray-600">${sectionProgress}</p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">${question.question}</h2>
          <div class="space-y-3">
            ${optionsHTML}
          </div>
        </div>

        <div class="flex justify-between">
          <button onclick="assessment.previousQuestion()" 
                  class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors ${questionNumber === 1 ? 'invisible' : ''}">
            Previous
          </button>
          <button onclick="assessment.nextQuestion()" 
                  class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  id="nextButton">
            ${questionNumber === totalQuestions ? 'Complete Assessment' : 'Next Question'}
          </button>
        </div>
      </div>
    `;
  }

  nextQuestion() {
    // Validate and save answer
    if (!this.validateAndSaveAnswer()) {
      alert('Please answer the question before proceeding.');
      return;
    }

    // Move to next question
    this.currentQuestion++;
    
    // Check if we need to move to next section
    if (this.currentQuestion >= this.assessmentData.sections[this.currentSection].questions.length) {
      this.currentSection++;
      this.currentQuestion = 0;
    }

    // Check if assessment is complete
    if (this.currentSection >= this.assessmentData.sections.length) {
      this.completeAssessment();
    } else {
      this.showQuestion();
    }
  }

  previousQuestion() {
    // Move to previous question
    this.currentQuestion--;
    
    // Check if we need to move to previous section
    if (this.currentQuestion < 0) {
      this.currentSection--;
      if (this.currentSection >= 0) {
        this.currentQuestion = this.assessmentData.sections[this.currentSection].questions.length - 1;
      } else {
        this.currentSection = 0;
        this.currentQuestion = 0;
      }
    }

    this.showQuestion();
  }

  validateAndSaveAnswer() {
    const section = this.assessmentData.sections[this.currentSection];
    const question = section.questions[this.currentQuestion];
    const sectionKey = ['interests', 'skills', 'personality', 'values'][this.currentSection];

    let answer = null;

    switch (question.type) {
      case 'rating':
      case 'choice':
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) return false;
        answer = { category: question.category, value: parseInt(selected.value), type: question.type };
        break;
        
      case 'multiple':
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'));
        if (selectedOptions.length === 0) return false;
        if (question.maxSelections && selectedOptions.length > question.maxSelections) {
          alert(`Please select no more than ${question.maxSelections} options.`);
          return false;
        }
        answer = { 
          category: question.category, 
          value: selectedOptions.map(option => parseInt(option.value)),
          type: question.type
        };
        break;
        
      case 'ranking':
        const rankingItems = Array.from(document.querySelectorAll('.ranking-item'));
        answer = { 
          category: question.category, 
          value: rankingItems.map(item => parseInt(item.dataset.value)),
          type: question.type
        };
        break;
    }

    // Save answer
    this.answers[sectionKey].push(answer);
    return true;
  }

  completeAssessment() {
    // Calculate results
    const results = this.calculateResults();
    
    // Show results
    document.getElementById('assessmentContainer').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    // Update progress to 100%
    document.getElementById('progressBar').style.width = '100%';
    document.getElementById('progressText').textContent = '100% Complete';
    
    // Display results
    this.displayResults(results);
  }

  calculateResults() {
    const scores = {};
    
    // Calculate category scores
    this.answers.interests.forEach(answer => {
      if (!scores[answer.category]) scores[answer.category] = 0;
      scores[answer.category] += answer.value;
    });

    this.answers.skills.forEach(answer => {
      if (!scores[answer.category]) scores[answer.category] = 0;
      scores[answer.category] += answer.value;
    });

    // Calculate career matches
    const careerMatches = [];
    
    for (const [careerName, careerData] of Object.entries(this.careerDatabase)) {
      let matchScore = 0;
      let totalPossible = 0;
      
      for (const [category, weight] of Object.entries(careerData.match)) {
        if (scores[category]) {
          matchScore += (scores[category] / 5) * weight;
        }
        totalPossible += weight;
      }
      
      const matchPercentage = Math.round((matchScore / totalPossible) * 100);
      
      careerMatches.push({
        name: careerName,
        score: matchPercentage,
        data: careerData
      });
    }

    // Sort by match score
    careerMatches.sort((a, b) => b.score - a.score);

    return {
      topMatches: careerMatches.slice(0, 5),
      allMatches: careerMatches,
      scores: scores,
      personality: this.getPersonalityInsights(),
      recommendations: this.getRecommendations(careerMatches.slice(0, 3))
    };
  }

  getPersonalityInsights() {
    const personality = this.answers.personality;
    let insights = [];
    
    personality.forEach(answer => {
      switch (answer.category) {
        case 'workStyle':
          insights.push(answer.value === 0 ? 
            "You prefer working independently and value autonomy in your work." :
            "You thrive in collaborative environments and enjoy team dynamics.");
          break;
        case 'decisionMaking':
          insights.push(answer.value === 0 ? 
            "You make decisions based on logic and data analysis." :
            "You trust your intuition and consider emotional factors in decision-making.");
          break;
      }
    });
    
    return insights;
  }

  getRecommendations(topCareers) {
    const recommendations = [];
    
    topCareers.forEach(career => {
      recommendations.push({
        type: "skill_development",
        title: `Develop ${career.data.skills[0]} skills`,
        description: `Focus on building ${career.data.skills[0]} to excel in ${career.name}`,
        priority: "high"
      });
    });

    return recommendations;
  }

  displayResults(results) {
    const container = document.getElementById('resultsContent');
    
    container.innerHTML = `
      <div class="space-y-8">
        <!-- Top Career Matches -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Your Top Career Matches</h3>
          <div class="space-y-4">
            ${results.topMatches.map((match, index) => `
              <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-xl font-semibold text-gray-900">${index + 1}. ${match.name}</h4>
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">${match.score}% Match</span>
                </div>
                <p class="text-gray-600 mb-4">${match.data.description}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span class="font-medium text-gray-700">Salary Range:</span>
                    <p class="text-gray-600">$${match.data.salary.min.toLocaleString()} - $${match.data.salary.max.toLocaleString()}</p>
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">Growth Rate:</span>
                    <p class="text-gray-600">${match.data.growth}</p>
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">Education:</span>
                    <p class="text-gray-600">${match.data.education}</p>
                  </div>
                </div>
                <div class="mt-4">
                  <span class="font-medium text-gray-700">Key Skills:</span>
                  <div class="flex flex-wrap gap-2 mt-2">
                    ${match.data.skills.map(skill => `
                      <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${skill}</span>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Personality Insights -->
        <div class="bg-green-50 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Your Work Style</h3>
          <div class="space-y-3">
            ${results.personality.map(insight => `
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-gray-700">${insight}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Recommendations -->
        <div class="bg-yellow-50 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Recommended Next Steps</h3>
          <div class="space-y-3">
            ${results.recommendations.map(rec => `
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-900">${rec.title}</h4>
                  <p class="text-gray-700">${rec.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  downloadReport() {
    // Generate and download a PDF report
    alert('Report download feature will be implemented with a PDF generation library.');
  }

  retakeAssessment() {
    // Reset assessment
    this.currentQuestion = 0;
    this.currentSection = 0;
    this.answers = {
      interests: [],
      skills: [],
      personality: [],
      values: []
    };
    
    // Show welcome screen
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    
    // Reset progress
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressText').textContent = '0% Complete';
  }
}

// Global functions
function startAssessment() {
  assessment.startAssessment();
}

function goBack() {
  window.history.back();
}

// Initialize assessment when page loads
const assessment = new CareerAssessment();
