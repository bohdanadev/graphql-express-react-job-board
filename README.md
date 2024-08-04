# GraphQL-Express-React-Job-Board

## Overview

Welcome to the Graphql-Express-React-Job-Board project! This full-stack application leverages modern technologies to create a job board where users can log in, browse job listings, view detailed job and company information, and create new job postings.

## Tech Stack

**Backend**: Express.js  
**Frontend**: React  
**API**: GraphQL  
**Database**: SQLite  
**Query Builder**: Knex  
**Authentication**: JWT (JSON Web Tokens)  
**Frontend GraphQL Client**: Apollo Client

## Features

**User Authentication**: Secure login system using JWT.  
**Job Listings**: Browse through a list of available jobs.  
**Job Details**: View detailed information about each job.  
**Company Details**: Access information about the company offering the job.  
**Job Creation**: Authenticated users can post new job listings.

## Getting Started

**Prerequisites**  
Node.js  
npm

## Installation

1. Clone the Repository

```bash
git clone https://github.com/bohdanadev/graphql-express-react-job-board.git
cd graphql-express-react-job-board
```

2. Install Dependencies

For the backend:

```bash
cd server
npm ci
```

For the frontend:

```bash
cd client
npm ci
```

3. Setup Configuration Files

For the backend, create a `.env` file in the `server` directory:

```.env
PORT=9000
```

For the frontend, create a `keys.js` file in the `client/src` directory:

```keys.js
export const GRAPHQL_URL = "http://localhost:9000/graphql";
export const API_URL = "http://localhost:9000";

export const JOBS_PER_PAGE = 5;
```

## Running the Application

1. Start the Backend Server:

```bash
cd server
npm run start
```

The GraphQL Playground will be available at http://localhost:9000/graphql.

2. Start the Frontend

```bash
cd client
npm start
```

The frontend application will be available at http://localhost:3000.
