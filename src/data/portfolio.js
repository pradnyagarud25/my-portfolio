// ============ EDIT ONLY THIS FILE to update your portfolio ============
export const profile = {
  name: 'Pradnya Garud',
  role: 'Web Developer / PHP Developer',
  experience: '2.8+ years',
  summary:
    'I build and maintain web applications with PHP, Laravel, CodeIgniter, Angular and ASP.NET MVC, backed by MS SQL Server and MySQL. I also work on SharePoint integration, API integration, testing and production support.',
  about: [
    'I am a full stack web developer with 2.8+ years of experience in PHP and web development. My work covers CRM and document management systems, SQL optimization, API integration, debugging, deployment and production support.',
    'I have a Master’s degree in Computer Science and a strong grounding in SDLC and OOPS concepts. I am comfortable moving between front end and back end, and I take part in requirement analysis, testing and deployment.',
  ],
  learning:
    'I keep learning by working across stacks: PHP frameworks, Angular, React and .NET MVC. I am currently building more with React and Vite.',
  resumeFile: '/Pradnya_Garud_Resume.pdf', // file lives in /public
}

export const contact = {
  email: 'pradnyagarud25@gmail.com',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-id'  (leave '' to hide)
  github: '',   // e.g. 'https://github.com/your-username'      (leave '' to hide)
  phone: '',    // leave '' to keep your number private
  showLocation: true,
  location: 'Pune, Maharashtra, India',
}

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'Angular', 'React'],
  Backend: ['PHP', 'ASP.NET', '.NET MVC', 'Entity Framework', 'REST API', 'Web API', 'SharePoint Integration'],
  Database: ['MS SQL Server', 'MySQL'],
  Frameworks: ['Laravel', 'CodeIgniter', 'Angular', 'React', '.NET MVC', 'WordPress'],
  'Tools & Deployment': ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman', 'IIS', 'Vercel'],
}

// Add a project: copy one block and fill it in. Leave github/demo '' to hide the button.
export const projects = [
  {
    name: 'CRM / Telecalling System',
    description: 'A CRM for managing leads and telecalling activity.',
    tech: ['PHP', 'CodeIgniter', 'Angular', 'SQL Server'],
    role: 'Built CRM modules and SQL reports.',
    features: ['Lead management', 'Follow-ups and appointment reminders', 'Call history and customer interaction tracking', 'Reports on leads, follow-ups and telecalling activity'],
    github: '', demo: '',
  },
  {
    name: 'Business Partner Document Management System',
    description: 'A portal for vendors and business partners to submit documents for verification and approval.',
    tech: ['Angular', 'PHP', 'CodeIgniter', 'SQL Server', 'SharePoint'],
    role: 'Developed modules, integrated APIs and SharePoint, and handled production support.',
    features: ['Document upload and verification', 'Approval workflow and status tracking', 'Secure storage and user access management', 'SharePoint integration'],
    github: '', demo: '',
  },
  {
    name: 'Employee Management System (EMS)',
    description: 'A web app to manage employee records.',
    tech: ['PHP', 'jQuery', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    role: 'Developed the application.',
    features: ['Employee details, attendance, leave and salary records', 'Role-based login for Admin and Employees', 'AJAX features'],
    github: '', demo: '',
  },
]

// Work showcase: generic placeholders. Fill in details you are allowed to share.
export const showcase = [
  'Gift Declaration', 'V-Improve', 'SGA', 'FIP', 'R&R', 'ZIEP', 'HR / AI Assistance', 'NED Gate Pass',
].map((name) => ({ name, description: 'Web application work. Details can be added here.', tech: [], github: '', demo: '' }))

export const experience = [
  {
    title: 'PHP / Angular Developer',
    company: 'Microlink Infrastructure Management Pvt Ltd, Mumbai (Work From Home)',
    period: 'April 2026 – Present',
    points: [
      'Develop and maintain enterprise web applications using PHP, Laravel, CodeIgniter, Angular, ASP.NET MVC and MS SQL Server.',
      'Build responsive interfaces with Angular, JavaScript, jQuery, HTML, CSS and Bootstrap, with dynamic features using AJAX.',
      'Integrate SharePoint lists and APIs to fetch and manage application data.',
      'Write and optimize SQL queries and database operations.',
      'Take part in requirement analysis, testing, UAT deployment and verification, bug fixing and production support.',
    ],
  },
  {
    title: 'PHP / Web Developer',
    company: 'Cloud Console Design | Development | Promotion, Pune',
    period: 'Jan 2024 – March 2026',
    points: [
      'Designed and developed responsive websites and web-based business applications using PHP, MySQL, SQL Server, HTML, CSS, Bootstrap and jQuery.',
      'Handled the project life cycle: requirement analysis, development, database design, testing and deployment.',
      'Collaborated with cross-functional teams on front-end and back-end development.',
      'Fixed cross-browser and cross-device issues.',
    ],
  },
]

export const qa = [
  'Functional Testing', 'QC Testing', 'UAT Testing', 'Workflow Testing',
  'Test Case Preparation', 'Bug Identification', 'Regression Testing', 'Verification of Fixes',
]

export const education = [
  { name: 'M.Sc. Computer Science, Savitribai Phule Pune University', year: '2024', score: '71.95%' },
  { name: 'B.Sc. Computer Science, Savitribai Phule Pune University', year: '2022', score: '80.59%' },
]

// Add certificates, training and achievements here.
export const certificates = [
  { title: 'Full Stack .NET Developer', issuer: 'CIIT Institute, Hadapsar, Pune', year: '', link: '' },
]
