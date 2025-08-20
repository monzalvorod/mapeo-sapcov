// SAPCOV File Management System - App.js

// User roles and navigation configuration
const USER_ROLES = {
  COURT: 'court',
  UNICEF_ADMIN: 'unicef_admin',
  ODI_ADMIN: 'odi_admin'
};

// Navigation configuration based on user roles
const NAVIGATION = {
  [USER_ROLES.COURT]: [
    { id: 'workflow', label: 'Task Workflow', icon: 'fa-tasks', url: 'pages/court/workflow.html' },
    { id: 'progress', label: 'National Progress', icon: 'fa-chart-line', url: 'pages/court/progress.html' },
    { id: 'profile', label: 'Court Profile', icon: 'fa-user', url: 'pages/court/profile.html' }
  ],
  [USER_ROLES.UNICEF_ADMIN]: [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt', url: 'pages/admin/dashboard.html' },
    { id: 'files', label: 'File Management', icon: 'fa-folder-open', url: 'pages/admin/files.html' },
    { id: 'progress', label: 'National Progress', icon: 'fa-chart-line', url: 'pages/admin/progress.html' },
    { id: 'courts', label: 'Court Management', icon: 'fa-gavel', url: 'pages/admin/courts.html' }
  ],
  [USER_ROLES.ODI_ADMIN]: [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt', url: 'pages/admin/dashboard.html' },
    { id: 'files', label: 'File Management', icon: 'fa-folder-open', url: 'pages/admin/files.html' },
    { id: 'progress', label: 'National Progress', icon: 'fa-chart-line', url: 'pages/admin/progress.html' },
    { id: 'courts', label: 'Court Management', icon: 'fa-gavel', url: 'pages/admin/courts.html' }
  ]
};

// Workflow steps configuration
const WORKFLOW_STEPS = [
  {
    id: 1,
    title: 'Project Presentation',
    tasks: [
      { id: '1.1', title: 'Online meeting schedule', required: true },
      { id: '1.2', title: 'General', required: true },
      { id: '1.3', title: 'Court', required: true },
      { id: '1.4', title: 'Checklist of authorities attending', required: true },
      { id: '1.5', title: 'Prepare the meeting', required: true },
      { id: '1.6', title: 'Meeting', required: true },
      { id: '1.7', title: 'Next steps agreement', required: true }
    ]
  },
  {
    id: 2,
    title: 'Scouting checklist resources',
    tasks: [
      { id: '2.1', title: 'Scouting resources online', required: true },
      { id: '2.2', title: 'Onsite scouting resources meetings', required: true },
      { id: '2.3', title: 'Assessment of resources & needs', required: true },
      { id: '2.4', title: 'Court rooms building calender', required: true },
      { id: '2.5', title: 'Budgeting plan', required: true }
    ]
  },
  {
    id: 3,
    title: 'Signing agreement and work plan',
    tasks: [
      { id: '3.1', title: 'Proposal basic agreement', required: true },
      { id: '3.2', title: 'Administive process', required: true },
      { id: '3.3', title: 'Approvement of agreement', required: true }
    ]
  },
  {
    id: 4,
    title: 'Adapting court rooms for children',
    tasks: [
      { id: '4.1', title: 'Meetings/monitoring/solving questions', required: true },
      { id: '4.2', title: 'Technological operational simulation preparations', required: true },
      { id: '4.3', title: 'Approvement', required: true }
    ]
  },
  {
    id: 5,
    title: 'Training',
    tasks: [
      { id: '5.1', title: 'Preparation online meeting', required: true },
      { id: '5.2', title: 'Call for mandatory authorities', required: true },
      { id: '5.3', title: 'Confirmation of 5.3', required: true },
      { id: '5.4', title: 'Training', required: true },
      { id: '5.5', title: 'Stimulation', required: true },
      { id: '5.6', title: 'Official presentation', required: true }
    ]
  },
  {
    id: 6,
    title: 'Monitoring',
    tasks: [
      { id: '6.1', title: 'Contact psychologist', required: true },
      { id: '6.2', title: 'Meeting methodology', required: true },
      { id: '6.3', title: 'Monitoring (10 meetings)', required: true },
      { id: '6.4', title: 'Adjusting', required: true },
      { id: '6.5', title: 'Follow up meetings for 1 year', required: true },
      { id: '6.6', title: 'Recap', required: true }
    ]
  },
  {
    id: 7,
    title: 'Mandatory',
    tasks: [
      { id: '7.1', title: 'Mandatory tasks', required: true }
    ]
  },
  {
    id: 8,
    title: 'Database for evaluation',
    tasks: [
      { id: '8.1', title: 'Database evaluation', required: true }
    ]
  }
];

