🔐 Node.js Auth & Admin API
A simple and practical Node.js + Express + MongoDB backend that handles user authentication, JWT-based authorization, admin user management, and password reset.
Built as a learning project, but structured like a real-world backend.
✨ Features
User register & login
JWT authentication
Get logged-in user (/me)
Role-based access (user / admin)
Admin CRUD for users
Forgot & reset password

🛠 Tech Stack
Node.js
Express
MongoDB (Mongoose)
JWT
bcrypt

▶️ Run Locally
npm install
npm run dev

Create a .env file:
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/user_auth

JWT_SECRET=your_secret_key

🔐 API Overview
Auth

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
POST /api/auth/forgot-password
POST /api/auth/reset-password/:token

Admin (JWT + admin role required)

POST /api/admin/users
GET /api/admin/users
PUT /api/admin/users/:id/role
DELETE /api/admin/users/:id

Auth Header
Authorization: Bearer <JWT_TOKEN>

💡 Why this project?
To understand how authentication works behind the scenes — not just login, but roles, security, and real admin features.

👤 Author

Sujal Patel
