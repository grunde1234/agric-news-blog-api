# 🌱 Agric News Blog API
A simple yet powerful RESTful API built with Express.js, designed for an Agricultural News Blog. It supports full CRUD operations—Create, Read, Update, and Delete—on blog posts, and includes user authentication using sessions and JWTs to ensure secure access.

All blog operations require users to be authenticated with a valid email and password. The system uses MongoDB as the database to persist user and blog post data.

# 🚀 Features
* ✅ User Registration and Login with hashed passwords
* 🔐 Authentication with JWT and session tokens
* 📝 CRUD functionality for blog posts
* 🌍 MongoDB database integration
* 🧾 Secure routes (only logged-in users can post or update blogs)


# 🛠️ How to Use
1. Make sure Node.js is installed on your machine.
2. Clone the repository:
```
git clone https://github.com/your-username/agric-news-blog-api.git
```
3. Install dependencies:
```
npm install
```
4. Create a .env file and configure your environment variables:
```
PORT=3000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```
5. Start the development server:
```
npm run dev
```
not npm start

# 📦 Tools & Dependencies
## Core Dependencies
* express – Web framework
* colors for a colorful output
* mongoose to connect to mongodb
* bcript to hash passwors of the user
* JWT to manage tokens
 
## Developers Tools
* Postman for testing the interactions
* VS code 