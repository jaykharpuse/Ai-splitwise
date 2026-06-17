# 💸 Splitr

A modern full-stack expense splitting application designed to simplify shared expenses among friends, roommates, travel groups, and teams.

Splitr helps users track expenses, manage group balances, send payment reminders, and gain insights into spending patterns through an intuitive and scalable platform.

---

## ✨ Features

### 👥 Group Expense Management

* Create and manage expense groups
* Add shared expenses with flexible split options
* Track contributions and outstanding balances

### 📊 Smart Balance Tracking

* Real-time balance calculations
* Clear settlement workflow
* Simplified debt management between group members

### 🤖 AI-Powered Insights

* Monthly spending summaries
* Expense analysis using Gemini AI
* Personalized financial insights

### ⏰ Automated Reminders

* Scheduled payment reminders
* Monthly expense reports
* Background job processing with Inngest

### 📧 Notifications

* Email notifications powered by Resend
* Settlement and reminder alerts

### 🔐 Secure Authentication

* User authentication and authorization with Clerk
* Protected routes and secure session management

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15 (App Router)
* React 19
* Tailwind CSS 4
* Radix UI

### Backend

* Convex
* Serverless Functions

### Authentication

* Clerk

### Background Jobs

* Inngest

### Email Service

* Resend

### AI Integration

* Google Gemini

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd splitr
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in all required environment variables.

### 4. Start Convex

```bash
npx convex dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

Required variables:

```env
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_JWT_ISSUER_DOMAIN
NEXT_PUBLIC_CONVEX_URL
RESEND_API_KEY
GEMINI_API_KEY
```

---

## ⚙️ Background Jobs

Splitr uses Inngest for:

* Payment reminders
* Monthly spending reports
* Automated notifications
* Scheduled AI insights

Production Endpoint:

```text
/api/inngest
```

---

## 📦 Deployment

### Deploy on Vercel

1. Push the repository to GitHub
2. Import the project into Vercel
3. Configure all environment variables
4. Set the production application URL
5. Deploy

---

## 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs lint checks.

---

## 🎯 Project Goals

* Build a scalable expense management platform
* Explore modern full-stack architecture
* Implement background job processing
* Integrate AI-powered financial insights
* Practice production-ready application development

---

## 👨‍💻 Author

**Jay Kharpuse**

Software Developer | Full Stack Developer | MERN & Next.js Enthusiast

Built with a focus on scalability, clean architecture, and modern web development practices.
