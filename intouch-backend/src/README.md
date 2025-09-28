```markdown
# InTouch Backend

Backend server for **InTouch**, built using **Node.js**, **Express**, and **MongoDB**.  
It provides REST APIs, handles cookies, supports CORS, serves static files, and includes global error handling.

---

## Features

- Connects to MongoDB using Mongoose
- Parses JSON and URL-encoded request bodies
- Handles cookies via `cookie-parser`
- Configures CORS for frontend access
- Serves static files from the `public` folder
- Global error handling middleware

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **cookie-parser**
- **CORS**

---

## Project Structure
```

intouch-backend/
├─ src/
│ ├─ app.js # Express app setup
│ ├─ db.js # MongoDB connection
│ ├─ constants.js # Constants like DB_NAME
├─ public/ # Static files served
├─ package.json
├─ .env # Environment variables
└─ README.md # Project overview

````

---

## Prerequisites
- Node.js >= 18
- npm >= 9
- MongoDB URI (Atlas or local MongoDB instance)

---

## Setup & Run

1. **Clone the repository**
```bash
git clone <repository-url>
cd intouch-backend
````

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root folder with the following variables:

```
PORT=8000
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=http://localhost:3000
```

4. **Run the server**

- Using Node:

```bash
node server.js
```

- Using Nodemon (for development):

```bash
npm install -D nodemon
npx nodemon server.js
```

5. **Check server**

- Visit `http://localhost:8000/` (if routes are added)
- Console will log MongoDB connection status.

---

## Documentation

If additional guides are needed, you can create a `docs/` folder:

- [Setup Guide](docs/setup.md)
- [API Reference](docs/api.md)
- [Architecture](docs/architecture.md)

---

## Environment Variables

| Variable    | Description                        | Example                                        |
| ----------- | ---------------------------------- | ---------------------------------------------- |
| PORT        | Server port                        | 8000                                           |
| MONGODB_URI | MongoDB connection URI             | mongodb+srv://user:pass@cluster                |
| CORS_ORIGIN | Frontend URL allowed to access API | [http://localhost:3000](http://localhost:3000) |
