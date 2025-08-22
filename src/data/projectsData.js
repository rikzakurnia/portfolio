// src/data/projectsData.js
const projectsData = [
  // 1. FLAGSHIP PROJECT (PLACEHOLDER)
  {
    id: 0,
    title: 'Smart Photo Storage (In Development)',
    image: 'https://storage.googleapis.com/bucket-for-ppl-rikza/smart-photo.png',
    description: 'End-to-end photo management system designed to enable natural language search using machine learning. Built with a microservice architecture and asynchronous communication to support scalability and future ML integration.',
    highlights: [
      'Built MVP with authentication, photo upload, and gallery interface.',
      'Containerized all services with Docker for consistent deployment.',
      'Designed asynchronous processing pipeline using RabbitMQ.',
      'Integrated CLIP-based embedding service with Qdrant for semantic search.',
      'Next : Deployment on Kubernetes.'
    ],
    technologies: ['Vue.js', 'Go (Golang)', 'Python', 'Docker', 'RabbitMQ', 'MongoDB', 'Qdrant'],
    category: 'Full Stack',
    isFlagship: true,
    demoLink: "https://youtu.be/GJICKqlk3X4",
    repoLink:"https://github.com/Smart-Photo-Storage-Project/docs",
  },

  // 2. HIGHLIGHTED PROJECTS
  {
    id: 2,
    title: 'Rempahpedia - Spice Recognition Application',
    image: 'https://storage.googleapis.com/bucket-for-ppl-rikza/rempahpedia.png',
    description: 'Developed as part of the Bangkit Academy final project, Rempahpedia is an application that recognizes various spices using machine learning models. My role is on the backend development',
    highlights: [
      'Developed application logic using Express.js',
      'Ensured secure API access with Firebase authentication',
      'Stored application data on Cloud SQL',
      'Deployed ML models on cloud services for scalability',
    ],
    technologies: ['Express.js', 'Firebase', 'Cloud SQL', 'GCP'],
    category: 'highlighted',
    isFlagship: false,
    demoLink: "https://www.youtube.com/watch?v=fEXY0inw7Sc&ab_channel=Ruzain&t=10m48s", 
    repoLink: 'https://github.com/orgs/RempahPedia/repositories',
  },
  {
    id: 5,
    title: 'FarmasiCare – Hospital Supply Management',
    image: 'https://storage.googleapis.com/bucket-for-ppl-rikza/farmasicare.png',
    description: 'A group project for a college course aimed at developing a hospital supply management app based on the client\'s request.',
    highlights: [
      'Configured CI/CD for automated deployment processes',
      'Data storage using PostgreSQL',
      'Server deployment on Google Cloud Instances',
    ],
    technologies: ['Django', 'PostgreSQL', 'GCP', 'CI/CD'],
    category: 'highlighted',
    isFlagship: false,
    demoLink: "https://www.youtube.com/watch?v=WIBEd2Mo2u8&ab_channel=ReyhanVivaldi", 
    repoLink: null,
  },
  {
    id: 6,
    title: 'Gacha-as-a-Service',
    image: 'https://storage.googleapis.com/bucket-for-ppl-rikza/gacha-saas.png',
    description: 'A group project for a college course aimed at developing a multi-tenant SaaS that allows each user to manage their own gacha system. My role on this project is to deploy the product on scalable infrastructure',
    highlights: [
      'Service deployment using Google Cloud Run',
      'Database replication management for high availability',
      'Load balancer configuration for traffic distribution',
    ],
    technologies: ['Go (Golang)', 'Google Cloud Run', 'Load Balancing'],
    category: 'highlighted',
    isFlagship: false,
    demoLink: "https://www.youtube.com/watch?v=oixK2LAW6e4&t=250s&ab_channel=Ruzain&t=4m10s", 
    repoLink: null,
  },

  // 3. OTHER PROJECTS
  {
    id: 1,
    title: 'Sigerisata',
    image: null,
    description: 'A tourism application to help tourists in Lampung province find destinations based on a selected region.',
    highlights: [
      'Full-stack application with Django',
      'Region-based destination filtering',
    ],
    technologies: ['Django', 'PostgreSQL', 'Tailwind CSS'],
    category: 'other',
    isFlagship: false,
    demoLink: null, 
    repoLink: 'https://github.com/rikzakurnia/Sigerisata',
  },
  {
    id: 3,
    title: 'LaundryEase App',
    image: null,
    description: 'A laundry status tracking application. My role was to create the order detail, search, and filter features.',
    highlights: [
      'Contributed to both Frontend and Backend',
      'Implemented complex search & filter functionality',
      'Collaborated in a developer team',
    ],
    technologies: ['Next.js', 'Nest.js', 'TypeScript'],
    category: 'other',
    isFlagship: false,
    demoLink: null, 
    repoLink: 'https://github.com/eddoog/ease',
  },
  {
    id: 4,
    title: 'SeKelas (Auth Service)',
    image: null,
    description: 'A class management application, where I created the authentication service using JWT.',
    highlights: [
      'Implemented security with JSON Web Tokens (JWT)',
      'Backend developed with Java & Spring Boot',
    ],
    technologies: ['Spring Boot', 'PostgreSQL', 'Java'],
    category: 'other',
    isFlagship: false,
    demoLink: null, 
    repoLink: 'https://github.com/rikzakurnia/sekelas-account-copy/tree/main',
  },
];

export default projectsData;