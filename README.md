# WanderLust
A production-style vacation rental platform (full-stack) built with Node.js, Express, MongoDB, EJS and Cloudinary — a demo-grade implementation of core listing, review and user authentication flows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/BaljeetkumarPatel/WanderLust?style=social)](https://github.com/BaljeetkumarPatel/WanderLust/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/BaljeetkumarPatel/WanderLust?style=social)](https://github.com/BaljeetkumarPatel/WanderLust/network)
[![Repo size](https://img.shields.io/github/repo-size/BaljeetkumarPatel/WanderLust)](https://github.com/BaljeetkumarPatel/WanderLust)
[![Last commit](https://img.shields.io/github/last-commit/BaljeetkumarPatel/WanderLust)](https://github.com/BaljeetkumarPatel/WanderLust/commits/main)
[![Languages](https://img.shields.io/github/languages/top/BaljeetkumarPatel/WanderLust)](https://github.com/BaljeetkumarPatel/WanderLust)

---

## Overview

Problem
- Modern vacation rental platforms require secure user authentication, listing management with images and location data, and a reliable review system — this project demonstrates a compact, maintainable implementation of those core capabilities.

Motivation
- To provide a reference implementation that mirrors common SaaS patterns for property listings: session-based auth, Cloudinary-backed image storage, geospatial-ready listings, and server-side validation.

Business value
- A minimal, production-minded prototype showing how to deliver listing CRUD, reviews, secure authentication and image handling with a small, maintainable codebase suitable for technical interviews, demos, or as a foundation for a larger product.

Why this exists
- To demonstrate full-stack best practices through a focused vacation-rental example built with proven Node.js/Express patterns and developer-friendly conventions.

---

## Features

Implemented and visible in the codebase:

- Authentication
  - Session-based authentication with Passport (local strategy) and passport-local-mongoose (password hashing + salts).
  - Login, register and session handling integrated with connect-mongo-backed session store.

- Property Listings
  - Listings schema with title, description, price, location, country, image metadata and geospatial geometry (GeoJSON Point).
  - Owner association to User model.

- Reviews & Ratings
  - Review model linking back to author and associated with Listings.
  - Middleware to verify review authorship.

- Image Uploads
  - Cloudinary integration via multer-storage-cloudinary.
  - Cloudinary configuration and storage adapter prepared (cloudConfig.js).

- Maps & Location
  - Listings store GeoJSON geometry (Point + coordinates) enabling geospatial features and Mapbox integration (mapbox SDK dependency present).

- Form Validation & Security Controls
  - Server-side input validation using Joi schemas (schema.js).
  - Authorization middleware (isOwner, isReviewAuthor) and login gating (isLoggedIn).

- Session & Flash
  - Express sessions with Mongo-backed store (connect-mongo) and flash notifications (connect-flash).

- Templating & UI
  - EJS with layout support via ejs-mate.
  - Static assets served from public/.

- Developer Utilities
  - Method override for RESTful routes in HTML forms.
  - Multer included for multipart/form-data handling.

---

## System Architecture

A concise, text-based architecture (GitHub may not render advanced diagrams in all views):

- Client: Browser rendering server-side EJS pages and static assets from /public.
- Server: Express app (app.js) with modular routes and controllers.
- Authentication: Passport (local) with express-session stored in MongoDB via connect-mongo.
- Database: MongoDB (Mongoose models: User, Listing, Review).
- External Services: Cloudinary for image storage; Mapbox SDK integrated for location/geocoding use.

This linear flow summarizes how requests are handled:
Client → Express Routes → Middleware (auth/validation) → Controllers → MongoDB / Cloudinary / Mapbox → Response

---

## User Flow

Primary user flow (text):
1. Visitor lands on the site and browses listings.
2. Visitor registers and logs in.
3. Authenticated user creates a listing (form + image upload).
4. Images are uploaded to Cloudinary and listing stored in MongoDB with GeoJSON location.
5. Other users can view the listing and post reviews.
6. Owners can edit or delete their own listings; reviewers can delete their own reviews.

---

## Tech Stack

- Frontend
  - EJS, ejs-mate (server-rendered UI), CSS (static)

- Backend
  - Node.js (engine in package.json), Express.js

- Database
  - MongoDB (via Mongoose)

- Authentication
  - Passport.js (passport-local) + passport-local-mongoose

- Maps / Geocoding
  - @mapbox/mapbox-sdk (dependency present; geometry field prepared for geospatial usage)

- Image Storage
  - Cloudinary (multer-storage-cloudinary)

- Session Store
  - connect-mongo (Mongo-backed sessions)

- Validation & Middleware
  - Joi (server-side validation)
  - connect-flash, method-override, multer

- Notable Libraries
  - mongoose, passport-local-mongoose, cloudinary, multer-storage-cloudinary, @mapbox/mapbox-sdk, joi, connect-mongo

---

## Folder Structure

(annotated from repository)
```
.
├─ .gitignore
├─ README.md
├─ app.js                      # Express app & bootstrapping
├─ package.json
├─ cloudConfig.js              # Cloudinary + multer storage config
├─ schema.js                   # Joi validation schemas
├─ middleware.js               # Auth, validation, ownership checks
├─ controllers/                # Controller logic (route handlers)
├─ routes/
│  ├─ listing.js               # Mounted at /listings
│  ├─ review.js                # Mounted at /listings/:id/reviews
│  └─ user.js                  # Auth / session routes (/, /login, /register)
├─ models/
│  ├─ listing.js               # Listing model (GeoJSON geometry, images, owner, reviews)
│  ├─ review.js                # Review model
│  └─ user.js                  # User model (passport-local-mongoose)
├─ public/                     # Static assets: css, js, images
├─ uploads/                    # Local upload fallbacks (project directory)
├─ utils/
│  └─ ExpressError.js          # Custom error helper
└─ views/                      # EJS templates (pages & partials)
```

---

## Live Demo

A live deployment (if available):

https://wanderlust-u98y.onrender.com/listings

---

## Installation

Prerequisites
- Node.js (project indicates Node 22.14.0 in package.json, but any recent LTS should work)
- MongoDB Atlas or local MongoDB instance
- Cloudinary account (for image uploads)

Steps
```bash
# 1. Clone
git clone https://github.com/BaljeetkumarPatel/WanderLust.git
cd WanderLust

# 2. Install dependencies
npm install

# 3. Add environment variables (see next section)

# 4. Run (development)
# By default the app listens on port 8000 (app.js) — update app.js to use process.env.PORT in production
node app.js
```

---

## Environment variables

Only list variables that are referenced in the code:

| Variable | Purpose |
|---------:|---------|
| ATLASTDB_URL | MongoDB connection string (MongoDB Atlas URI or mongodb://localhost:27017/wanderlust) |
| SECRET | Session cookie secret (used by express-session & connect-mongo crypto secret) |
| CLOUD_NAME | Cloudinary cloud name |
| CLOUD_API_KEY | Cloudinary API key |
| CLOUD_API_SECRET | Cloudinary API secret |
| NODE_ENV | Optional - used to skip dotenv in production (app.js checks NODE_ENV !== "production") |

Store these in a .env file for development:
```
ATLASTDB_URL=<your-mongodb-uri>
SECRET=<a-strong-random-secret>
CLOUD_NAME=<cloudinary-cloud-name>
CLOUD_API_KEY=<cloudinary-api-key>
CLOUD_API_SECRET=<cloudinary-api-secret>
NODE_ENV=development
```

---

## API Overview

High-level route groups mounted in app.js:

- Authentication & user routes (mounted at `/`)
  - Register / Login / Logout (server-rendered pages & POST handlers).
  - Session handling via express-session & Passport.

- Listings (mounted at `/listings`)
  - Listing index & show pages (server-rendered).
  - Listing creation & update flows (image upload → Cloudinary).
  - Listing deletion (authorization required — owner only).

- Reviews (mounted at `/listings/:id/reviews`)
  - Create and delete reviews tied to a listing.
  - Author verification middleware prevents unauthorized deletes.

Note: Routes are implemented as Express routers (see routes/*.js). EJS templates render pages and forms; method-override supports RESTful form actions.

---

## Authentication Flow

Session-based authentication (text):
- Registration creates a user record via passport-local-mongoose which manages password hashing and salts.
- On successful register/login, Passport serializes the user into the session stored by connect-mongo.
- Protected routes use isLoggedIn middleware to enforce authentication and optionally preserve redirect URLs.

---

## Database Design

Core models and relationships (text):
- User: username (managed by passport-local-mongoose), email, hashed password fields (handled by the plugin).
- Listing: title, description, price, location, country, image {url, filename}, geometry {type: 'Point', coordinates: [lng, lat]}, owner -> User, reviews -> [Review].
- Review: comment, rating, createdAt, author -> User.

---

## Project Workflow

Request handling (text):
1. Browser sends HTTP request to Express route.
2. Route applies middleware (validation, auth checks).
3. Controller handles business logic, interacts with MongoDB and external services (Cloudinary, Mapbox).
4. Controller returns HTML response or redirect rendered by EJS.

---

## Performance

Implemented patterns that support scalable operation:
- MVC separation (routes/controllers/models) keeps business logic organized and testable.
- Session store backed by Mongo (connect-mongo) prevents large memory usage on the server and supports multiple server instances.
- Offloading images to Cloudinary reduces server workload and increases CDN delivery performance.
- GeoJSON geometry on listings enables geospatial indexes/queries (ready for performant location queries).

---

## Security

Implemented safeguards present in the codebase:
- Password hashing & salting via passport-local-mongoose.
- Server-side input validation using Joi (schema.js) for listing and review payloads.
- Route-level authorization middleware (isOwner, isReviewAuthor) to protect destructive actions.
- Session security via express-session configuration and Mongo-backed store (connect-mongo).
- Flash messages used for safe user feedback rather than exposing raw errors.

Notes
- Additional hardening (rate limiting, helmet, CSP) are recommended as next steps.

---

## Future Roadmap

Planned / desirable features (prioritized):
- Booking engine and availability calendar (payments integration).
- Payment gateway (Stripe) for reservations.
- Notifications & messaging between guests and owners.
- OAuth (Google/Facebook) login.
- Availability calendar and booking conflict resolution.
- Analytics dashboard for hosts.
- Mobile app or responsive progressive web app enhancements.
- Recommendation engine / AI-driven property suggestions.

---

## Contributing

Guidelines
- Fork the repository and open a feature branch.
- Follow the existing code style for controllers/routes/models.
- Add server-side Joi validation for any new inputs.
- When adding features that touch uploads, keep Cloudinary configuration patterns consistent.
- Open a PR with a clear description, screenshots (if UI changes), and tests if applicable.

PR checklist
- [ ] Code builds and the server runs without errors.
- [ ] New dependencies added only when necessary.
- [ ] Database migrations or seed adjustments documented.
- [ ] Security considerations covered (input validation, auth checks).

---

## Deployment

A typical deployment path:
1. Provision a MongoDB Atlas cluster.
2. Create a Cloudinary account and note CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET.
3. Create environment variables as described above.
4. On your host (Heroku, Render, Railway, VPS):
   - Install Node.js
   - Set environment variables in the platform UI
   - Run: `npm install`
   - Start the service: `node app.js` (or use a process manager like PM2)
5. Ensure the deployment environment sets NODE_ENV=production and protects secrets.

Notes
- The app currently binds to port 8000 in app.js. For platform compatibility, update app.js to use process.env.PORT if you want platform-assigned ports.

---

## Author

BaljeetkumarPatel

---

## Acknowledgements

Open-source libraries and services used:
- Express, EJS, ejs-mate
- Mongoose
- Passport.js and passport-local-mongoose
- Cloudinary + multer-storage-cloudinary
- @mapbox/mapbox-sdk
- Joi for validation
- connect-mongo for session storage
- connect-flash, method-override, multer

---

## License

This project is licensed under the MIT License — see the LICENSE file for details.

---

Built to demonstrate scalable full-stack web development principles inspired by modern vacation rental platforms.
