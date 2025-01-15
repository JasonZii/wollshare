backend/                  # Backend services
├── api/                  # Main backend service (NestJS)
│   ├── src/
│   │   ├── modules/      # Feature modules
│   │   │   ├── auth/     # User authentication
│   │   │   ├── users/    # User management
│   │   │   ├── marketplace/ # Marketplace for second-hand items
│   │   │   ├── jobs/     # Job posting and seeking
│   │   │   ├── rideshare/ # Ridesharing services
│   │   │   ├── housing/  # Housing information
│   │   │   └── notifications/ # Notification services
│   ├── common/           # Common utilities and middleware
│   ├── config/           # Configuration files
│   ├── main.ts           # Application entry point
│   └── app.module.ts     # Main application module
└── tests/                # Unit tests
ai/                       # AI services (FastAPI)
├── app/
│   ├── routers/          # API routes
│   ├── services/         # Model services
│   ├── models/           # Recommendation and NLP models
│   └── main.py           # Application entry point
└── tests/                # Tests for AI services
└── README.md             # Backend service description