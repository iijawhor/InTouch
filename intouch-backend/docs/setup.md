# Setup Guide for InTouch Backend

This guide will help you set up the **InTouch backend** locally and get it running on your machine.

---

## **1. Prerequisites**

Before setting up, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (local or MongoDB Atlas account)
- Optional: **Nodemon** for development (auto-restarts the server on changes)

---

## **2. Clone the Repository**

Open your terminal and run:

````bash
git clone <your-repo-url>
cd intouch-backend

## **3. Install Dependencies**

Install all required Node.js packages:

```bash
npm install
````

````

This will install:

- express
- mongoose
- cookie-parser
- cors

---

## **4. Create Environment Variables**

Create a `.env` file in the root folder of your project:

```
PORT=8000
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=http://localhost:3000
```

- **PORT** → Port on which the server will run (default: 8000)
- **MONGODB_URI** → Your MongoDB connection string
- **CORS_ORIGIN** → Frontend URL allowed to access this backend

Example for MongoDB Atlas:

```
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net
```

---

## **5. Run the Server**

### Using Node

```bash
node server.js
```

### Using Nodemon (recommended for development)

```bash
npx nodemon server.js
```

---

## **6. Verify the Setup**

1. Open your browser or Postman.
2. Visit `http://localhost:8000/`.
3. You should see the server running and a message confirming MongoDB is connected in the terminal.

---

## **7. Folder Structure Reference**

```
intouch-backend/
├─ src/
│  ├─ app.js          # Express app setup
│  ├─ db.js           # MongoDB connection
│  ├─ constants.js    # DB_NAME constant
├─ public/            # Static files served
├─ package.json
├─ .env               # Environment variables
└─ README.md
```

---

## **8. Notes**

- Make sure your **MongoDB URI** is correct.
- If using **MongoDB Atlas**, whitelist your IP or allow access from anywhere (`0.0.0.0/0`).
- For any errors during setup, check console logs; the backend has global error handling to help debug issues.

```

```
````
