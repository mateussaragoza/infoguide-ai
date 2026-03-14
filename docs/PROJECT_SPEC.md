# InfoGuide AI – Project Specification

## 1. Project Vision

InfoGuide AI is an AI-powered platform that generates structured learning guides for any topic.

The platform allows users to:

* search for a topic
* generate a complete structured learning guide
* follow a step-by-step roadmap
* access automatically generated SEO guides

Primary goal:
Create a scalable knowledge platform capable of generating thousands of learning guides automatically using AI.

---

# 2. Target Users

1. Students learning new topics
2. Developers learning programming
3. Self learners
4. Professionals exploring new skills

Example queries:

* learn python
* learn calculus
* learn statistics
* learn investing

---

# 3. Core Features

## Feature 1 – Topic Search

Users can search a topic.

Example:
"Learn Python"

System returns a generated learning guide.

---

## Feature 2 – AI Guide Generator

Generate a structured learning guide using AI.

Guide structure:

1. Introduction
2. Core concepts
3. Learning roadmap
4. Practical examples
5. Common mistakes
6. Resources

---

## Feature 3 – SEO Guide Pages

System automatically generates SEO pages for topics.

Example URLs:

/guides/learn-python
/guides/learn-javascript
/guides/learn-calculus

Each page contains an AI generated guide.

---

## Feature 4 – Automated Guide Generation

Automation system generates new guides daily.

Goal:
50–100 new guides per day.

Automation uses workflows from n8n.

---

## Feature 5 – Internal Knowledge Graph

Each guide links to related guides.

Example:

learn python → links to

* python variables
* python loops
* python functions

This improves SEO and learning navigation.

---

# 4. System Architecture

Frontend:

* Next.js
* Tailwind CSS
* Server components

Backend:

* API routes
* AI generation engine

Database:

* Supabase PostgreSQL

Automation:

* n8n workflows

AI providers:

* OpenAI
* Anthropic

---

# 5. Tech Stack

Frontend

* Next.js
* React
* Tailwind

Backend

* Node.js
* API routes

Database

* Supabase PostgreSQL

Automation

* n8n

Deployment

* Vercel

Analytics

* Google Analytics
* Microsoft Clarity

---

# 6. Database Schema

Table: guides

Fields:

id
slug
title
topic
content
created_at
updated_at

Example row:

slug: learn-python
title: Learn Python – Complete Guide

---

Table: topics

Fields:

id
topic_name
category
priority
created_at

---

# 7. AI Prompt Template

Guide generation prompt:

Generate a complete learning guide about {topic}.

Structure:

H1 Title
Introduction
Key concepts
Step-by-step learning roadmap
Examples
Common mistakes
Conclusion

Write in clear educational style.

Optimize for SEO.

---

# 8. Automation System

Automation handled via n8n.

Workflow:

1. Trigger daily
2. Fetch topic from database
3. Generate AI guide
4. Save to database
5. Publish page

Goal:
Generate guides automatically.

---

# 9. SEO Strategy

Generate thousands of long-tail pages.

Example keywords:

learn python
learn python fast
best way to learn python
python roadmap

Internal linking connects guides.

Sitemap generated automatically.

---

# 10. Monetization Strategy

1. Ads
   Google AdSense

2. Affiliate links
   Courses
   Books
   Learning platforms

3. Premium learning plans
   AI personalized roadmaps.

---

# 11. Project File Structure

/app
/components
/lib
/api
/database
/workflows
/docs

---

# 12. API Endpoints

POST /api/generate-guide

Input:
topic

Output:
guide content

---

GET /api/guides/{slug}

Return guide data.

---

# 13. Security Rules

* Sanitize AI outputs
* Prevent prompt injection
* Rate limit API
* Validate user inputs

---

# 14. Performance Strategy

Use static generation when possible.

Next.js ISR:

Revalidate pages every 24 hours.

---

# 15. Future Features

1. Personalized learning paths
2. AI tutor chat
3. Interactive exercises
4. Learning progress tracking

---

# 16. Success Metrics

Daily guides generated
Organic traffic
Search rankings
User engagement

Goal:

100k monthly visitors within 12 months.
