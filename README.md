<<<<<<< HEAD
<<<<<<< HEAD
User Authentication System (Node.js & MongoDB)
📌 Project Overview

This project is a User Authentication System built using Node.js, Express.js, and MongoDB.
It provides secure authentication features such as user registration, login, password hashing, and JWT-based authorization.

The system follows RESTful architecture and can be easily integrated with frontend applications like React, Flutter, or any mobile/web app.

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Atlas / Local)

Authentication: JWT (JSON Web Token)

Password Security: bcrypt

Environment Variables: dotenv

API Testing: Postman

✨ Features

User Registration

User Login

Password Encryption using bcrypt

JWT Token Generation

Protected Routes using Middleware

Input Validation

Centralized Error Handling

RESTful Architecture

📂 Project Structure
user-auth-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/user-auth-system.git
cd user-auth-system

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4️⃣ Run the Server
npm start


or (for development)

npm run dev


Server will start at:

http://localhost:5000

🔐 Authentication Flow

User submits credentials

Password is securely hashed and stored

JWT token is generated on successful authentication

Token is used to access protected resources

Middleware validates token for every protected request

🧪 Testing

Use Postman or Thunder Client

Verify authentication flow

Test token validation and error responses

🚀 Future Enhancements

Refresh Tokens

Email Verification

Forgot / Reset Password

Role-based Access Control

OAuth Integration (Google, GitHub)

👨‍💻 Author

Sujal Patel
Backend Developer (Node.js | MongoDB | Laravel)

📜 License

This project is licensed under the MIT License.
=======
# User Authentication System (Node.js & MongoDB)

## 📌 Project Overview
This project is a user authentication system built using Node.js, Express.js, and MongoDB.
It provides secure authentication with password hashing and token-based authorization.

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- dotenv

## ✨ Features
- User registration and login
- Password encryption
- Token-based authentication
- Protected routes
- Error handling

## ⚙️ Setup
1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Run the server

## 🚀 Future Improvements
- Role-based access
- Password reset
- Email verification

## 👨‍💻 Author
Sujal Patel
>>>>>>> 2c214b75e7c7491d568a6e2398ee2b020b3fe27f
=======
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
>>>>>>> 046f266 (README)
"# User-Authentication" 
