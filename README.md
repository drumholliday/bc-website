# Bankruptcy Control – Web Application

A modern frontend interface for **Bankruptcy Control**, designed to improve usability, clarity, and presentation for creditors, servicers, and attorneys managing bankruptcy cases.

---

## Live Demo

[View Live Site](https://bc-website.vercel.app/)

---

## Overview

Bankruptcy Control is a centralized system for:

- Managing bankrupt accounts  
- Tracking claims throughout the bankruptcy lifecycle  
- Automating compliance and document generation  
- Integrating with servicing systems and bankruptcy data providers  

This project represents a **modernized frontend concept** for an existing bankruptcy case management platform, focused on improving usability, clarity, and presentation.

It focuses specifically on frontend UI/UX improvements and does not replace or modify the existing backend system.
---

## Features

- Modern responsive UI built with Next.js (App Router)
- Tailwind CSS for fast and consistent styling
- Structured product landing page:
  - Hero section (value proposition)
  - Product overview
  - Solutions (feature highlights)
  - Demo request form
- Clean, scalable component structure

---

## Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Turbopack (Next.js dev bundler)**

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:3000
```

---

## Project Structure

```
bc-website/
├── src/
│   └── app/
│       ├── page.tsx       # Main landing page
│       ├── layout.tsx     # Root layout
│       └── globals.css    # Global styles
├── public/                # Static assets
├── package.json
└── README.md
```

---

## Notes

- This project focuses on frontend UI/UX improvements.
- The "Request a Demo" form is a frontend-only implementation and not yet connected to a backend service.
- Next.js Dev Tools may appear in development mode (bottom-right corner). This is expected and does not appear in production.

---

## Future Enhancements

- Integrate demo/contact form with backend services  
- Add authentication and user dashboard  
- Replace mock UI with real product screenshots  
- Integrate with bankruptcy data sources and servicing systems  
- Improve performance, accessibility, and SEO  

---

## Deployment

This project is deployed using Vercel and automatically updates when changes are pushed to the repository.

---

## Usage

This project is intended for internal development and demonstration purposes.