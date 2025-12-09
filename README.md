# 📸 Imaginate – AI Text to Image Generator SaaS

**Imaginate** is a **full-stack MERN SaaS application** that allows users to **generate AI-powered images from text prompts**, manage **credits**, and purchase additional plans using a payment gateway.

It provides a **seamless user experience** with authentication, credit tracking, and responsive UI animations.

---

## ✨ Features

- 🔑 **User Authentication**
  - Register and login with **JWT authentication**
  - Secure password hashing with **bcrypt**
  - Persistent sessions stored in **local storage**
- 🎨 **AI Text-to-Image Generation**

  - Generate **high-quality AI images** from text prompts using **ClipDrop API**
  - Preview and download generated images

- 💳 **Credit Management System**

  - Each user has a **credit balance**
  - Image generation consumes credits
  - Real-time credit tracking in UI

- 💰 **Subscription & Payments**

  - Purchase plans to **add credits** to account
  - Payment integration using **Razorpay** or **Cashfree**
  - All transactions stored in **MongoDB**

- 🌐 **Modern Frontend**

  - Built with **React.js + Tailwind CSS**
  - Routing with **React Router**
  - Global state management via **Context API**
  - Smooth animations with **Framer Motion**
  - Responsive Navbar, Footer, and UI components

- 🔒 **Backend API**
  - **Node.js + Express.js** for RESTful APIs
  - **MongoDB + Mongoose** for database operations
  - JWT-based authentication middleware
  - Endpoints for:
    - User registration, login, logout
    - Credit retrieval
    - Image generation
    - Payments & transaction verification

---

## 🛠️ Tech Stack

| Layer        | Technologies / Tools                                                                        |
| ------------ | ------------------------------------------------------------------------------------------- |
| Frontend     | React.js, Tailwind CSS, React Router, Framer Motion, Axios                                  |
| Backend      | Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Bcrypt, Razorpay / Cashfree SDK |
| External API | ClipDrop API (Text-to-Image Generation)                                                     |

---

### Prerequisites

Make sure you have **Node.js** and **MongoDB** installed.

## ⚙️ Installation & Setup

### 1.Clone Repository

```bash
git clone https://github.com/Rashmi-K-V/Imaginate.git
cd Imaginate
```

### 2.Setup Backend

```bash
cd server
npm install
```

**Create a .env file in the backend folder with the following variables:**

```bash
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
CLIPDROP_API_KEY=your_clipdrop_api_key
```

### 3. Run the backend server:

```bash
npm run server
```

### 4. Setup Client Side

```bash
cd client
npm install
npm run dev
```

**Create .env file for frontend with following variables**

```bash
VITE_BACKEND_URL = Your_backend_url_
VITE_RAZORPAY_KEY_ID = Your_test_Api_key
```

To Test payment use Razorpay test card or Razorpay text UPI Id
