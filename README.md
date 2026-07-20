# MasterHire

## Overview

MasterHire is a full-stack freelance marketplace developed with the vision of creating a dedicated freelancing platform for India. While many existing marketplaces primarily support international transactions in USD, MasterHire is designed to facilitate project collaboration and secure payments in Indian Rupees (INR). The platform allows clients to post jobs, freelancers to submit proposals, collaborate through milestone-based workspaces, communicate in real time, exchange files, receive notifications, and complete secure payment transactions within a localized ecosystem.

## Features

- **Secure JWT Authentication** – Protects user accounts with token-based login, profile access, and authenticated sessions.
  - **API Endpoints**
    - `POST /api/auth/login`
    - `GET /api/auth/me`
    - `POST /api/auth/send-otp`
    - `POST /api/auth/verify-otp`
    - `POST /api/auth/resend-otp`
    - `POST /api/auth/complete-profile`

- **Google OAuth Login** – Lets users sign in quickly with their Google account for a smoother onboarding experience.
  - **API Endpoints**
    - `POST /api/auth/google-auth`

- **Job Posting & Proposal System** – Enables clients to post jobs, freelancers to apply, and both sides to track job activity.
  - **API Endpoints**
    - `POST /api/jobs/post-job`
    - `GET /api/jobs/search`
    - `GET /api/jobs/my-jobs`
    - `GET /api/jobs/:jobId`
    - `POST /api/jobs/:jobId/apply`
    - `POST /api/jobs/:jobId/save`
    - `GET /api/jobs/freelancer/applied-jobs`
    - `GET /api/jobs/freelancer/saved-jobs`

- **Milestone-based Workspace** – Organizes projects into milestones so progress, submissions, and approvals stay easy to manage.
  - **API Endpoints**
    - `GET /workspace/api/job/:id/milestones`
    - `PATCH /workspace/api/milestones/:jobId/:milestoneId/status`
    - `POST /workspace/api/milestones/:jobId/:milestoneId/submit`
    - `POST /api/payment/approve-milestone`

- **Real-time Chat using Socket.io** – Supports instant messaging and unread tracking for faster communication between clients and freelancers.
  - **API Endpoints**
    - `GET /workspace/api/client/messages`
    - `GET /workspace/api/client/messages/call-log`
    - `GET /workspace/api/messages/unread-count`
    - `PATCH /workspace/api/messages/read`
    - `GET /api/freelancer/messages`
    - `GET /api/freelancer/messages/:jobId`

- **Secure Razorpay Payment Integration** – Handles milestone payments, wallet top-ups, approvals, and refunds securely.
  - **API Endpoints**
    - `POST /api/payment/create-order`
    - `POST /api/payment/verify`
    - `POST /api/payment/topup/create-order`
    - `POST /api/payment/topup/verify`
    - `POST /api/payment/approve-milestone`
    - `POST /api/payment/pay-from-wallet`
    - `POST /api/payment/cancel-project`

- **Wallet Management** – Keeps wallet balance, withdrawals, and transaction history organized in one place.
  - **API Endpoints**
    - `GET /api/payment/wallet`
    - `GET /api/payment/transactions`
    - `POST /api/payment/withdraw`
    - `POST /api/freelancer/settings/withdraw`

- **Cloudinary File Uploads** – Stores and serves uploaded files such as proposals, messages, milestone submissions, and job attachments.
  - **API Endpoints**
    - `POST /workspace/api/client/messages`
    - `POST /api/freelancer/messages`
    - `POST /workspace/api/milestones/:jobId/:milestoneId/submit`
    - `GET /workspace/api/job/:id/files`

- **Email Verification & Password Reset** – Improves account security with verification emails and password recovery support.
  - **API Endpoints**
    - `POST /api/auth/send-otp`
    - `POST /api/auth/verify-otp`
    - `POST /api/auth/resend-otp`
    - `POST /api/auth/forgot-password`

- **Role-based Dashboards** – Shows tailored dashboards for clients and freelancers based on their role and activity.
  - **API Endpoints**
    - `GET /api/client/settings/me`
    - `GET /api/freelancer/settings/me`
    - `GET /api/client/profile`
    - `GET /api/my-profile`
    - `GET /api/users/stats`

- **Notifications** – Keeps users updated about job activity, messages, approvals, and payment events in real time.
  - **API Endpoints**
    - `GET /api/notifications`
    - `PATCH /api/notifications/read-all`
    - `PATCH /api/notifications/:id/read`
    - `GET /api/notifications/:id`

## Tech Stack
Frontend:
- React
- Vite
- Tailwind CSS

Backend:
- Node.js
- Express
- Socket.io

Database:
- MongoDB

Others:
- JWT
- Cloudinary
- Razorpay
- Nodemailer / Brevo

## Installation

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn
- MongoDB instance running locally or remotely

### Clone the Repository
```bash
git clone https://github.com/SharadKumar7/MasterHire-Freelancing-Platform

```

### Backend Setup
```bash
cd Masterhire_backend
npm install
cp .env.example .env
# Update the .env file with your MongoDB, JWT, email, and payment credentials
npm run dev
```

The backend will start using the `dev` script with nodemon.

### Frontend Setup
```bash
cd Masterhire_frontend
npm install
cp .env.example .env
# Add your frontend environment variables such as VITE_API_URL
npm run dev
```

The frontend will start on the Vite development server (usually http://localhost:5173).

### Project Structure

```text
MasterHire/
├── Masterhire_backend/
│   ├── config/           # Database and service configuration
│   ├── controllers/      # Route handlers and business logic
│   ├── middleware/       # Authentication and upload middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   ├── socket/           # Socket.io setup
│   ├── uploads/          # Uploaded files
│   └── utils/            # Helpers and cron jobs
│
└── Masterhire_frontend/
    ├── src/
    │   ├── assets/       # Images and static assets
    │   ├── components/   # Reusable UI components
    │   ├── context/      # Auth and app-level state
    │   ├── pages/        # Route-based pages
    │   └── main.jsx      # App entry point
    ├── index.html
    ├── package.json
    └── vite.config.js
```

### Environment Variables

Create a `.env` file in `Masterhire_backend` with the required values for your local setup.

Common backend variables used in the app:
- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `EMAIL_USER`
- `EMAIL_PASS`
- `BREVO_API_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_ACCOUNT_NUMBER`

Create a `.env` file in `Masterhire_frontend` for Vite variables.

Common frontend variables used in the app:
- `VITE_API_URL`
- `VITE_GOOGLE_CLIENT_ID`
- `VITE_RAZORPAY_KEY_ID`

## Future Scope

- Video Calling
- AI Features
- Better Search

##Live Demo
https://masterhire.netlify.app/

## Authors

**Sharad Kumar**

 - GitHub: github.com/SharadKumar7
 - LinkedIn: linkedin.com/in/sharadkumar7

**Rishika Kumari**

 - GitHub: github.com/rishikakumari08
 - LinkedIn: linkedin.com/in/rishika-kumari-dev

**Bijoy Pantu**
 - GitHub: github.com/bijoypantu
 - LinkedIn: linkedin.com/in/bijoypantu

**Muntazir Alam**
 - GitHub: github.com/Muntaziralam143hub
 - LinkedIn: linkedin.com/in/muntazir-alam

**Kaustav Mondal** 
 - GitHub: github.com/MrKoustav
 - LinkedIn: linkedin.com/in/kaustav-mondal