# 📸 Imaginate – AI Text to Image Generator

Imaginate is a **full-stack MERN SaaS application** that allows users to **generate AI-powered images from text prompts**, manage **credits**

 <!-- and purchase additional plans using **Razorpay**.   -->

It provides a **seamless user experience** with authentication, credit tracking, and responsive UI animations.

---

## ✨ Features

- 🔑 **User Authentication**

  - Register and login with JWT authentication
  - Secure password hashing
  - Persistent sessions with local storage

- 🎨 **AI Text-to-Image Generation**

  - Generate high-quality AI images from text prompts using external APIs (ClipDrop)
  - Download generated images
  - Responsive design with image previews

- 💳 **Credit Management System**

  - Each user gets a credit balance
  - Generating an image deducts credits
  - Credits displayed in real-time

- 💰 **Subscription & Payments**
  <!-- - Razorpay integration for secure payments   -->

  - Purchase plans to add more credits
  - Transaction data stored in MongoDB

- 🌐 **Modern Frontend**

  - Built with React + Tailwind CSS
  - Routing with React Router
  - Context API for global state management
  - Animations using Framer Motion
  <!-- - Responsive Navbar, Footer, and UI components   -->

- 🔒 **Backend API**
  - Express + MongoDB for handling authentication, credits, and payments
  - Middleware for JWT verification
  - RESTful APIs for image generation, user management, and credits

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- Tailwind CSS
- React Router
- Framer Motion
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Razorpay SDK

**External API:**

- ClipDrop API (Text-to-Image)

---

## ⚙️ Installation & Setup

Follow these steps to run **Imaginate** locally:

---

### Prerequisites

```bash
  npm i express cors dotenv nodemon form-data jsonwebtoken mongoose axios bcrypt razorpay
```

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Rashmi-K-V/Imaginate.git
cd imaginate
```

---

### 2️⃣ Setup Backend

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```
