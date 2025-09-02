## Polling App with QR Code Sharing
## 📌 Introduction:
This project is a personal build of a Polling Application with QR Code Sharing, developed to practice AI-assisted full-stack development. It is a full-stack Polling Application built with Next.js, Supabase, and modern AI-native developer tools to accelerate design, coding, and deployment across the entire software lifecycle.

The app allows users to create polls, share them via unique links or QR codes, and collect votes in real-time. Development was done with the aid of multiple AI-native IDEs and code assistants for planning, coding, debugging, testing, and deployment.

## 🎯 Project Goals:
Build a real-world full-stack application using AI-native tools. Explore how AI can accelerate planning, coding, UI generation, and debugging. Gain hands-on experience deploying to Vercel with Supabase as backend.

## 🚀 Features:
Poll Management (Registered Users) Create polls with a question and multiple answer options. View, edit, and delete created polls. Dashboard to manage polls.

## Voting
Public polls accessible via unique links. Cast votes directly without login (supports anonymous voting). Vote tracking to avoid duplicate votes.

## Sharing
Generate unique links for each poll. Share polls via QR code generation.

## Authentication
User registration/login via Supabase Auth. Secure session management.

## Results
Live visualization of results using charts (vote counts/percentages).

## 👥 User Roles:
Poll Creator (Registered User): create/manage polls, share via link/QR, view results. Voter (Anonymous or Registered): access poll via link/QR, cast a vote.

## 🛠️ Tech Stack:
Framework: Next.js (App Router) Database & Auth: Supabase UI Components: shadcn/ui QR Code Generation: qrcodejs Deployment: Vercel

## 🤖 AI Integration in Development:
This project actively used AI-powered tools at every stage:

## Planning & Architecture
AI chats to define DB schema, user flows, API routes.

## UI Generation
AI-assisted prototyping (e.g., v0.dev) for forms and dashboards.

## Code Writing
AI-native IDEs (Cursor, Trae, Copilot) to scaffold components and logic.

## Testing
AI-assisted generation of Jest/Vitest unit and integration tests.

## Debugging
AI support for error tracing and refactoring.

## 📦 Installation & Setup:
## Clone repository:
```bash
git clone https://github.com/Tobe01/ai-polling-app.git
cd ai-polling-app
```
Install dependencies:
```bash
npm install
```
Configure Supabase: Create a project on Supabase, Copy your API keys and Database URL.

Create a .env.local file:
```bash
env

NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```
Run development server:
```bash
npm run dev
```
Visit app:
```bash
http://localhost:3000
```
## 🌐 Deployment:
The app is deployed on Vercel and connected directly to GitHub for CI/CD. Connect GitHub repo → Deploy automatically.

## 📊 Learning Outcome:
✅ *Full-stack development with Next.js + Supabase.*

✅ *Practical use of AI-native developer tools for planning, UI scaffolding, code generation, and debugging.*

✅ *Experience with deployment pipelines using Vercel.*
