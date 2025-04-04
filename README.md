# 🚀 ConsultationPi

**ConsultationPi** is a full-stack, AI-powered consultation platform that enables users to connect with virtual and human consultants across a wide range of domains — fitness, clinical, legal, financial, and more. With seamless AI interaction, scheduling, payments, notifications, and video meetings, it's your one-stop consultation ecosystem.

## Tech Stack

### Frontend
- **React** with TypeScript
- **Tailwind CSS 3** for styling
- **React Query / SWR** for data fetching
- **OAuth** (Google, GitHub, Facebook) authentication
- **Socket.IO** for real-time features

### Backend
- **Node.js** with Express or NestJS
- **PostgreSQL** with ORM or query builder (e.g., **Knex.js**, **Sequelize**, or **Prisma**)
- **Dapper-style raw SQL queries**
- **JWT Authentication & Authorization**
- **OpenAI ChatGPT API**
- **Twilio API** for SMS & OTP
- **Stripe / Razorpay** for payments
- **Google APIs**: Calendar, Meet, OAuth
- **Webhook endpoints** for Stripe, Twilio, etc.

---

## Features

### User Roles
- **Users**: Book consultations, chat with AI, manage appointments
- **Consultants**: Register expertise, manage availability, host meetings
- **Admins**: Monitor analytics, approve consultants, manage services

### Authentication
- Login via Email/Password and OAuth (Google, GitHub)
- OTP login via Twilio
- Role-based access (JWT + middleware)

### AI Consultation
- Custom ChatGPT prompts based on consultation type (Fitness, Legal, etc.)
- Chat history & analytics
- Token usage tracking

### Scheduling
- Book consultations with human experts
- Sync availability with **Google Calendar**
- Auto-create **Google Meet** links for sessions

### Payments
- Subscription-based plans (monthly/yearly)
- One-time consultation payments
- Stripe / Razorpay integration
- Webhook support for transaction updates

### Notifications
- SMS reminders via Twilio
- Email confirmations (SendGrid / Mailgun optional)
- Push notifications (Firebase optional)

### Admin Panel
- Consultant approval system
- Service category management
- Payments and user analytics

---

## Webhooks

| Event Source | Webhook | Description |
|--------------|---------|-------------|
| Stripe / Razorpay | `/api/webhook/payment` | Payment success, fail, refund |
| Twilio | `/api/webhook/sms` | SMS status, OTP verification |
| Google Calendar | `/api/webhook/calendar` | Meeting update or cancellation |

---

## Installation

```bash
# Clone the repo
git clone https://github.com/adarsh-chaunal/ConsultationPi.git
cd ConsultationPi

# Backend
cd backend
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm start
