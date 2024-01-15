# URLshortener
## Overview
This project is a simple URL shortener built with Node.js, Express, and MongoDB. It allows users to shorten long URLs for easy sharing and tracking. The application also provides analytics by keeping track of the number of times each shortened URL is visited.
## Features
- Shorten long URLs to a concise format.
- Redirects users from the shortened URL to the original link.
- Tracks and displays the number of times each shortened URL is visited.
- MongoDB database for storing URL mappings and visit counts.
## Getting Started
### Prerequisites
- Node.js installed
- MongoDB installed
### Installation
**Clone the repository:**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
  ```

**Install dependencies**
  ```bash
  npm install
  ```
**Ensure MongoDB is running**
  ```bash
- Ensure MongoDB is running.
- Update the MongoDB connection string in `config.js` if needed.
  ```
**Start the Application**
```bash
npm start
