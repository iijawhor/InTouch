```markdown
# API Reference - InTouch Backend

This document provides details about the API endpoints for the **InTouch backend**.

> Note: Currently, the backend has basic setup with Express and MongoDB. Add routes here as you develop them.

---

## **Base URL**
```

[http://localhost:8000/](http://localhost:8000/)

````

- If deployed, replace with your deployed backend URL.
- All endpoints assume JSON request and response.

---

## **Middleware**

The backend uses:

- **CORS** → Configured to allow requests from your frontend (`CORS_ORIGIN` in `.env`).
- **Cookie Parser** → Parses cookies sent in requests.
- **JSON & URL-encoded Parsing** → Limits request body to 16kb.
- **Global Error Handler** → Sends JSON response on errors:

```json
{
  "success": false,
  "message": "Error message"
}
````

---

## **Sample Endpoints**

> Placeholder endpoints. Add your actual routes here.

### **1. Test Route**

```
GET /
```

**Description:** Checks if the server is running.

**Response:**

```json
"Hello World from Node.js backend!"
```

---

### **2. Database Connection**

- All routes use MongoDB via **Mongoose**.
- DB name is configured in `constants.js` (`DB_NAME`).
- Connection URI is read from `.env` (`MONGODB_URI`).

> Any route accessing the database should handle errors properly. Errors will be caught by the global error handler.

---

### **3. Adding New Routes**

**Folder structure recommendation:**

```
src/
├─ routes/
│  ├─ userRoutes.js
│  └─ messageRoutes.js
├─ controllers/
│  ├─ userController.js
│  └─ messageController.js
```

**Example: Adding a `/users` route**

```javascript
import express from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers); // GET /users
router.post("/", createUser); // POST /users

export default router;
```

```javascript
// src/app.js
import userRoutes from "./routes/userRoutes.js";
app.use("/users", userRoutes);
```

---

### **4. Response Format**

All API responses should follow this standard:

```json
{
  "success": true,
  "data": {
    /* your data */
  },
  "message": "Optional success message"
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error message"
}
```

---

### **5. Notes for Future APIs**

- Use **async/await** for database operations.
- Catch errors and pass to `next(err)` to trigger global error handling.
- Add **CORS headers** only if needed for specific routes.
- Keep body size under 16kb (configured in Express).

---

```
This API reference is designed to grow as your backend develops.
```

---

This `api.md` serves as a **living document**. Once you add actual CRUD routes, you can fill in:

- Endpoint URLs
- HTTP methods
- Request body examples
- Response examples
