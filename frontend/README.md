# Secure Authentication APIs with JSON Web Tokens (JWT) in Node.js

I, **Tojin Varkey Simson **, developed this backend project to provide a robust solution for user authentication using JSON Web Tokens (JWT) in Node.js with Express. This API enables secure user actions, including:

- Sign up
- Verify email through OTP
- Resend OTP
- Log in
- Change password
- Forgot password
- Route protection using JWT

The goal of this project is to offer a secure, scalable, and production-ready authentication system.

---

## 🔧 Features Implemented

### ✅ MVC Framework
Structured the project using the **Model-View-Controller (MVC)** pattern to maintain separation of concerns and improve scalability.

### ✅ Custom Middlewares
Implemented reusable middleware functions for **token verification**, **OTP validation**, and **tempToken parsing** to maintain clean and secure logic.

### ✅ Modular Architecture
Built the project with a **modular folder structure**, improving maintainability and readability.

### ✅ JWT Authentication
Utilized **JWT** to securely issue and validate tokens, enabling stateless and scalable authentication.

### ✅ Route Separation
Organized all routes into dedicated files for clean code management and easier debugging.

### ✅ MongoDB + Mongoose
Used **Mongoose** ODM for MongoDB to define schemas and manage database operations efficiently.

### ✅ Joi Validation
Implemented **Joi** to validate user inputs across all endpoints for safety and consistency.

### ✅ Password Hashing with bcrypt
Used **bcrypt** to hash passwords, enhancing security and protecting user credentials.

### ✅ Email via Nodemailer + Gmail API
Sent OTPs and password reset links using **Nodemailer** integrated with **Gmail API**.

### ✅ Environment Variables
Used **dotenv** to securely manage API keys and configuration data.

---

## 🚀 API Endpoints (Test with Postman)

### 🔹 Registration
- `POST /register`
- Accepts `username`, `email`, `password`
- Sends OTP and tempToken

### 🔹 Verify Account
- `POST /register/verify-account`
- Verifies OTP using tempToken from registration
- On success, issues JWT access token

### 🔹 Resend OTP
- `POST /resendOtp`
- Provide email and `tempToken` to resend OTP

### 🔹 Login
- `POST /login`
- Accepts email and password
- Returns access token (can be stored in HTTP-only cookie)

### 🔹 Show User Info
- `GET /showInfo`
- Requires valid JWT in Authorization header
- Returns user profile

### 🔹 Change Password
- `PUT /change-password`
- Requires old and new password with valid token

### 🔹 Forget Password
- `POST /forget-password`
- Sends OTP and tempToken to email

### 🔹 Verify Forget Password
- `POST /forget-password/verify`
- Verifies OTP and sets new password using tempToken

---

## 🧱 Middleware Functions

### 🛡️ verifyToken
Validates JWT from headers, allows route access only to authenticated users.

### 🔐 verifyTempToken
Parses and verifies tempToken from query string during OTP verification.

### 📩 otpVerify
Validates OTP sent via email during account verification or password reset.

---

## ✅ Key Highlights

- 🔐 **JWT Authentication** with access control
- ✅ **OTP-based Email Verification** with expiry logic
- 🛡️ **Route Protection** using Middleware
- 📦 **Proper Error & Response Handling**
- ⚙️ **Ready to Deploy** with `.env` configuration

---

## 🌐 Frontend (in Progress)

The frontend of this authentication system is being built in the `frontend` branch using **React.js**.

---

> 👨‍💻 Developed and maintained by **Tojin Varkey Simson **  
> 📫 Reach out via GitHub or email for collaborations or queries!