// Fake data for progress visualization
const STATES = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
  "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", 
  "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", 
  "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", 
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const generateRandomProgress = () => {
  return STATES.map(state => {
    // Random progress between 1-8 (workflow steps)
    const completedStep = Math.floor(Math.random() * 8) + 1;
    
    // For the current step, generate random task completion
    let stepProgress = {};
    
    WORKFLOW_STEPS.forEach((step, index) => {
      const stepId = index + 1;
      
      if (stepId < completedStep) {
        // Steps before current are 100% complete
        stepProgress[stepId] = 100;
      } else if (stepId === completedStep) {
        // Current step has random progress
        const taskCount = WORKFLOW_STEPS[index].tasks.length;
        const completedTasks = Math.floor(Math.random() * taskCount);
        stepProgress[stepId] = Math.round((completedTasks / taskCount) * 100);
      } else {
        // Future steps have 0% progress
        stepProgress[stepId] = 0;
      }
    });
    
    return {
      state: state,
      currentStep: completedStep,
      stepProgress: stepProgress,
      overall: Math.round((completedStep - 1 + stepProgress[completedStep]/100) / 8 * 100)
    };
  });
};

// Application state
let currentUser = null;
let stateProgress = generateRandomProgress();

// DOM Elements
const contentFrame = document.getElementById('contentFrame');
const navTabs = document.getElementById('navTabs');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');
const mainNav = document.getElementById('mainNav');

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Check if user is logged in (from localStorage in this prototype)
  const savedUser = localStorage.getItem('currentUser');
  
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    loadUserInterface();
  } else {
    // User is not logged in, show login page (already set in index.html)
    mainNav.classList.add('hidden');
  }
  
  // Listen for messages from iframe
  window.addEventListener('message', handleIframeMessage);
  
  // Add logout event listener
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
});

// Handle messages from iframes
function handleIframeMessage(event) {
  const { type, data } = event.data;
  
  switch (type) {
    case 'LOGIN_SUCCESS':
      currentUser = data.user;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      loadUserInterface();
      break;
      
    case 'NAVIGATE':
      navigateToPage(data.url);
      break;
      
    case 'PROGRESS_UPDATE':
      // In a real app, this would update the database
      console.log('Progress updated:', data);
      break;
      
    default:
      console.log('Unknown message type:', type);
  }
}

// Load the user interface based on user role
function loadUserInterface() {
  // Show user info
  userInfo.classList.remove('hidden');
  userName.textContent = currentUser.name;
  
  // Show navigation
  mainNav.classList.remove('hidden');
  
  // Build navigation tabs
  buildNavigation();
  
  // Navigate to default page based on role
  const defaultNav = NAVIGATION[currentUser.role][0];
  navigateToPage(defaultNav.url);
}

// Build navigation tabs based on user role
function buildNavigation() {
  navTabs.innerHTML = '';
  
  const navigation = NAVIGATION[currentUser.role] || [];
  
  navigation.forEach(item => {
    const li = document.createElement('li');
    li.className = 'nav-tab text-gray-700 font-medium';
    li.dataset.target = item.url;
    li.innerHTML = `<i class="fas ${item.icon} mr-2"></i>${item.label}`;
    
    li.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked tab
      li.classList.add('active');
      
      // Navigate to page
      navigateToPage(item.url);
    });
    
    navTabs.appendChild(li);
  });
  
  // Set first tab as active
  const firstTab = navTabs.querySelector('.nav-tab');
  if (firstTab) {
    firstTab.classList.add('active');
  }
}

// Navigate to a page in the iframe
function navigateToPage(url) {
  contentFrame.src = url;
  
  // Update active tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.dataset.target === url) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// Handle logout
function handleLogout() {
  localStorage.removeItem('currentUser');
  currentUser = null;
  
  // Hide user info and navigation
  userInfo.classList.add('hidden');
  mainNav.classList.add('hidden');
  
  // Navigate to login page
  navigateToPage('pages/login.html');
}

// Export functions and data for access from iframes
window.appAPI = {
  getUserData: () => currentUser,
  getWorkflowSteps: () => WORKFLOW_STEPS,
  getStateProgress: () => stateProgress,
  updateProgress: (stateId, stepId, taskId, completed) => {
    // This would update the database in a real application
    console.log('Progress update:', { stateId, stepId, taskId, completed });
  }
}; 