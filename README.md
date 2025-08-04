<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" width="180"/>
</p>

<h1 align="center">Amazon Clone 🛒</h1>

<p align="center">
  A full-stack e-commerce web application built with the MERN stack.<br/>
  <a href="https://amazoncloneshop.netlify.app" target="_blank">🌐 Live Demo</a>
</p>

---

## 📦 Project Overview

This project is a fully functional Amazon-style e-commerce platform where users can register, log in, browse products, add them to the cart or wishlist, and proceed to checkout. It includes backend authentication with secure password storage and real-time product interactions.

---

## 🚀 Tech Stack

### ⚛️ Frontend:
- React.js
- React Router DOM
- Context API for global state
- Axios for API requests
- React Toastify (notifications)
- CSS and custom styles
- Tailwind CSS (optional)

### 🧠 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt.js for password hashing
- dotenv for environment management
- cookie-parser for handling tokens

---

## 🔐 Authentication & Security

- **JWT (JSON Web Token):** Secure login & registration using signed tokens.
- **bcrypt.js:** Passwords are hashed before being stored in MongoDB.
- **cookie-parser:** JWT is stored in secure, HTTP-only cookies.

---

## 🛒 Add to Cart Feature

The **Add to Cart** feature enables users to:
- Click "Add to Cart" on any product card.
- Items are stored in the backend database against the user.
- Cart count updates globally using Context API.
- Products can be removed from the cart or purchased directly.

**Cart Logic Flow:**
1. Product clicked → dispatched via context (`setAccount`).
2. Backend API `/addcart/:id` updates the user's cart.
3. Auth token is required for protected routes.
4. UI updates cart icon and renders product list in Cart page.

---

## 🌐 Live Demo

🔗 [https://amazoncloneshop.netlify.app](https://amazoncloneshop.netlify.app)

---


## 🛠️ Installation & Running Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/mdfaizaanalam/Amazon-Clone.git
cd Amazon-Clone
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
# Create a .env file and add environment variables
npm start
```

### 3️⃣ Setup Frontend

```bash
cd client
npm install
# Create a .env file and add frontend API base URL
npm start
```

---

## ☁️ Deployment Instructions

### 🔹 Frontend (Netlify)

1. Go to the `client` directory:

   ```bash
   npm run build
   ```
2. Upload the `/build` folder to Netlify or connect GitHub.


### 🔹 Backend (Render)

* Create new Web Service on Render.
* Connect GitHub.
* Set environment variables (`DATABASE`, `PORT`, `JWT_SECRET`).
* Use this start command:

  ```bash
  node server.js
  ```

---

## ✨ Features

* 🔐 User Authentication (Register/Login)
* 🛒 Add to Cart / Buy Now Functionality
* ❤️ Wishlist
* 🧾 Order Summary
* ✅ Toast Notifications
* 💻 Responsive Design
* 🔄 Persistent Login (Cookies)
* 🔎 Search and Browse Products
* 🧠 Context API for State Management

---

## 👨‍💻 Author

**Md Faizaan Alam**
🔗 [Portfolio](https://mdfaizaanalam.github.io)
💼 [LinkedIn](https://www.linkedin.com/in/mdfaizaanalam)
💻 [GitHub](https://github.com/mdfaizaanalam)

---

