# CodeBooth

A full-stack technical interview platform for **1-on-1 coding interviews and solo practice**, featuring real-time collaboration, video calling, chat, and code execution.

## Features

* 1-on-1 technical coding interviews
* Real-time collaborative coding
* Video & audio calling
* Real-time chat
* Code execution with multiple languages
* Solo coding practice
* Authentication & user management

## Tech Stack

**Frontend:** React, Tailwind CSS, DaisyUI, TanStack Query
**Backend:** Node.js, Express.js, MongoDB
**Auth:** Clerk
**Real-time:** Socket.IO, Stream Chat, Stream Video
**Code Execution:** JDoodle
**Background Jobs:** Inngest

## Run Locally

```bash
git clone https://github.com/advitya4169/codebooth.git
cd codebooth

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

Create `.env` files with the required API keys for MongoDB, Clerk, Stream, JDoodle, and Inngest.

