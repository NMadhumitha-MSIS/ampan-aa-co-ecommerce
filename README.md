# Ampan (AA) & Co - Fullstack E-Commerce Website

## Overview
Ampan (AA) & Co is a multi role e-commerce website built for a beauty & skincare brand. The platform supports admin and customer workflows, product browsing, cart management, and checkout using PayPal sandbox payments. The UI is responsive across desktop and mobile views.

## Key Features
- Multi role access (Admin / User)
- Product catalog with categories and detailed product pages
- Cart and checkout workflow
- PayPal sandbox payment integration
- Responsive UI across 15+ pages
- MongoDB-backed data storage for products and users

## Tech Stack
- **Frontend:** React.js, Bootstrap, HTML/CSS
- **Backend:** Node.js, Express.js (and PHP if used in legacy modules)
- **Database:** MongoDB
- **Payments:** PayPal Sandbox
- **Version Control:** Git/GitHub

## Repository Structure (Suggested)
- `client/` - Frontend React application
- `server/` - Backend Node/Express APIs
- `docs/` - project documentation/screenshots
- `assets/` - UI screenshots

> Note: Folder names may differ depending on the original project structure.

## How to Run Locally

### Prerequisites
- Node.js (LTS recommended)
- MongoDB (local or MongoDB Atlas)

### 1) Backend (Express + MongoDB)
cd Backend
npm install

Create a .env file inside Backend/ (use the provided template):
cp .env.example .env

Start the backend:
npm start

Backend runs on:
http://localhost:5001

### 2) Frontend (React)
Open a new terminal:
cd Frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

## Screenshots (to be added)
Add UI screenshots in `assets/` and embed them here for quick preview.

## Next Improvements
- Add product search + filters
- Add order history and admin analytics dashboard
- Improve form validation and error handling
