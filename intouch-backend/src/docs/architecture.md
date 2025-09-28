```markdown
# Architecture - InTouch Backend

This document describes the architecture of the **InTouch backend**, including folder structure, request flow, and database interaction.

---

## **1. Folder Structure**
```

intouch-backend/
├─ src/
│ ├─ app.js # Express app setup, middleware, error handling
│ ├─ db.js # MongoDB connection using Mongoose
│ ├─ constants.js # Global constants (e.g., DB_NAME)
│ ├─ routes/ # API route definitions (to be added)
│ └─ controllers/ # Route controllers (to be added)
├─ public/ # Static files served by Express
├─ package.json
├─ .env # Environment variables
└─ README.md

````

---

## **2. Technology Stack**

- **Node.js** → Backend runtime
- **Express.js** → Web framework for routing and middleware
- **MongoDB + Mongoose** → Database and object modeling
- **cookie-parser** → Parses cookies from HTTP requests
- **CORS** → Cross-Origin Resource Sharing

---

## **3. Request Flow**

1. **Client sends HTTP request** → e.g., frontend at `http://localhost:3000`
2. **CORS middleware** → Checks if request origin is allowed
3. **Cookie parser middleware** → Parses any cookies in the request
4. **Body parser middleware** → Parses JSON or URL-encoded body (16kb limit)
5. **Routing middleware** → Directs request to the correct route handler
6. **Controller** → Handles the request, interacts with MongoDB if needed
7. **Response** → Returns JSON response to client
8. **Global error handler** → Catches any errors and sends standardized JSON error response

---

## **4. MongoDB Connection**

- Configured in `db.js` using **Mongoose**
- Connection URI comes from `.env` (`MONGODB_URI`)
- Database name comes from `constants.js` (`DB_NAME`)
- Connection established asynchronously before server starts listening

```javascript
connectDB()
  .then(() => app.listen(PORT))
  .catch(err => console.log("MongoDB connection failed:", err));
````

---

## **5. Middleware Overview**

| Middleware                 | Purpose                                                      |
| -------------------------- | ------------------------------------------------------------ |
| `cors`                     | Allows frontend apps to make requests to backend             |
| `cookie-parser`            | Parses cookies from incoming requests                        |
| `express.json`             | Parses JSON request bodies (limit 16kb)                      |
| `express.urlencoded`       | Parses URL-encoded request bodies (limit 16kb)               |
| `express.static("public")` | Serves static files from the `public` folder                 |
| Error handling middleware  | Catches errors globally and returns a standard JSON response |

---

## **6. Adding New Features**

1. **Routes** → Add new files in `src/routes/`
2. **Controllers** → Add logic for database and response in `src/controllers/`
3. **Database Models** → Create Mongoose models for collections in MongoDB
4. **Connect Routes** → Import routes into `app.js` and use `app.use("/route", routeFile)`

---

## **7. Flow Diagram**

```text
[ Client / Frontend ]
          |
          v
      [ CORS Middleware ]
          |
          v
     [ Cookie Parser ]
          |
          v
     [ Body Parser ]
          |
          v
       [ Routes ]
          |
          v
    [ Controller Logic ]
          |
          v
       [ MongoDB ]
          |
          v
       [ Response ]
          |
          v
  [ Global Error Handler ]
```

---

This architecture allows **scalable development**, easy addition of new routes, and robust error handling while keeping the code organized.
