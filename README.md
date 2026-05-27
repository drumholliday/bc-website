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
- Tailwind CSS for scalable enterprise styling
- Multi-page platform architecture
- Dedicated operational platform sections:
  - Operations
  - Platform Capabilities
  - Security & Infrastructure
- Interactive platform overview cards with dedicated detail pages
- Responsive desktop and mobile navigation
- Mobile hamburger menu support
- Structured enterprise SaaS layout and information architecture
- Demo request form (frontend implementation)
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

```text
bc-website/
├── public/                 # Static assets and images
├── src/
│   └── app/
│       ├── capabilities/   # Platform capabilities subpage
│       │   └── page.tsx
│       ├── operations/     # Operations subpage
│       │   └── page.tsx
│       ├── security/       # Security & infrastructure subpage
│       │   └── page.tsx
│       ├── globals.css     # Global styles
│       ├── layout.tsx      # Root layout and metadata
│       └── page.tsx        # Main landing page
├── package.json
└── README.md
```

---

## Architecture Direction

The platform is evolving from a traditional landing-page structure into a multi-page enterprise SaaS architecture.

The homepage is designed to provide a concise executive overview of the platform, while dedicated subpages provide deeper operational detail for areas such as:

- Operations
- Platform Capabilities
- Security & Infrastructure

This structure improves scalability, readability, and long-term maintainability as the platform grows.

---

## Notes

- This project focuses on frontend UI/UX improvements.
- The "Request a Demo" form is a frontend-only implementation and not yet connected to a backend service.
- Next.js Dev Tools may appear in development mode (bottom-right corner). This is expected and does not appear in production.

---

## Future Enhancements

- Integrate demo/contact form with backend services  
- Add authentication and user dashboard  
- Replace placeholder visuals with real product screenshots and     workflow diagrams  
- Integrate with bankruptcy data sources and servicing systems  
- Improve performance, accessibility, and SEO  

---

## Design Goals

- Improve usability and operational clarity
- Modernize the user experience for bankruptcy operations
- Create scalable enterprise SaaS information architecture
- Improve responsiveness across desktop and mobile devices
- Support future backend integration and operational workflows

---

## Deployment

This project is deployed using Vercel and automatically updates when changes are pushed to the repository.

---

## Usage

This project is intended for internal development and demonstration purposes.