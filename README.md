# wollshare
A platform for resource sharing among students in Wollongong.

wollshare/
├── backend/                  # Backend services
│   ├── api/                  # Main backend service (NestJS)
│   │   ├── src/
│   │   │   ├── modules/      # Feature modules
│   │   │   │   ├── auth/     # User authentication
│   │   │   │   ├── users/    # User management
│   │   │   │   ├── marketplace/ # Marketplace for second-hand items
│   │   │   │   ├── jobs/     # Job posting and seeking
│   │   │   │   ├── rideshare/ # Ridesharing services
│   │   │   │   ├── housing/  # Housing information
│   │   │   │   └── notifications/ # Notification services
│   │   ├── common/           # Common utilities and middleware
│   │   ├── config/           # Configuration files
│   │   ├── main.ts           # Application entry point
│   │   └── app.module.ts     # Main application module
│   └── tests/                # Unit tests
├── ai/                       # AI services (FastAPI)
│   ├── app/
│   │   ├── routers/          # API routes
│   │   ├── services/         # Model services
│   │   ├── models/           # Recommendation and NLP models
│   │   └── main.py           # Application entry point
│   └── tests/                # Tests for AI services
│   └── README.md             # Backend service description
├── frontend/                 # Frontend services
│   ├── src/
│   │   ├── pages/            # Page routes (auto-generated by Next.js)
│   │   │   ├── index.tsx     # Home page
│   │   │   ├── marketplace.tsx # Marketplace page
│   │   │   ├── jobs.tsx      # Job posting and seeking page
│   │   │   ├── rideshare.tsx # Ridesharing page
│   │   │   ├── housing.tsx   # Housing page
│   │   │   └── profile.tsx   # User profile page
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.tsx    # Navigation bar
│   │   │   ├── Footer.tsx    # Footer
│   │   │   ├── Card.tsx      # Card component for items and jobs
│   │   │   └── ChatBox.tsx   # Chatbox component
│   │   ├── styles/           # Stylesheets
│   │   │   └── global.css
│   │   ├── contexts/         # React Contexts
│   │   ├── hooks/            # Custom Hooks
│   │   ├── utils/            # Utility functions
│   │   └── types/            # TypeScript types
│   └── README.md             # Frontend service description
├── shared/                   # Shared tools and libraries
│   ├── constants/            # Global constants
│   ├── utils/                # Shared utility functions
│   ├── interfaces/           # Shared interface definitions
│   ├── middlewares/          # Shared middleware (for backend)
│   └── README.md             # Shared library description
├── infra/                    # Infrastructure and DevOps configurations
│   ├── docker/               # Docker configurations
│   │   ├── backend.Dockerfile
│   │   ├── frontend.Dockerfile
│   │   └── docker-compose.yml
│   ├── kubernetes/           # Kubernetes configurations
│   ├── terraform/            # Terraform configurations
│   ├── ci-cd/                # CI/CD configurations
│   │   ├── github-actions/
│   │   │   └── deploy.yml
│   │   └── jenkins/          # Jenkins configurations
│   └── README.md             # Infrastructure description
├── docs/                     # Documentation
│   ├── requirements.md       # Project requirements documentation
│   ├── architecture.md       # System architecture design
│   ├── api_documentation.md  # API documentation (Swagger/Postman)
│   ├── setup_guide.md        # Environment setup guide
│   └── changelog.md          # Changelog
├── tests/                    # Tests
│   ├── integration/          # Integration tests
│   ├── e2e/                  # End-to-end tests
│   └── README.md             # Testing description
└── README.md                 # Project description
