# 🛠️ HandyHub – Your Local Task Solution

**HandyHub** is a full-stack web application designed to seamlessly connect individuals needing help (e.g., home repairs, errands) with skilled local workers. It allows users to post tasks, browse available jobs, and manage listings from a personalized dashboard.

---

## ✨ Features

### 🏠 Frontend
- 🔎 **Task Browse**: View a live list of posted problems.
- 📝 **Task Posting**: Post tasks with category, description, location & contact.
- 📋 **My Tasks Dashboard**: View, update, and delete your own tasks.
- 🔍 **Search & Filter**: Search and filter tasks by keywords or category.
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile.
- 📞 **Contact Page**: Easily get in touch.

### ⚙️ Backend
- 🔗 **RESTful APIs**: Supports full CRUD operations.
- 💾 **Database**: MySQL-backed storage for all problems.
- 🔒 **CORS Configured**: Ensures frontend-backend communication.
- 🛡️ **Planned**: Spring Security + JWT for authentication (coming soon).

---

## 💻 Tech Stack

### 🎨 Frontend

- React.js (with Vite)
- React Router DOM
- Axios
- HTML5 / CSS3

### 🌳 Backend

- Spring Boot
- Spring Data JPA + Hibernate
- MySQL
- Lombok (optional)
- **Planned**: Spring Security + JJWT

---

## 🛠️ Setup and Installation

### ✅ Prerequisites

- Node.js & npm
- JDK 17+
- Maven
- MySQL Server & (optional) MySQL Workbench

---

### 1. 📦 Backend Setup

git clone https://github.com/adiTyaIcHe07/HandyHub_Project.git
cd HandyHub_Project/backend

MySQL DB Setup
CREATE DATABASE handyhub_db;

Update application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/handyhub_db
spring.datasource.username=User_Name
spring.datasource.password=Your_Password
spring.jpa.hibernate.ddl-auto=update
Run the Backend

mvn clean install
mvn spring-boot:run
Server runs at: http://localhost:8080

---

2. 🎯 Frontend Setup

cd HandyHub_Project/frontend
npm install

Create a .env file:
env
VITE_APP_API_BASE_URL=http://localhost:8080/api

Start frontend:
npm run dev
Opens at: http://localhost:5173

---

🚀 Usage

View tasks: All Problems Page

Post a task: Post Problem Page

Manage your tasks: My Problems Page

Contact info: Contact Us Page

📂 Project Structure

🌐 Frontend (handyhub-vite-frontend)

📦 handyhub-vite-frontend/
├── 📁 public/ (Static assets)
│   ├── 🖼️ handyhub-favicon.svg
│   └── 🖼️ handyhub-hero.jpg
├── 📁 src/
│   ├── 📁 assets/ (Images, fonts etc. imported into components)
│   ├── 📁 components/ (Reusable UI components like Navbar)
│   │   ├── 🎨 Navbar.css
│   │   └── ⚛️ Navbar.jsx
│   ├── 📁 data/
│   │   └── 📄 categories.js (Service categories data)
│   ├── 📁 pages/ (Page-level components)
│   │   ├── 🎨 AllProblemsPage.css
│   │   ├── 📄 AllProblemsPage.jsx
│   │   ├── 🎨 ContactUsPage.css
│   │   ├── 📄 ContactUsPage.jsx
│   │   ├── 🎨 HomePage.css
│   │   ├── 📄 HomePage.jsx
│   │   ├── 🎨 MyProblemsPage.css
│   │   ├── 📄 MyProblemsPage.jsx
│   │   ├── 🎨 PostProblemPage.css
│   │   └── 📄 PostProblemPage.jsx
│   ├── 📁 services/
│   │   └── 📡 problem.service.js (Axios API calls to backend)
│   ├── 🎨 App.css (Main App component styles)
│   ├── ⚛️ App.jsx (Root component with routing)
│   ├── 🎨 index.css (Global styles)
│   └── 🚀 main.jsx (Application entry point)
├── 📄 .gitignore
├── 📄 index.html (Main HTML file for Vite)
├── 📄 package.json
├── ⚙️ vite.config.js (Vite configuration)
└── 📝 README.md (This file)

📁 handyhub-backend

📦 handyhub-backend/
├── 📁 src/
│   ├── 📁 main/
│   │   ├── 📁 java/
│   │   │   └── 📁 com/handyhub/backend/
│   │   │       ├── 📄 HandyhubBackendApplication.java (Main class)
│   │   │       ├── 📁 config/
│   │   │       │   └── 📄 WebConfig.java (CORS configuration)
│   │   │       ├── 📁 controller/
│   │   │       │   └── 📄 ProblemController.java (REST API endpoints)
│   │   │       ├── 📁 dto/ (Data Transfer Objects - e.g., StatusUpdateRequest if used)
│   │   │       │   └── 📄 StatusUpdateRequest.java
│   │   │       ├── 📁 entity/ (or model)
│   │   │       │   └── 📄 Problem.java (JPA Entity)
│   │   │       ├── 📁 repository/
│   │   │       │   └── 📄 ProblemRepository.java (Spring Data JPA interface)
│   │   │       └── 📁 service/
│   │   │           └── 📄 ProblemService.java (Business logic)
│   │   └── 📁 resources/
│   │       └── 📄 application.properties (Spring Boot configurations, DB connection)
├── 📁 .mvn/ (Maven wrapper files)
├── 🐧 mvnw (Maven wrapper script for Linux/macOS)
├── 🪟 mvnw.cmd (Maven wrapper script for Windows)
└── 📄 pom.xml (Maven project configuration)

---

🌱 Future Enhancements

🔐 User Authentication & JWT

👥 User Profiles

📩 Direct Messaging / Bidding

🛎️ Notifications

🖼️ Image Uploads

📍 Location-based services (Maps)

⭐ Review & Rating System

📊 Admin Dashboard

---

📄 License
This project is licensed under the MIT License.

---

🔗 Built with ❤️ by Aditya Iche – GitHub
