## Project Structure

consultationpi/backend/
│
├── src/
│   ├── config/              # Application configurations (DB, env)
│   ├── routes/              # Express route definitions
│   ├── controllers/         # HTTP request handlers
│   ├── services/            # Core business logic
│   ├── repositories/        # Database queries
│   ├── models/              # TypeScript interfaces / schemas
│   ├── middlewares/         # Custom middleware (auth, errors)
│   ├── utils/               # Helper functions (JWT, hash, etc.)
│   ├── app.ts               # App setup
│   └── server.ts            # Server entry point
│
├── .env                     # Environment variables
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
└── README.md                # You're here!
