/**
 * HAKA SOLUTIONS CMS & Recruitment Data Store (Local Storage Backend)
 * Provides persistent data models with default enterprise mock data and full CRUD.
 */
var HakaStore = (() => {
  const STORAGE_KEY = 'haka_cms_data_v1';
  const AUTH_KEY = 'haka_cms_auth_user_v1';

  const defaultData = {
    // 1. Roles & Users (Role-Based Access Control)
    users: [
      { id: 'usr-1', name: 'Zahir Khan', email: 'admin@hakasolutions.com', role: 'Super Admin', pass: 'admin123', avatar: 'ZK', status: 'Active' },
      { id: 'usr-2', name: 'Priya Sharma', email: 'hr@hakasolutions.com', role: 'Recruitment Manager', pass: 'recruiter123', avatar: 'PS', status: 'Active' },
      { id: 'usr-3', name: 'Marcus Vance', email: 'editor@hakasolutions.com', role: 'Content Editor', pass: 'editor123', avatar: 'MV', status: 'Active' }
    ],
    // Permissions config by role
    rolePermissions: {
      'Super Admin': ['website_content', 'services', 'jobs', 'blog', 'case_studies', 'team', 'contact', 'metrics', 'recruitment', 'users'],
      'Recruitment Manager': ['jobs', 'recruitment', 'team'],
      'Content Editor': ['website_content', 'services', 'blog', 'case_studies', 'team', 'metrics']
    },

    // 2. Website Content & Homepage Metrics
    metrics: [
      { id: 'm-1', label: 'Uptime SLA Reliability', value: '99.9%', trend: '+0.1% vs target', category: 'Infrastructure' },
      { id: 'm-2', label: 'Processes Optimized', value: '450+', trend: 'Structured delivery', category: 'Operations' },
      { id: 'm-3', label: 'Enterprise Uptime Record', value: '24/7', trend: 'Continuous support', category: 'Support' },
      { id: 'm-4', label: 'Verified Client Retention', value: '98%', trend: 'Multi-year contracts', category: 'Relationship' }
    ],
    homepageContent: {
      heroHeading: 'Building digital solutions that move businesses forward.',
      heroSubheading: 'HAKA SOLUTIONS is a technology and digital solutions company focused on reliable technology, digital operations and business support.',
      aboutText: 'We work with organizations that need dependable systems behind their day-to-day work — not additional complexity.',
      tagline: 'Practical by design. Engineered for reliability.'
    },

    // 3. Services CMS
    services: [
      { id: 'srv-1', title: 'Data & Digital Operations', category: 'Operations', status: 'Active', desc: 'Structured data intake, automated verification, documentation hygiene, and quality compliance for enterprise workflows.', deliverables: 'Data intake & ETL, QA protocols, Compliance logs' },
      { id: 'srv-2', title: 'Technology & Digital Services', category: 'Engineering', status: 'Active', desc: 'Modern web development, cloud software engineering, scalable microservices, and high-performance databases.', deliverables: 'Full-stack engineering, API design, DevOps pipelines' },
      { id: 'srv-3', title: 'Business Process Support', category: 'Support', status: 'Active', desc: 'Front-line process stewardship, SLA-governed support channels, and reliable incident turnaround.', deliverables: 'Dedicated shift support, Standard Operating Procedures, Issue resolution' },
      { id: 'srv-4', title: 'Intelligent Automation & AI', category: 'AI & Automation', status: 'Active', desc: 'Custom RPA bot implementation, workflow routing rules, and enterprise-grade generative AI assistant agents.', deliverables: 'Process mapping, Automation bots, LLM workflows' }
    ],

    // 4. Jobs & Vacancies
    jobs: [
      { id: 'job-1', reqId: 'REQ-0104', title: 'Full-Stack Cloud Engineer', dept: 'Engineering', location: 'Pallikonda Office / Hybrid', type: 'Full-Time', exp: '2 - 4 Years', status: 'Open', applicantsCount: 4, desc: 'Architect, build, and optimize scalable enterprise web services and database workflows.' },
      { id: 'job-2', reqId: 'REQ-0105', title: 'Data & Digital Operations Analyst', dept: 'Digital Operations', location: 'Pallikonda Office', type: 'Full-Time', exp: '1 - 3 Years', status: 'Open', applicantsCount: 6, desc: 'Execute structured data intake, automated verification, and documentation hygiene.' },
      { id: 'job-3', reqId: 'REQ-0106', title: 'AI & Automation Specialist', dept: 'AI & Automation', location: 'Pallikonda Office / Remote', type: 'Full-Time', exp: '2 - 5 Years', status: 'Open', applicantsCount: 3, desc: 'Build intelligent RPA bots, automated workflow triggers, and fine-tuned LLM agents.' },
      { id: 'job-4', reqId: 'REQ-0107', title: 'Business Process Support Lead', dept: 'Business Support', location: 'Pallikonda Office', type: 'Full-Time', exp: '3 - 6 Years', status: 'Open', applicantsCount: 2, desc: 'Lead front-line process support teams, enforce SLA compliance, and author SOPs.' }
    ],

    // 5. Recruitment Candidates Pipeline
    // Statuses: 'New' -> 'Under Review' -> 'Shortlisted' -> 'Interview' -> 'Selected' / 'Rejected'
    candidates: [
      {
        id: 'cand-1',
        fullName: 'Arjun Swaminathan',
        email: 'arjun.swami@gmail.com',
        phone: '+91 98401 23456',
        location: 'Vellore, Tamil Nadu',
        position: 'Full-Stack Cloud Engineer',
        experience: '3.5 Years',
        education: 'B.Tech Computer Science, Anna University',
        resumeName: 'Arjun_Swaminathan_CloudResume.pdf',
        resumeSize: '1.4 MB',
        resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
        message: 'Experienced in Node.js, TypeScript, PostgreSQL and AWS architecture. Excited to contribute to HAKA core engineering.',
        status: 'Interview',
        appliedAt: '2026-10-18T14:32:00Z',
        rating: 5,
        notes: 'Exceptional system design knowledge. Passed Round 1 Technical on Oct 21.'
      },
      {
        id: 'cand-2',
        fullName: 'Divya Ranganathan',
        email: 'divya.ranga@outlook.com',
        phone: '+91 97890 87654',
        location: 'Pallikonda, Tamil Nadu',
        position: 'Data & Digital Operations Analyst',
        experience: '2 Years',
        education: 'B.Sc Information Technology',
        resumeName: 'Divya_R_Operations_Profile.pdf',
        resumeSize: '890 KB',
        resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
        message: 'Skilled in Excel formulas, ETL workflows, data validation hygiene, and shift compliance reports.',
        status: 'Shortlisted',
        appliedAt: '2026-10-19T09:15:00Z',
        rating: 4,
        notes: 'Very high accuracy scores on the spreadsheet sample assessment.'
      },
      {
        id: 'cand-3',
        fullName: 'Karthik Balakrishnan',
        email: 'karthik.b.ai@gmail.com',
        phone: '+91 98842 55123',
        location: 'Chennai, Tamil Nadu',
        position: 'AI & Automation Specialist',
        experience: '4 Years',
        education: 'M.Tech Artificial Intelligence',
        resumeName: 'Karthik_Balakrishnan_AI_CV.pdf',
        resumeSize: '2.1 MB',
        resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
        message: 'Built custom RPA workflows, LangChain automations, and document intelligence extractors.',
        status: 'Under Review',
        appliedAt: '2026-10-21T11:45:00Z',
        rating: 4,
        notes: 'Reviewing portfolio repositories on GitHub.'
      },
      {
        id: 'cand-4',
        fullName: 'Sneha Mohan',
        email: 'sneha.mohan@yahoo.com',
        phone: '+91 94441 99882',
        location: 'Bengaluru, Karnataka',
        position: 'Business Process Support Lead',
        experience: '5 Years',
        education: 'MBA Operations Management',
        resumeName: 'Sneha_Mohan_BPO_Lead.docx',
        resumeSize: '650 KB',
        resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
        message: 'Experienced team lead overseeing 24/7 SLA deliverables, ticketing workflows and client satisfaction.',
        status: 'Selected',
        appliedAt: '2026-10-12T16:20:00Z',
        rating: 5,
        notes: 'Offer letter signed. Target joining date Nov 15, 2026.'
      },
      {
        id: 'cand-5',
        fullName: 'Rahul Verma',
        email: 'rahul.verma.dev@gmail.com',
        phone: '+91 91234 56780',
        location: 'Vellore, Tamil Nadu',
        position: 'Full-Stack Cloud Engineer',
        experience: '1 Year',
        education: 'B.E Computer Science',
        resumeName: 'Rahul_Verma_Resume.pdf',
        resumeSize: '1.1 MB',
        resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
        message: 'Looking for a challenging role in full-stack engineering and cloud deployment.',
        status: 'New',
        appliedAt: '2026-10-23T08:10:00Z',
        rating: 3,
        notes: 'New submission from careers portal today.'
      }
    ],

    // 6. Blog Posts
    posts: [
      { id: 'post-1', title: 'Why Reliability Outperforms Complexity in Digital Systems', slug: 'why-reliability-outperforms-complexity', author: 'HAKA Technical Team', date: 'Oct 15, 2026', category: 'Technology', status: 'Published', summary: 'How modern businesses often suffer from over-engineering and why disciplined architecture wins.' },
      { id: 'post-2', title: 'Standardizing Front-Line Operations for 99.9% SLA Delivery', slug: 'standardizing-front-line-operations', author: 'Operations Desk', date: 'Oct 02, 2026', category: 'Operations', status: 'Published', summary: 'A practical framework for removing operational bottlenecks and redundant handoffs.' },
      { id: 'post-3', title: 'Integrating Pragmatic Automation without Technical Debt', slug: 'integrating-pragmatic-automation', author: 'Solutions Architecture', date: 'Sep 24, 2026', category: 'Automation', status: 'Draft', summary: 'Choosing the right automation tools for immediate ROI instead of expensive bloat.' }
    ],

    // 7. Case Studies
    caseStudies: [
      { id: 'cs-1', client: 'Fintech Processing Hub', title: 'Automating High-Volume Financial Reconciliation', sector: 'Finance', status: 'Published', outcome: '64% reduction in manual matching time, 0% error audit record' },
      { id: 'cs-2', client: 'Global Supply Chain Group', title: 'Enterprise Document Intelligence & Verification', sector: 'Logistics', status: 'Published', outcome: 'Real-time telemetry and 4x faster document ingestion' },
      { id: 'cs-3', client: 'Healthcare Diagnostic Network', title: 'Zero-Downtime Patient Record Pipeline', sector: 'Healthcare', status: 'Draft', outcome: 'Continuous availability under rigorous HIPAA data governance' }
    ],

    // 8. Team Members
    team: [
      { id: 'tm-1', name: 'Zahir Khan', role: 'Founder & Principal Technologist', dept: 'Executive', status: 'Active', bio: 'Directing architectural strategy, cloud resilience, and client operations.' },
      { id: 'tm-2', name: 'R. Soundararajan', role: 'Head of Digital Operations', dept: 'Operations', status: 'Active', bio: 'Overseeing data intake hygiene, client SLAs, and operational governance.' },
      { id: 'tm-3', name: 'Dr. Kavitha Menon', role: 'Solutions Architect', dept: 'Technology', status: 'Active', bio: 'Specialist in distributed microservices, fault tolerance, and security.' }
    ],

    // 9. Contact Info & Global Settings
    contactInfo: {
      businessEmail: 'enquiries@hakasolutions.com',
      supportEmail: 'support@hakasolutions.com',
      phone: '+91 (0) 416 224 8900',
      addressLine1: 'HAKA Technology Park, NH 48 Corridor',
      addressLine2: 'Pallikonda, Vellore District, Tamil Nadu 635809',
      businessHours: 'Monday – Friday: 09:00 AM – 06:00 PM IST',
      supportHours: '24/7 Dedicated Operational Standby for Enterprise Contracts'
    }
  };

  // Init storage if not existing
  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
    // Set default session if none
    if (!sessionStorage.getItem(AUTH_KEY)) {
      // Default logged in as Super Admin for demonstration convenience
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(defaultData.users[0]));
    }
  }

  function get() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : defaultData;
    } catch (e) {
      console.error('Error reading HakaStore:', e);
      return defaultData;
    }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('haka-data-updated'));
    } catch (e) {
      console.error('Error saving HakaStore:', e);
    }
  }

  // Auth Helpers
  function getCurrentUser() {
    try {
      const u = sessionStorage.getItem(AUTH_KEY);
      return u ? JSON.parse(u) : defaultData.users[0];
    } catch (e) {
      return defaultData.users[0];
    }
  }

  function setCurrentUser(user) {
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('haka-auth-changed'));
  }

  function hasPermission(moduleKey) {
    const user = getCurrentUser();
    if (!user) return false;
    const store = get();
    const permissions = (store.rolePermissions && store.rolePermissions[user.role]) || [];
    return permissions.includes(moduleKey);
  }

  init();

  window.HakaStore = {
    get,
    save,
    getCurrentUser,
    setCurrentUser,
    hasPermission,
    resetToDefault: () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
      window.dispatchEvent(new CustomEvent('haka-data-updated'));
    }
  };

  return window.HakaStore;
})();
